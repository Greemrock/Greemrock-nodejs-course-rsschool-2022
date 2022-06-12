import { stdin, stdout, exit } from "process";
import path from "path";
import os from "os";

function getUserName() {
  return process.argv.splice(2).join("").split("=")[1];
}

function writeCurrentLocation() {
  let location = os.homedir();
  const __dirname = path.dirname(os.homedir());

}

function pleasePrintComandInConsole() {
  stdout.write('Please print commands in console:\n')
}

export const fileManager = () => {
  const readStream = new Readable({
    objectMode: true,
    read() {}
  });
  const userName = getUserName();
  const __dirname = path.dirname(os.homedir());

  readStream.write(`Welcome to the File Manager, ${userName}!`);
  readStream.write(
    "\n(ctrl + c pressed or user sent .exit command into console)\n\n"
  );

  pleasePrintComandInConsole();

  stdin.on("data", (data) => {
    if (data.toString().includes(".exit")) {
      readStream.write(`\n\nYou are currently in ${__dirname}\n\n`);
      readStream.write(`\nThank you for using File Manager, ${userName}!\n\n`);
      exit(0);
    }
  });
};

fileManager();
