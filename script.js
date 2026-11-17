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
    const pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || email === "" || pesan === "" || !form.checkValidity()) {
        form.classList.add("was-validated");
        alert("Nama, email, dan pesan wajib diisi dengan format yang benar.");
        return;
    }

    alert("Pesan berhasil dikirim!");
    form.reset();
    form.classList.remove("was-validated");
});

function Kartu({ nama, deskripsi, keahlian, hobi }) {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement("h3", { className: "h4" }, `Tentang ${nama}`),
        React.createElement("p", { className: "text-secondary mb-4" }, deskripsi),
        React.createElement("h3", { className: "h6 text-uppercase text-secondary" }, "Keahlian yang dipelajari"),
        React.createElement(
            "div",
            { className: "d-flex flex-wrap gap-2 mb-4" },
            keahlian.map((item) => React.createElement("span", { className: "skill-chip", key: item }, item))
        ),
        React.createElement("h3", { className: "h6 text-uppercase text-secondary" }, "Hobi"),
        React.createElement(
            "ul",
            { className: "mb-0" },
            hobi.map((item) => React.createElement("li", { key: item }, item))
        )
    );
}

const profileRoot = ReactDOM.createRoot(document.getElementById("profileApp"));
profileRoot.render(React.createElement(Kartu, {
    nama: "Muh Aqsa Sirojudin",
    deskripsi: "Halo! Nama saya Muh Aqsa Sirojudin. Saya sedang belajar membangun website yang semantik, rapi, responsif, dan mudah digunakan. Saya senang mempelajari hal-hal baru serta mengembangkan kemampuan di bidang teknologi.",
    keahlian: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    hobi: ["Membaca", "Mempelajari teknologi", "Mendengarkan musik"]
}));

const jadwalStatus = document.getElementById("jadwalStatus");
const jadwalBody = document.getElementById("jadwalBody");
const API_URL = "http://localhost:3000/api/jadwal";

function tampilkanJadwal(jadwal) {
    jadwalBody.innerHTML = jadwal.map((item) => `
        <tr>
            <td>${item.hari}</td>
            <td>${item.jam}</td>
            <td>${item.mataKuliah}</td>
            <td>${item.ruangan}</td>
            <td>${item.dosen}</td>
        </tr>
    `).join("");
    jadwalStatus.textContent = "Jadwal berhasil dimuat.";
}

fetch(API_URL)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Gagal memuat jadwal (${response.status}).`);
        }
        return response.json();
    })
    .then((jadwal) => {
        if (!Array.isArray(jadwal)) {
            throw new Error("Format data jadwal tidak valid.");
        }
        tampilkanJadwal(jadwal);
    })
    .catch((error) => {
        jadwalStatus.textContent = `Jadwal gagal dimuat: ${error.message}`;
        jadwalStatus.classList.add("text-danger");
    });