//menggunakan if, else, nested if
let nilai = 75;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
  
  if (nilai < 50) {
    console.log("Anda perlu belajar lebih keras!");
  }
}

//menggunakan Switch Case
var hari = 5;

switch (hari) {
  case 1:
    console.log("Hari ini adalah Minggu");
    break;
  case 2:
    console.log("Hari ini adalah Senin");
    break;
  case 3:
    console.log("Hari ini adalah Selasa");
    break;
  case 4:
    console.log("Hari ini adalah Rabu");
    break;
  case 5:
    console.log("Hari ini adalah Kamis");
    break;
  case 6:
    console.log("Hari ini adalah Jumat");
    break;
  case 7:
    console.log("Hari ini adalah Sabtu");
    break;
  default:
    console.log("Nilai yang dimasukkan tidak valid");
}

//menggunakan for statement 
const person = {
    nama: "John",
    usia: 30,
    pekerjaan: "Pengembang",
  };
  
  for (const prop in person) {
    console.log(`${prop}: ${person[prop]}`);
  }

//menggunakan while, do while
let counter = 0;

while (counter < 5) {
  console.log("Ini adalah perulangan while ke-" + counter);
  counter++;
}

let counter2 = 0;
do {
  console.log("Ini adalah perulangan do while ke-" + counter2);
  counter2++;
} while (counter2 < 5);

//menggunakan Function
function cekGenapGanjil(angka) {
    if (angka % 2 === 0) {
      return "Genap";
    } else {
      return "Ganjil";
    }
  }
  
  // Memanggil function cekGenapGanjil
  const hasil1 = cekGenapGanjil(4);
  const hasil2 = cekGenapGanjil(7);
  console.log(hasil1); // Output: "Genap"
  console.log(hasil2); // Output: "Ganjil"