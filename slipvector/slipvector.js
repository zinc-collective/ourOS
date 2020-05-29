import { readLines } from "https://deno.land/std/io/bufio.ts"

class SlipCommand {
  execute() {
    console.log('The slipdrive pulses.')
  }
}

class HelpCommand {
  execute() {
    console.log('The unscanned vastness surrounds you. You consider slipping to another system.')
  }
}
class ScanCommand {
  execute() {
    console.log('There are nine-ish significant bodies orbiting a yellow star.')
  }
}
const commands = {
  "scan": new ScanCommand(),
  "slip": new SlipCommand(),
  help: new HelpCommand()
}


const endGame = () => {
  console.log('Goodbye, Explorer!')
}

const beginGame = async () => {
  console.log('Welcome, Explorer!')
  for await (const line of readLines(Deno.stdin)) {
    if (commands[line]) {
      commands[line].execute();
    } else if (line == 'exit') {
      return;
    } else {
      commands.help.execute();
    }
  }
}




window.addEventListener("load", beginGame);
window.addEventListener("unload", endGame);

