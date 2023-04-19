import test from "ava"
import { testAPIMethod } from "./fixtures/helpers/test-api-method-macro"

// Noise Thresholds
test(
  testAPIMethod("noiseThresholds.list"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.minut.device_with_quiet_hours.device_id,
      },
    ],
    modifiesState: true,
    load_devices_from: ["minut"],
  },
  "NoiseThresholds[]"
)

test(
  testAPIMethod("noiseThresholds.delete"),
  {
    args: (seed) => [
      {
        noise_threshold_id:
          seed.devices.minut.noise_threshold_quiet_hours.noise_threshold_id,
        device_id: seed.devices.minut.device_with_quiet_hours.device_id,
      },
    ],
    modifiesState: true,
    load_devices_from: ["minut"],
  },
  "{}"
)

// Workspaces
test(testAPIMethod("workspaces.list"), {}, "Workspace[]")
test(testAPIMethod("workspaces.get"), {}, "Workspace")
test(testAPIMethod("workspaces.resetSandbox"), { modifiesState: true }, "{}")

// Locks
test(testAPIMethod("locks.list"), {}, "LockDevice[]")
test(
  "with connected account ID",
  testAPIMethod("locks.list"),
  {
    args: (seed) => [seed.devices.schlageLock.connectedAccountId],
  },
  "LockDevice[]"
)
test(
  testAPIMethod("locks.get"),
  { args: (seed) => [seed.devices.schlageLock.id1] },
  "LockDevice"
)
test(
  testAPIMethod("locks.lockDoor"),
  {
    args: (seed) => [seed.devices.schlageLock.id1],
    modifiesState: true,
  },
  "{}"
)
test(
  testAPIMethod("locks.unlockDoor"),
  {
    args: (seed) => [seed.devices.schlageLock.id1],
    modifiesState: true,
  },
  "{}"
)

// Devices
test(testAPIMethod("devices.list"), {}, "AnyDevice[]")
test(
  "with connected account ID",
  testAPIMethod("devices.list"),
  {
    args: (seed) => [
      { connected_account_id: seed.devices.schlageLock.connectedAccountId },
    ],
  },
  "AnyDevice[]"
)
test(
  "by ID",
  testAPIMethod("devices.get"),
  {
    args: (seed) => [{ device_id: seed.devices.schlageLock.id1 }],
  },
  "AnyDevice"
)
test(
  "by name",
  testAPIMethod("devices.get"),
  {
    args: (seed) => [{ name: seed.devices.schlageLock.name1 }],
  },
  "AnyDevice"
)
test(
  testAPIMethod("devices.update"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.schlageLock.id1,
        name: "New Name",
      },
    ],
    modifiesState: true,
  },
  "{}"
)
test(
  "delete",
  testAPIMethod("devices.delete"),
  {
    args: (seed) => [{ device_id: seed.devices.schlageLock.id1 }],
    modifiesState: true,
  },
  "{}"
)
test(testAPIMethod("devices.unmanaged.list"), {}, "UnmanagedDevice[]")
test(testAPIMethod("devices.listDeviceProviders"), {}, "DeviceProvider[]")
test(
  "with provider_category",
  testAPIMethod("devices.listDeviceProviders"),
  {
    args: [
      {
        provider_category: "stable",
      },
    ],
  },
  "DeviceProvider[]"
)

// Connect Webviews
test(testAPIMethod("connectWebviews.list"), {}, "ConnectWebview[]")
test(
  testAPIMethod("connectWebviews.get"),
  {
    args: (seed) => [seed.connectWebviewId],
  },
  "ConnectWebview"
)
test(
  testAPIMethod("connectWebviews.create"),
  {
    args: [
      {
        accepted_providers: ["august"],
      },
    ],
    modifiesState: true,
  },
  "ConnectWebview"
)
test(
  testAPIMethod("connectWebviews.delete"),
  {
    args: (seed) => [
      {
        connect_webview_id: seed.connectWebviewId,
      },
    ],
    modifiesState: true,
  },
  "{}"
)

// Access Codes
test(
  testAPIMethod("accessCodes.list"),
  {
    args: (seed) => [{ device_id: seed.devices.schlageLock.id1 }],
  },
  "AccessCode[]"
)
test(
  testAPIMethod("accessCodes.create"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.schlageLock.id1,
        name: "Created by Ava",
        code: "4321",
      },
    ],
    modifiesState: true,
  },
  "AccessCode"
)
test(
  testAPIMethod("accessCodes.createMultiple"),
  {
    args: (seed) => [
      {
        device_ids: [seed.devices.schlageLock.id1],
        name: "Created by Ava",
      },
    ],
    modifiesState: true,
  },
  "AccessCode[]"
)
test(
  "by access code ID",
  testAPIMethod("accessCodes.get"),
  {
    args: (seed) => [
      {
        access_code_id: seed.devices.augustLock.accessCode.access_code_id,
      },
    ],
  },
  "AccessCode"
)
test(
  "by device ID and code",
  testAPIMethod("accessCodes.get"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.augustLock.id1,
        code: seed.devices.augustLock.accessCode.code!,
      },
    ],
  },
  "AccessCode"
)
test(
  "change type to timebound",
  testAPIMethod("accessCodes.update"),
  {
    args: (seed) => [
      {
        access_code_id: seed.devices.schlageLock.accessCode.access_code_id,
        name: "new name",
        starts_at: new Date(),
        ends_at: new Date(Date.now() + 1000 * 60 * 60),
      },
    ],
    modifiesState: true,
  },
  "TimeBoundAccessCode"
)
test(
  "scheduled",
  testAPIMethod("accessCodes.create"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.augustLock.id1,
        name: "Created by Ava",
        code: "4321",
        starts_at: new Date(),
        ends_at: new Date(Date.now() + 1000 * 60 * 60),
      },
    ],
    modifiesState: true,
  },
  "AccessCode"
)
test(
  testAPIMethod("accessCodes.update"),
  {
    args: (seed) => [
      {
        access_code_id: seed.devices.augustLock.accessCode.access_code_id,
        name: "new name",
      },
    ],
    modifiesState: true,
  },
  "AccessCode"
)
test(
  "change type to ongoing",
  testAPIMethod("accessCodes.update"),
  {
    args: (seed) => [
      {
        access_code_id: seed.devices.augustLock.accessCode.access_code_id,
        type: "ongoing",
      },
    ],
    modifiesState: true,
  },
  "OngoingAccessCode"
)
test(testAPIMethod("connectedAccounts.list"), {}, "ConnectedAccount[]")
test(
  "by email",
  testAPIMethod("connectedAccounts.get"),
  {
    args: (seed) => [
      {
        email: "user-3@example.com",
      },
    ],
  },
  "ConnectedAccount"
)
test(
  "by ID",
  testAPIMethod("connectedAccounts.get"),
  {
    args: (seed) => [
      {
        connected_account_id: seed.devices.augustLock.connectedAccountId,
      },
    ],
  },
  "ConnectedAccount"
)
test(
  testAPIMethod("connectedAccounts.delete"),
  {
    args: (seed) => [
      {
        connected_account_id: seed.devices.augustLock.connectedAccountId,
      },
    ],
    modifiesState: true,
  },
  "{}"
)
