const toggleButton = document.getElementById("toggleJadwal");
const jadwalContainer = document.getElementById("jadwalContainer");

toggleButton.addEventListener("click", function () {
    const isHidden = jadwalContainer.classList.toggle("d-none");
    if (isHidden) {
        toggleButton.innerHTML = '<i class="bi bi-eye me-1"></i>Tampilkan';
    } else {
        toggleButton.innerHTML = '<i class="bi bi-eye-slash me-1"></i>Sembunyikan';
    }
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nama === "" || email === "") {
        alert("Nama dan Email wajib diisi!");
        return;
    }

    alert("Pesan berhasil dikirim!");
});