const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    // Field 'title': Tipe String, wajib diisi, dan whitespace di awal/akhir dihapus
    title: { type: String, required: true, trim: true },
    // Field 'director': Tipe String, wajib diisi, dan whitespace di awal/akhir dihapus
    director: { type: String, required: true, trim: true },
    // Field 'year': Tipe Number, wajib diisi
    year: { type: Number, required: true }
}, {
    // Opsi timestamps: Secara otomatis menambahkan field 'createdAt' dan 'updatedAt'
    timestamps: true 
});

// Membuat model 'Movie' dari skema yang telah didefinisikan
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;