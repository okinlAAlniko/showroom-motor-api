const mongoose = require('mongoose');

const motorSchema = new mongoose.Schema({
    merk: {
        type: String,
        required: [true, 'Merk motor wajib diisi'],
        trim: true
    },
    tipe: {
        type: String,
        required: [true, 'Tipe/model motor wajib diisi'],
        trim: true
    },
    kategori: {
        type: String,
        enum: ['Matic', 'Sport', 'Bebek', 'Trail'],
        required: [true, 'Kategori motor wajib diisi']
    },
    tahun: {
        type: Number,
        required: [true, 'Tahun pembuatan wajib diisi']
    },
    kilometer: {
        type: Number,
        required: [true, 'Jarak tempuh (KM) wajib diisi']
    },
    harga: {
        type: Number,
        required: [true, 'Harga jual wajib diisi']
    },
    status: {
        type: String,
        enum: ['Tersedia', 'Terjual'],
        default: 'Tersedia'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Motor', motorSchema);
