# Profile Web Dashboard

Kerangka website profil pribadi Muh Aqsa Sirojudin menggunakan HTML, CSS, JavaScript, dan Bootstrap 5.

## Struktur halaman

- **Dashboard utama:** ringkasan profil, statistik aktivitas, dan navigasi responsif.
- **Halaman data:** tabel jadwal kuliah yang dimuat secara AJAX dari API NestJS `GET http://localhost:3000/api/jadwal`, dengan tombol untuk menampilkan atau menyembunyikan data.
- **API:** proyek `profile-api` menyediakan endpoint GET/POST jadwal, pencarian berdasarkan hari, DTO, dan validasi request.
- **Halaman form:** form kontak frontend dengan validasi nama, email, dan pesan.
- **Komponen React:** kartu profil `Kartu` menerima props dan menampilkan daftar hobi dengan `.map()` serta `key`.
- **Navigasi:** navbar Bootstrap yang berubah menjadi menu toggle pada layar kecil.

## Alasan memilih Bootstrap

Bootstrap dipilih karena proyek ini membutuhkan kerangka antarmuka yang cepat dikembangkan, responsif, dan konsisten. Komponen grid (`container`, `row`, dan `col`), navbar, tabel, tombol, serta form sudah tersedia sehingga fokus pengembangan dapat diarahkan ke isi profil dan fitur yang akan ditambahkan. Bootstrap juga memudahkan pengujian pada layar mobile dan desktop tanpa membangun sistem responsif dari nol.

## Menjalankan

Jalankan API dengan `cd profile-api` lalu `npm run start:dev`. Setelah itu buka frontend melalui server lokal (misalnya Live Server), bukan langsung dengan `file://`. Koneksi internet diperlukan agar Bootstrap, Bootstrap Icons, dan React dapat dimuat dari CDN.

<img width="1537" height="2626" alt="image" src="https://github.com/user-attachments/assets/0cec50d5-ee93-4abe-896d-2af58501e3df" />
<img width="2172" height="783" alt="profle-flex" src="https://github.com/user-attachments/assets/990d950a-38b8-4f71-9c59-a8a792252eaa" />
