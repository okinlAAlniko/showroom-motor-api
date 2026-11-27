# Sistem Manajemen Showroom Motor Bekas API

Aplikasi Backend REST API sederhana untuk mengelola inventaris unit sepeda motor bekas pada showroom otomotif.

## Teknologi & Dependencies
- **Node.js** & **ExpressJS** (Framework Backend)
- **MongoDB** & **Mongoose** (Database & ODM)
- **Dotenv** (Manajemen Environment Variable)
- **Postman** (Pengujian Endpoint API)

## Cara Instalasi & Menjalankan Server
1. Clone repository ini:
   ```bash
   git clone <url-repository-github-anda>
   cd showroom-motor-api
   ```
2. Instal seluruh dependencies:
   ```bash
   npm install
   ```
3. Pastikan file `.env` sudah dikonfigurasi pada root folder:
   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/showroom_motor_db
   ```
4. Jalankan server:
   ```bash
   npm start
   ```

## Daftar Endpoint API

| HTTP Method | Endpoint | Fungsi |
| :--- | :--- | :--- |
| `POST` | `/api/motors` | Menambahkan data stok motor bekas baru |
| `GET` | `/api/motors` | Menampilkan semua data motor (mendukung query `?kategori=`, `?status=`, `?search=`, `?sort=`) |
| `GET` | `/api/motors/:id` | Menampilkan detail satu unit motor berdasarkan ID |
| `PUT` | `/api/motors/:id` | Memperbarui data harga, spesifikasi, atau status penjualan motor |
| `DELETE` | `/api/motors/:id` | Menghapus data unit motor dari database |
