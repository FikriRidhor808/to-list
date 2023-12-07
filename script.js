// Mengambil elemen input box dari dokumen HTML menggunakan id "input-box"
const inputBox = document.getElementById("input-box");
// Mengambil elemen container untuk daftar tugas dari dokumen HTML menggunakan id "list-container"
const listContainer = document.getElementById("list-container");

// Fungsi untuk menambahkan tugas ke dalam daftar
function addTask() {
    // Memeriksa apakah input box kosong
    if (inputBox.value === "") {
        // Menampilkan peringatan jika input box kosong
        alert("Tidak boleh kosong guys");
    } else {
        // Membuat elemen <li> untuk menampung tugas baru
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // Menetapkan teks tugas ke dalam elemen <li>
        listContainer.appendChild(li); // Menambahkan elemen <li> ke dalam container daftar

        // Membuat elemen <span> untuk tombol hapus (x)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Menetapkan teks "x" ke dalam elemen <span>
        li.appendChild(span); // Menambahkan elemen <span> ke dalam elemen <li>

        // Mengosongkan input box setelah menambahkan tugas
        inputBox.value = "";
// Menyimpan data daftar tugas ke dalam localStorage
        saveData();
// Menambahkan event listener untuk menandai atau menghapus tugas saat di-klik
        li.addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
                // Toggle kelas "checked" untuk memberi efek visual tugas yang selesai
                e.target.classList.toggle("checked");
                e.target.classList.toggle("text-decoration-line-through");
                // Menyimpan kembali data setelah mengubah status tugas
                saveData();
            }
        });
// Menambahkan event listener untuk menghapus tugas saat tombol (x) di-klik
        span.addEventListener("click", function (e) {
            if (!e.target.parentElement.classList.contains("checked")) {
                // Memeriksa apakah tugas belum selesai sebelum menghapus
                if (confirm("Yakin ingin menghapus?")) {
                    e.target.parentElement.remove(); // Menghapus elemen <li> dari daftar
                    // Menyimpan kembali data setelah menghapus tugas
                    saveData();
                    }
            }
        });
        }
        }

            // function clearData() {
            //     if (confirm("Yakin ingin menghapus semua data?")) {
            //         localStorage.removeItem("data");
            //         listContainer.innerHTML = "";
            //     }
            // }

// Fungsi untuk menyimpan data daftar tugas ke dalam localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Fungsi untuk menampilkan tugas dari localStorage saat halaman dimuat
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
// Memanggil fungsi showTask() untuk menampilkan tugas saat halaman dimuat
showTask();