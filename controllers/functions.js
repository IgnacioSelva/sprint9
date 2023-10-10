const knex = require("../knexFile");

const tareaPorId = async (req, res) => {
  const id = Number(req.params.id);
  knex("tarea")
    .select("tarea_id", "titulo", "prioridad_id", "usuario_id", "completado")
    .where("tarea_id", id)
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

const updateTask = async (req, res) => {
  try {
    await knex("tarea").update(req.body).where("tarea_id", req.params.id);
    res.json(req.body);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const getTarea = async (req, res) => {
  
  const resultado = await knex("tarea").select("*")
  res.json(resultado);
};

module.exports = { tareaPorId, updateTask, getTarea };
