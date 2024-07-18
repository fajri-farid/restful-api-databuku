# Dokumentasi API

## Daftar Isi
- [Deskripsi Proyek](#deskripsi-proyek)
- [Cara Menjalankan Project](#cara-menjalankan-project)
- [Inisialisasi Database](#inisialisasi-database)

## Deskripsi Proyek
Proyek ini menyediakan API untuk mengelola data buku dan informasi penulis (author). Informasi penulis mencakup nama, bio, dan tanggal lahir, sedangkan informasi buku mencakup judul, tahun terbit, sinopsis, dan ID penulis yang terkait.

## Cara Menjalankan Project

diawal jangan lupa untuk ```npm i```, juga masukkan database anda di ```.env``` untuk templatenya ada di ```.env.example```

jalankan dengan ```npm run``` start atau ```npm run start:dev```


## Inisialisasi Database

Jika Anda ingin menginisialisasi database untuk proyek ini, ikuti langkah-langkah berikut
1. **Migrate Database**
   Untuk menjalankan migrasi database pertama kali, jalankan perintah berikut:
   ```bash
   npx sequelize-cli db:migrate
2.  **Seed Data**
   Setelah migrasi selesai, Anda bisa menambahkan data awal ke dalam database dengan menjalankan seeders:
   ```bash
   npx sequelize-cli db:seed --seed 20240717235314-author.js
   npx sequelize-cli db:seed --seed 20240717235251-book.js
```
  Ini akan memasukkan data contoh untuk penulis dan buku ke dalam database.


Pastikan untuk mengatur file .env dengan kredensial database yang sesuai sebelum menjalankan migrasi. Untuk memulai proyek, jalankan perintah `npm run start` atau `npm run start:dev`.


## Menjalankan API Network
Pastikan untuk mengganti `{base_url}` dengan base URL dari aplikasi Anda saat dijalankan, misalnya `http://localhost:8000`

### Endpoint untuk Author
- GET All Authors: Mendapatkan daftar semua penulis.
   ```bash
      GET {base_url}/authors

- GET Author by ID: Mendapatkan informasi seorang penulis berdasarkan ID.
   ```bash
      GET {base_url}/authors/{author_id}
   
- CREATE Author: Membuat data penulis baru.
   ```bash
   POST {base_url}/authors
   
Body:
  ```bash
      {
        "name": "Nama Penulis",
        "bio": "Biografi penulis.",
        "birthdate": "YYYY-MM-DD"
      }
   ```
- UPDATE Author: Memperbarui informasi seorang penulis berdasarkan ID.
   ```bash
      PUT {base_url}/authors/{author_id}
Body:
   ```bash
      {
        "name": "Nama Penulis yang Diperbarui",
        "bio": "Biografi yang diperbarui.",
        "birthdate": "YYYY-MM-DD"
      }
```
- DELETE Author: Menghapus seorang penulis berdasarkan ID.
   ```bash
      DELETE {base_url}/authors/{author_id}

### Endpoint untuk Book
- GET All Books: Mendapatkan daftar semua buku.
   ```bash
      GET {base_url}/books

- GET Book by ID: Mendapatkan informasi sebuah buku berdasarkan ID.
   ```bash
      GET {base_url}/books/{book_id}
   
- CREATE Book: Membuat data buku baru.
   ```bash
   POST {base_url}/books
   
Body:
  ```bash
      {
        "title": "Judul Buku",
        "releaseYear": 2023,
        "synopsis": "Sinopsis buku ini adalah...",
        "authorId": 1
      }

   ```
- UPDATE Book: Memperbarui informasi sebuah buku berdasarkan ID.
   ```bash
      PUT {base_url}/books/{book_id}
Body:
   ```bash
      {
        "title": "Judul Buku yang Diperbarui",
        "releaseYear": 2023,
        "synopsis": "Sinopsis buku yang diperbarui...",
        "authorId": 1
      }
```
- DELETE Book: Menghapus sebuah buku berdasarkan ID.
   ```bash
      DELETE {base_url}/books/{book_id}

Pastikan untuk mengatur header Content-Type: application/json pada setiap permintaan POST dan PUT, serta memastikan bahwa data yang dikirim sesuai dengan format yang dijelaskan di atas.



