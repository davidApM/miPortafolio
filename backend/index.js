const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {
    const { nombre, email, asunto, mensaje } = req.body;
    console.log("📩 Mensaje recibido:");
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Asunto:", asunto);
    console.log("Mensaje:", mensaje);

    res.json({ success: true });
});

app.listen(3000, () => {
    console.log("🚀 Servidor backend corriendo en http://localhost:3000");
});
