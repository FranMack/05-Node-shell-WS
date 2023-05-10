//fs es un modulo nativo de node que permite leer archivo de nuestro sistema
const fs = require("fs");

//request es un modulo que importamos con "npm install request"

const request=require("request")


function pwd() {
  let ruta = process.cwd();
  process.stdout.write(ruta + "\n");
  process.stdout.write("\nprompt > ");
}

function date() {
  let fecha = Date();

  process.stdout.write(fecha + "\n");
  process.stdout.write("\nprompt > ");
}



function ls() {
  fs.readdir(".", function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write("\nprompt > ");
  });
}

function echo(parametro) {
  if (process.env[parametro]) {
    process.stdout.write(process.env[parametro] + "\n");
    process.stdout.write("\nprompt > ");
  }
  process.stdout.write(parametro + "\n");
  process.stdout.write("\nprompt > ");
}

function cat(parametro) {
  fs.readFile(parametro, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      return;
    }
    process.stdout.write(data);
    process.stdout.write("\nprompt > ");
  });
}

function head(parametro) {
  fs.readFile(parametro, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      return;
    }

    let lines=data.split("\n");
    let response=lines.slice(0,5).join("\n");

    process.stdout.write(response);
    process.stdout.write("\nprompt > ");



   
    process.stdout.write("\nprompt > ");
  });
}

function tail(parametro) {

  fs.readFile(parametro, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      return;
    }

    let lines=data.split("\n");
    let response=lines.slice(0,-5).join("\n");

    process.stdout.write(response);
    process.stdout.write("\nprompt > ");



   
    process.stdout.write("\nprompt > ");
  });
  
}

function curl(url){
  request(url.toString(),(err,response,body)=>{
    if(err){throw err;}
    process.stdout.write(body);
    process.stdout.write("\nprompt > ");
  })

}

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls,
  echo: echo,
  cat: cat,
  head: head,
  tail: tail,
  curl:curl
};
