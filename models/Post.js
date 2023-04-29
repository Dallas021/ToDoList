const db = require("./db")

const Post = db.sequelize.define('todolist' , {
    titulo: {
       type: db.Sequelize.STRING
    },
    conteudo: {
       type: db.Sequelize.STRING
    },
    local: {
        type: db.Sequelize.STRING
    },
    data: {
        type: db.Sequelize.STRING
    },
    horario: {
        type: db.Sequelize.STRING
    }
});

module.exports = Post;