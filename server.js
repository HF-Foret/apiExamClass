const express = require('express');
const db = require("./helpers/database");
const estudiantesRouter = require('./routes/estudiantesRoutes');
const cursosRouter = require('./routes/cursosRoutes'); 
const maestrosRouter = require('./routes/maestrosRoutes'); 

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para procesar JSON y URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware routes
app.use('/api/estudiantes', estudiantesRouter);
app.use('/api/cursos', cursosRouter); 
app.use('/api/maestros', maestrosRouter);

db.connect(); // Conecta con la base de datos

app.listen(port, () => console.log("Server listening on port", port));