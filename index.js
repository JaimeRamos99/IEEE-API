const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(router);
const port = 3000;
let baseDeDatos = [];
//creando un API que simule el comportamiento de un crud a una base de datos
app.listen(port, () => {
  console.log("API escuchando en el puerto " + port);
});

router.get("/getAll/", function (req, res) {
  res.status(200).send(baseDeDatos);
});

router.get("/get/:id", function (req, res) {
  let id = req.params.id;
  let filtro = baseDeDatos.filter(function (item) {
    return item.id == id;
  });
  res.status(200).send(filtro);
});

router.patch("/nuevoNombre/:id/:nuevoNombre", function (req, res) {
  let id = req.params.id;
  let nuevoNombre = req.params.nuevoNombre;
  let filtro = baseDeDatos.filter(function (item) {
    if (item.id == id) {
      item.nombre = nuevoNombre;
    }
  });
  res.status(200).send("Nombre actualizado correctamente.");
});

router.put("/nuevoNombre/:id", function (req, res) {
  let idToChange = req.params.id;
  let newInfo = req.body;
  baseDeDatos.forEach((element, i) => {
    if (element.id == idToChange) {
      baseDeDatos[i] = newInfo;
    }
  });
  res.status(200).send("Registro actualizado correctamente.");
});

router.post("/usandopost", function (req, res) {
  baseDeDatos.push(req.body);
  res.status(201).send("creado exitosamente");
});