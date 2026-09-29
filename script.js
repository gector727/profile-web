const toggleButton = document.getElementById("toggleJadwal");
const jadwalContainer = document.getElementById("jadwalContainer");

toggleButton.addEventListener("click", function () {
    if (jadwalContainer.style.display === "none") {
        $(jadwalContainer).stop(true, true).slideDown(300);
        toggleButton.textContent = "Sembunyikan Jadwal";
    } else {
        $(jadwalContainer).stop(true, true).slideUp(300);
        toggleButton.textContent = "Tampilkan Jadwal";
    }
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nama === "" || email === "") {
        event.preventDefault();
        alert("Nama dan Email wajib diisi!");
        return;
    }

    alert("Pesan berhasil dikirim!");
});