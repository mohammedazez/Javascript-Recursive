// 1. Buatlah rekursive function untuk menghitung angka faktorial
// Contoh perhitungan angka faktorial:
// 4! = 4 * 3!
// 4! = 4 * 3 * 2!
// 4! = 4 * 3 * 2 * 1
// 4! = 24

function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}
console.log(faktorial(4));

// 2. Buatlah rekursive function yang dapat menampilkan deret angka genap sampai N Input.
// Contoh : Jika diberi argumen angka 5, maka hasilnya adalah 0 2 4

function deretAngkaGenap(nilai) {
  if (nilai == 1) {
    console.log(0);
  } else if (nilai % 2 == 0) {
    deretAngkaGenap(nilai - 2);
    console.log(nilai);
  } else {
    deretAngkaGenap(nilai - 2);
    console.log(nilai - 1);
  }
}

deretAngkaGenap(5);

// 3. Buatlah rekursive function yang dapat menghasilkan angka seperti Ini
// function(1) = 3
// function(2) = 6
// function(3) = 12
// function(4) = 24
// function(5) = 48
// function(n) = ....
