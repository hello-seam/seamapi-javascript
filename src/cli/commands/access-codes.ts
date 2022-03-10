import { CommandModule } from "yargs"
import executeCommand from "../lib/execute-command"
import { GlobalOptions } from "../lib/global-options"

const command: CommandModule<GlobalOptions> = {
  command: "access-codes",
  aliases: ["access-code", "ac"],
  describe: "interact with access codes",
  builder: (yargs) => {
    return yargs
      .demandCommand()
      .command(
        "list",
        "list access codes",
        (yargs) => {
          return yargs.option("device-id", {
            describe: "filter by device ID",
            demandOption: true,
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand(
            "accessCodes.list",
            [
              {
                device_id: argv.deviceId,
              },
            ],
            argv
          )
        }
      )
      .command(
        "create",
        "create an access code",
        (yargs) => {
          return yargs
            .option("device-id", {
              describe: "the device ID",
              demandOption: true,
              type: "string",
            })
            .option("name", {
              describe: "the name of the access code",
              type: "string",
            })
            .option("code", {
              describe: "the code",
              defaultDescription: "generate a random code",
              type: "string",
            })
            .option("starts-at", {
              describe: "the start datetime of the access code",
              coerce: (v) => (v ? new Date(v) : undefined),
              implies: "ends-at",
            })
            .option("ends-at", {
              describe: "the end datetime of the access code",
              coerce: (v) => (v ? new Date(v) : undefined),
              implies: "starts-at",
            })
        },
        async (argv) => {
          await executeCommand(
            "accessCodes.create",
            [
              {
                device_id: argv.deviceId,
                name: argv.name,
                code: argv.code,
                starts_at: argv.startsAt,
                ends_at: argv.endsAt,
              },
            ],
            argv
          )
        }
      )
      .command(
        "delete <id>",
        "delete an access code",
        (yargs) => {
          return yargs.positional("id", {
            describe: "the access code ID",
            demandOption: true,
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand(
            "accessCodes.delete",
            [
              {
                access_code_id: argv.id,
              },
            ],
            argv
          )
        }
      )
  },
  handler: () => {},
}

export default command
