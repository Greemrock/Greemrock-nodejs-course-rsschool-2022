import process from 'process';

function getUserName () {
  return process.argv
  .splice(2)
  .join("")
  .split('=')[1];
}

export const fileManager = () => {
  const userName = getUserName();
  console.log(`Welcome to the File Manager, ${userName}!`);
};

fileManager();
