// Concurrency dengan Promise
// Kita sering berhadapan dengan banyak proses asynchronous sekaligus dalam kehidupan nyata.
// Apakah Anda sadar? Contohnya kita memiliki tiga buah tugas yang perlu diselesaikan.

// Mencuci pakaian kotor dengan mesin cuci.
// Menyapu lantai dengan robot pembersih.
// Membuat kopi.
// Kita tahu bahwa dua tugas pertama didelegasikan ke mesin. Lalu, kita bisa mengerjakan
// tugas ketiga sembari dua pekerjaan tersebut dalam proses penyelesaian. Ini bisa kita
// sebut dengan proses concurrency karena banyak proses asynchronous berjalan secara bersamaan.

// Untuk melakukan hal ini, objek Promise memiliki beberapa static method, seperti Promise.all
// dan Promise.allSettled. Keduanya memiliki kemiripan. Hal yang membedakan
// adalah Promise.all akan memasuki kondisi rejected jika salah satu Promise
// saja terjadi kegagalan. Namun, ini tidak berlaku dengan Promise.allSettled.

// Perhatikan contoh pemanfaatan Promise.all jika salah satu Promise gagal.

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 2000));
// kita akan membuat promise2 yang akan gagal
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Upss! Gagal")), 1000)
);
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// kita akan menggunakan Promise.all
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("Success");
    console.log(values);
  })
  // kita gunakan catch untuk menangkap error
  .catch((error) => {
    console.log("Failed");
    // kita tampilkan pesan errornya
    console.log(error.message);
  });

// Yap, kode masuk ke method catch. Ini tidak akan terjadi dengan Promise.allSettled.
// Semua Promise akan dikembalikan meskipun ada yang gagal.

// mari kita gunakan Promise.allSettled
Promise.allSettled([promise1, promise2, promise3])
  //    kita akan menampilkan hasilnya sukses ketika beberapa promise berhasil
  .then((values) => {
    console.log("Success");
    console.log(values);
  })

  //   kita akan menangkap error jika ada promise yang gagal
  .catch((error) => {
    console.log("Failed");
    console, log(error.message);
  });

// Dengan menggunakan Promise.allSettled, kita bisa mendapatkan hasil dari semua Promise
// Hal yang perlu kita tahu adalah tipe parameter static method, yaitu array berisi sejumlah Promise. 
// Oleh karena itu, static method Promise dapat menjalankan banyak Promise.