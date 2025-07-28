const express = require('express');
const app = express();
const cors = require('cors');
const Database = require('better-sqlite3');
const db = new Database('mensajes.db');

app.use(cors());
app.use(express.json());

//Metodo post para traer datos del fronend 
app.post('/contact', (req, res) => {
    const { nombre, email, asunto, mensaje } = req.body;
    try {
        const stmt = db.prepare('INSERT INTO mensajes (nombre, email, asunto, mensaje) VALUES (?, ?, ?, ?)');
        stmt.run(nombre, email, asunto, mensaje);

        console.log("📩 Mensaje guardado en la base de datos:");
        console.log({ nombre, email, asunto, mensaje });

        res.json({ success: true });
    } catch (error) {
        console.error("Error guardando mensaje:", error);
        res.status(500).json({ success: false, error: "Error interno del servidor" });
    }
});

app.listen(3000, () => {
    console.log("🚀 Servidor backend corriendo en http://localhost:3000");
});

//Nueva función para integrar la base de datos. 

// Crear tabla si no existe
db.prepare(`CREATE TABLE IF NOT EXISTS mensajes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    email TEXT,
    asunto TEXT,
    mensaje TEXT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`).run();
