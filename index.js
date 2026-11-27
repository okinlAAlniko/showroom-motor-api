require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const motorRoutes = require('./routes/motorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Selamat datang di API Sistem Manajemen Showroom Motor Bekas!'
    });
});

app.use('/api/motors', motorRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
