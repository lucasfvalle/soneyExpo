require('dotenv').config()
const path = require('path')
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const pagamento = require("./models/Pagamento");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "public")))

app.get("/", function (_, res) {  
  res.sendFile(__dirname + '/public/index.html');
});

function somaIngresso(quantidade) {
  var total;
  var preco = 60;
  var frete = 40;
  if (quantidade > 3){
    total = quantidade * preco;
    return total;
  }  
  else {
    total = (quantidade * preco) + frete;
    return total;
  }
}

function pagamentoCreate(body) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await pagamento.create({
        email: body.email,
        nome: body.nome,
        telefone: body.telefone,
        endereco: body.endereco,
        numero: body.numero,
        bairro: body.bairro,
        cidade: body.cidade,
        estado: body.estado,
        cep: body.cep,
        dataVisita: body.dataVisita,
        quantidade: body.quantidade,
        total: somaIngresso(body.quantidade)
      })
      
      return resolve(response)
    } catch (error) {
      return reject(error)
    }
  })
}

app.post("/", async (req, res) => {
  try {
    await pagamentoCreate(req.body)

    return res.status(200).json({
      message: "Processado",
    })
  } catch (error) {
    return res.status(500).json({
      message: "Algo deu errado :(  -  Por favor contate-nos!"
    })
  }
})

app.listen(8080, function () {
  console.log(`Ready on port 8080`);
});