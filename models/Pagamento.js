const db = require('./db')

const Pagamento = db.sequelize.define('ingressos', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    endereco: {
        type: db.Sequelize.STRING
    },
    numero: {
        type: db.Sequelize.STRING
    },
    bairro: {
        type: db.Sequelize.STRING
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    estado: {
        type: db.Sequelize.STRING
    },
    cep: {
        type: db.Sequelize.STRING
    },
    dataVisita: {
        type: db.Sequelize.STRING
    },
    quantidade: {
        type: db.Sequelize.INTEGER
    },
    total: {
        type: db.Sequelize.DOUBLE
    }
})

//Criar a tabela
//Pagamento.sync({force: true})

module.exports = Pagamento