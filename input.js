let connection;
let lastMove = "Move: left";
let intervalID = setInterval(() => {
  connection.write(lastMove);
}, 100);

const handleUserInput = (data) => {
  if (data === "\u0003") {
    process.exit();
  }
  if (data === 'a') {
    lastMove = "Move: left";
  }
  if (data === 's') {
    lastMove = "Move: down";
  }
  if (data === 'd') {
    lastMove = "Move: right";
  }
  if (data === 'w') {
    lastMove = "Move: up";
  }
  if (data === 'q') {
    connection.write("Say: ZoomZoom");
  }
  if (data === 'e') {
    clearInterval(intervalID);
  }
}

const setupInput = (conn) => {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = { setupInput };
