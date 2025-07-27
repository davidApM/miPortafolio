const express = require('express');
const app = express();

app.use(express.json());

app.post('/contact', (req, res) => {
    const { nombre, email, asunto, mensaje } = req.body;
    console.log("Mensaje recibido:", nombre, email, asunto, mensaje);
    // Aquí podrías enviar correo o guardar en base de datos

    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
