const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const BodyParser = require('body-parser');
const Post = require('./models/Post');

//Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine' , 'handlebars');
    
    //bodyparser
    app.use(BodyParser.urlencoded({extend: false}));
    app.use(BodyParser.json());
    
    //rotas
    app.get("/" , function(req, res){
        res.render('inicio')
    });

    app.get("/cad" , function(req, res){
        res.render('formulario.handlebars');
    });

    app.post("/add" , function(req, res){
        Post.create({
            titulo: req.body.titulo ,
            conteudo: req.body.conteudo , 
            local: req.body.local ,
            data: req.body.data ,
            horario: req.body.hora
        }).then(function(){
            res.redirect("/sucesso")
            console.log("Evento Cadastrado com Sucesso");
        }).catch(function(erro){
            console.log("Erro ao cadastrar Evento "+erro);
        });
    });

    app.get("/add/completed" , function(req, res){
        Post.findAll({order: [['id' ,'DESC']]}).then(function(posts){
            res.render('home' , {todolists: (posts)})
        });
    });

    app.get("/deletar/:id" , function(req, res){
        Post.destroy({where: {'id': req.params.id}});
        res.render('delete.handlebars')
    })    

    app.get("/sucesso" , function(req, res){
        res.render('sucesso.handlebars')
    })
    //servidor online
    app.listen(8081 , function(req, res){
        console.log("SERVIDOR ONLINE NA URL http://localhost:8081/")
    })