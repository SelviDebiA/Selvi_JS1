// Contoh 1: if, else, dan nested if
let usia = 21;

if (usia < 18) {
    console.log("Anda masih di bawah umur.");
} else {
    if (usia >= 18 && usia < 60) {
        console.log("Anda dewasa.");
    } else {
        console.log("Anda senior.");
    }
}

// Contoh 2: switch case
let hari = "Selasa";
let aktifitas;

switch (hari) {
    case "Senin":
        aktifitas = "09.00 Zoom Infinite Learning, 18.50 Nonton Bioskop.";
        break;
    case "Selasa":
        aktifitas = "09.00 Zoom Infinite Learning, Melanjutkan Tugas Web.";
        break;
    case "Rabu":
        aktifitas = "09.00 Zoom Infinite Learning 10.00 Dies Natalis Kampus.";
        break;
    case "Kamis":
        aktifitas = "09.00 Zoom Infinite Learning (Pitstop 3).";
        break;
    case "Jumat":
        aktifitas = "09.00 Zoom Infinite Learning, 16.00 Mengerjakan Tugas Kampus.";
        break;
    case "Sabtu":
    case "Minggu":
        aktifitas = "Hari libur!";
        break;
    default:
        aktifitas = "Hari tidak valid.";
}

console.log("Hari ini: " + hari);
console.log("Aktifitas: " + aktifitas);

// Contoh 3: for statement
console.log("Iterasi menggunakan for:");
for (let i = 1; i <= 3; i++) {
    console.log("Iterasi ke-" + i);
}

// Contoh 4: while
console.log("Iterasi menggunakan while:");
let angka = 1;
while (angka <= 8) {
    console.log("Angka: " + angka);
    angka++;
}

// Contoh 5: do while
console.log("Iterasi menggunakan do while:");
let counter = 2;
do {
    console.log("Counter: " + counter);
    counter++;
} while (counter <= 5);

// Contoh 6: function
function perkalian(a, b) {
    return a * b;
}

let hasilPerkalian = perkalian(2, 15);
console.log("Hasil perkalian: " + hasilPerkalian);
