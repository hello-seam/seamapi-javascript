import { CommandModule } from "yargs"
import executeCommand from "../lib/execute-command"
import { GlobalOptions } from "../lib/global-options"

const command: CommandModule<GlobalOptions> = {
  command: "locks",
  aliases: ["lock"],
  describe: "interact with locks",
  builder: (yargs) => {
    return yargs
      .demandCommand()
      .command(
        "get <id>",
        "get a lock",
        (yargs) => {
          return yargs.positional("id", {
            describe: "the lock ID",
            demandOption: true,
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand("locks.get", [argv.id], argv)
        }
      )
      .command(
        "list",
        "list locks",
        (yargs) => {
          return yargs.option("connected-account-id", {
            describe: "filter by connected account ID",
            type: "string",
            alias: "ca",
          })
        },
        async (argv) => {
          await executeCommand("locks.list", [argv.connectedAccountId], argv)
        }
      )
      .command(
        "lock-door <id>",
        "lock a door",
        (yargs) => {
          return yargs.positional("id", {
            describe: "the lock ID",
            demandOption: true,
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand("locks.lockDoor", [argv.id], argv)
        }
      )
      .command(
        "unlock-door <id>",
        "unlock a door",
        (yargs) => {
          return yargs.positional("id", {
            describe: "the lock ID",
            demandOption: true,
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand("locks.unlockDoor", [argv.id], argv)
        }
      )
  },
  handler: () => {},
}

export default command
