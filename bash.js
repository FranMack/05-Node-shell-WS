const commands = require("./commands");

// Un prompt como output
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea

process.stdin.on("data", function (data) {
  let entrada = data.toString().trim().split(" ");
  let argumentos = entrada.slice(1).join(" ");

  let cmd = entrada[0]; 
  commands[cmd](argumentos);

 //git

  
});








