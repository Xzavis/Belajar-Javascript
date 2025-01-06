// Type System dalam JavaScript
// Pada awal materi, kita mempelajari dua kubu bahasa pemrograman, 
// yaitu bahasa yang menggunakan compiler dan interpreter. 
// Namun, itu diidentifikasi dari cara atau waktu 
// sebuah program dapat dieksekusi oleh mesin.

// Ada indikator lain yang juga dapat membedakan beragam bahasa, 
// yaitu type system. Ini terbagi menjadi dua, 
// yaitu static dan dynamic. Dalam hal ini, JavaScript 
// termasuk tipe dynamic.

// Apa artinya itu? Ayo, kita bahas.


// Statically-Typed vs. Dynamically-Typed Language
// Setiap bahasa pemrograman memiliki sistem pemeriksaan tipe data. 
// Ada yang sistemnya bertipe static dan dynamic. 
// Hal yang membedakan adalah waktu pemeriksaannya.

// Static: tipe nilai diperiksa saat compile.
// Dynamic: tipe nilai diperiksa ketika eksekusi (runtime).
// Dua perbedaan di atas mirip dengan perbedaan antara 
// compiler dan interpreter, bukan? Namun, jangan 
// sampai tertukar, ya, karena mereka berbeda secara konseptual.

// Ciri utama lainnya yang menjadi pembeda adalah adanya 
// penentuan tipe nilai saat deklarasi sebuah unit. Contohnya variabel. 
// Bagi Anda yang familier dengan Java, C++, atau Golang, mereka adalah 
// bahasa berkategori statically-typed. Bahasa-bahasa ini akan memberi 
// batasan terhadap nilai yang dapat diemban oleh variabel karena 
// pemeriksaan tipe nilai biasanya terjadi pada waktu compile.

// Berikut adalah contoh-contoh penentuan tipe pada berbagai bahasa.


// C++
// 
// #include <iostream>
// using namespace std;
 
// int main() {
//   int myNum = 15;
//   cout << myNum;
//   return 0;
// }

// Lihat! Setiap variabel myNum dibuat dan diisyaratkan untuk menyimpan 
// nilai integer (number untuk JavaScript). Compiler akan 
// mengembalikan tipe error jika kita memberi nilai selain integer.

// Penentuan tipe nilai di atas tidak kita temui pada JavaScript. 
// Bahasa berkategori dynamically-typed akan mengetahui tipe datanya 
// saat program berjalan. Masih ingat dengan let dan const, bukan? 
// Apa pun teknik pembuatannya, kita bisa memberi nilai apa pun 
// pada sebuah variabel tanpa perlu menetapkan tipe data secara 
// eksplisit. Jika menggunakan let, nilai variabel memungkinkan 
// untuk diganti saat runtime.

// Perhatikan contoh kasus berikut.

let myNum = 0 ;

myNum = 1;
console.log(myNum); // 1

myNum = true;
console.log(myNum); // true

// Semua berjalan lancar ketika program di atas dijalankan meskipun 
// ada perubahan tipe nilai yang di-assign. Poinnya adalah 
// JavaScript sangat fleksibel terhadap perubahan tipe data.

// Lalu, apa maksud dari masalah ini?

// The Problem
// Kita mungkin punya pendapat bahwa bahasa yang mengadopsi 
// dynamic type sangat menguntungkan dari segi produktivitas. 
// Tidak bertele-tele saat menulis kode, proses debugging 
// lebih mudah, dan kompilasi menjadi lebih cepat menjadi 
// faktor-faktor kebahagiaan tersendiri dari seorang developer.

// Namun, faktanya adalah bahasa bertipe static cenderung 
// lebih safe daripada dynamic. Apa penyebabnya? Mari 
// kita lihat contoh kasus berikut.

// main.js

function mathSimple(numA, numB) {
  return numA + numB;
};

console.log(mathSimple(1, 2)) // 3
console.log(mathSimple(5, 2)) // 52
console.log(mathSimple('100', 2)) // ???

// Fungsi mathSimple di atas adalah contoh sederhana dari
// penjumlahan dua bilangan. Namun, ada kesalahan yang
// mungkin terjadi ketika kita memberikan nilai string
// pada parameter numA.
// Apa yang akan terjadi ketika kita jalankan kode di atas?
// Jawabannya adalah JavaScript akan menjalankan kode

// Ini tidak akan menjadi masalah (biasanya type error) 
// karena JavaScript memiliki fitur type coercion. 
// Jika kita tidak berhati-hati dengan masalah ini, 
// program akan berakhir dengan hasil yang aneh, 
// yaitu “54” (string). Selain dynamic, JavaScript 
// juga tergolong weakly-typed language.

// Permasalahan di atas datang dari sisi interpreter 
// milik JavaScript. Jika berbicara mengenai IDE 
// (integrated development environment), 
// permasalahan ini pun tidak dapat diatasi 
// begitu saja. IDE tidak memiliki kemampuan 
// pengecekan dan pemberian peringatan jika 
// terdapat kekeliruan penggunaan tipe data. 
// Padahal, tujuan utamanya adalah memberikan 
// pengalaman pengembangan aplikasi yang lebih baik, bukan?

const arry = ['one', 'two', 'three'];
const str = 'hello';

const test1 = arry.includes('on');
console.log(test1);

const test2 = arry.includes('onetwo');
console.log(test2);

const test3  = str.includes('11');
console.log(test3);


console.log(+true); 
console.log(!'xyz'); 


