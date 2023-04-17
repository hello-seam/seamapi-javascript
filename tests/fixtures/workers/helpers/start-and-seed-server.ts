import { GenericContainer, Wait } from "testcontainers"
import getPort from "get-port"
import knex from "knex"
import defaultAxios from "axios"
import getTestDatabase from "./get-test-database"
import getTestSvix from "./get-test-svix"
import addFakeSchlageDevices from "./add-fake-schlage-devices"
import addFakeAugustDevices from "./add-fake-august-devices"
import addFakeMinutDevices from "./add-fake-minut-devices"

const SEAM_ADMIN_PASSWORD = "1234"

const startAndSeedServer = async () => {
  const database = await getTestDatabase()
  const svix = await getTestSvix({
    env: {
      SVIX_DB_DSN: database.internalDatabaseUrl,
      SVIX_JWT_SECRET: "somejwtsecret",
      SVIX_QUEUE_TYPE: "memory",
    },
    network: database.network,
  })

  // SERVER_BASE_URL needs to satisfy these two conditions:
  // - The process inside the container can reach itself
  // - Processes on the host can reach the container
  //
  // We can't have separate values for the host and the container,
  // because sometimes the container will generate a URL and pass
  // it back to the host.
  // Instead, we'll generate a random port and make sure that everything
  // is listening to that port, so that localhost:${port} is valid
  // regardless of what context we're in.
  const hostPort = await getPort()
  const serverUrl = `http://localhost:${hostPort}`
  const seamConnectImage =
    process.env.SEAM_CONNECT_IMAGE ?? "ghcr.io/seamapi/seam-connect:latest"

  const server = await new GenericContainer(seamConnectImage)
    .withExposedPorts({
      container: hostPort,
      host: hostPort,
    })
    .withEnvironment({
      DATABASE_URL: database.internalDatabaseUrl,
      POSTGRES_DATABASE: database.databaseName,
      NODE_ENV: "test",
      SERVER_BASE_URL: serverUrl,
      PORT: hostPort.toString(),
      SEAMTEAM_ADMIN_PASSWORD: SEAM_ADMIN_PASSWORD,
      SVIX_ENDPOINT: svix.endpoint,
      SVIX_API_KEY: svix.apiKey,
      ENABLE_UNMANAGED_DEVICES: "true",
    })
    .withCommand(["start:for-integration-testing"])
    .withNetwork(database.network)
    .withNetworkAliases("api")
    .withWaitStrategy(Wait.forLogMessage("ready - started server"))
    .start()

  const db = knex(database.externalDatabaseUrl)

  const workspace = await db("seam.workspace")
    .where({ is_sandbox: true })
    .innerJoin(
      "seam.user_workspace",
      "seam.workspace.workspace_id",
      "seam.user_workspace.workspace_id"
    )
    .innerJoin("seam.user", "seam.user_workspace.user_id", "seam.user.user_id")
    .first()

  const axios = defaultAxios.create({
    baseURL: serverUrl,
  })

  const api_key = "seam_sandykey_0000000000000000000sand"

  ;(axios.defaults.headers as any).Authorization = `Bearer ${api_key}`

  const [schlageLock, augustLock, minut, connectWebview] = await Promise.all([
    addFakeSchlageDevices(axios),
    addFakeAugustDevices(axios),
    addFakeMinutDevices(axios),
    axios.post("/connect_webviews/create", {
      accepted_providers: ["schlage", "august"],
    }),
  ])

  return {
    serverUrl,
    externalDatabaseUrl: database.externalDatabaseUrl,
    seamAdminPassword: SEAM_ADMIN_PASSWORD,
    seed: {
      apiKey: api_key,
      workspaceId: workspace.workspace_id,
      connectWebviewId: connectWebview.data.connect_webview.connect_webview_id,
      devices: {
        minut,
        schlageLock,
        augustLock,
      },
    },
    teardownFn: () => server.stop(),
  }
}

export default startAndSeedServer
