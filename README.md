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

<img width="405" height="3772" alt="Screenshot 2026-10-09 at 14-37-19 Muh Aqsa Sirojudin Dashboard Profil" src="https://github.com/user-attachments/assets/91dc6b7f-ed89-4e1a-af54-d52763a4ac99" />
<img width="1920" height="2443" alt="Screenshot 2026-10-09 at 14-35-57 Muh Aqsa Sirojudin Dashboard Profil" src="https://github.com/user-attachments/assets/36a3e0e5-63e5-411c-a6d9-1866cd6f3b18" />
