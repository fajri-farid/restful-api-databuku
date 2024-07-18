# cara menjalankan project

diawal jangan lupa untuk ```npm i```, juga masukkan database anda di ```.env``` untuk templatenya ada di ```.env.example```

jalankan dengan ```npm run``` start atau ```npm run start:dev```


### Inisialisasi Database

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
