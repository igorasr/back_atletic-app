const express = require('express');
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require('cors');
const CategoriaRoutes = require('./routes/CategoriaRoutes');
const EventoRoutes = require('./routes/EventoRoutes');
const PostRoutes = require('./routes/PostRoutes');
const ComentarioRoutes = require('./routes/ComentarioRoutes');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.iniciaRoutes();
  }

  middlewares() {
    this.app.use(express.json());

    this.app.use((req, res, next) => {
      res.header("Access-Controll-Allow-Origin", "*");
      res.header("Access-Controll-Allow-Methods", "Get, POST, PUT, DELETE");
      res.header("Access-Controll-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X-Requested-With")

      this.app.use(morgan('dev'));
      this.app.use(bodyParser.urlencoded({extended: false}));
      this.app.use(cors());
      next();
    })
  }

  iniciaRoutes() {
    this.app.use(ComentarioRoutes);
    this.app.use(CategoriaRoutes);
    this.app.use(EventoRoutes);
    this.app.use(PostRoutes);
  }
}

module.exports = new App().app;