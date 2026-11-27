const Motor = require('../models/Motor');

// 1. CREATE: Tambah 1 data motor atau banyak data motor sekaligus (POST /api/motors)
const tambahMotor = async (req, res) => {
    try {
        const motorBaru = await Motor.create(req.body);
        const jumlahDitambahkan = Array.isArray(motorBaru) ? motorBaru.length : 1;

        res.status(201).json({
            status: 'success',
            message: `${jumlahDitambahkan} data motor bekas berhasil ditambahkan`,
            data: motorBaru
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Gagal menambahkan data motor',
            error: error.message
        });
    }
};

// 2. READ ALL: Ambil semua data motor + Query Parameter (?kategori=...&status=...&search=...&sort=...)
const ambilSemuaMotor = async (req, res) => {
    try {
        const { kategori, status, search, sort } = req.query;
        let filter = {};

        if (kategori) {
            filter.kategori = kategori;
        }

        if (status) {
            filter.status = status;
        }

        if (search) {
            filter.$or = [
                { merk: { $regex: search, $options: 'i' } },
                { tipe: { $regex: search, $options: 'i' } }
            ];
        }

        let sortOption = { createdAt: -1 };
        if (sort === 'termurah') sortOption = { harga: 1 };
        if (sort === 'termahal') sortOption = { harga: -1 };

        const daftarMotor = await Motor.find(filter).sort(sortOption);

        res.status(200).json({
            status: 'success',
            jumlah: daftarMotor.length,
            data: daftarMotor
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Terjadi kesalahan pada server',
            error: error.message
        });
    }
};

// 3. READ ONE: Ambil detail 1 motor berdasarkan Path Parameter ID (GET /api/motors/:id)
const ambilMotorById = async (req, res) => {
    try {
        const motor = await Motor.findById(req.params.id);

        if (!motor) {
            return res.status(404).json({
                status: 'error',
                message: 'Data motor tidak ditemukan'
            });
        }

        res.status(200).json({
            status: 'success',
            data: motor
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Format ID motor tidak valid',
            error: error.message
        });
    }
};

// 4. UPDATE: Perbarui data / status motor berdasarkan ID (PUT /api/motors/:id)
const updateMotor = async (req, res) => {
    try {
        const motorDiupdate = await Motor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!motorDiupdate) {
            return res.status(404).json({
                status: 'error',
                message: 'Data motor tidak ditemukan'
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Data motor berhasil diperbarui',
            data: motorDiupdate
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Gagal memperbarui data motor',
            error: error.message
        });
    }
};

// 5. DELETE: Hapus data motor berdasarkan ID (DELETE /api/motors/:id)
const hapusMotor = async (req, res) => {
    try {
        const motorDihapus = await Motor.findByIdAndDelete(req.params.id);

        if (!motorDihapus) {
            return res.status(404).json({
                status: 'error',
                message: 'Data motor tidak ditemukan'
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Data motor berhasil dihapus'
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: 'Gagal menghapus data motor',
            error: error.message
        });
    }
};

module.exports = {
    tambahMotor,
    ambilSemuaMotor,
    ambilMotorById,
    updateMotor,
    hapusMotor
};
