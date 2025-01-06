// Pengujian Program
// Sebagai seorang pengembang aplikasi JavaScript, 
// mungkin kita sudah familier dengan praktik pengujian. 
// Bahkan, bisa saja kita melakukannya secara tak sadar.
// Ini menjadi tanggung jawab besar bagi developer 
// agar sistem berjalan tanpa kurang suatu apa pun 
// di tangan end-user. Tentu, 
// hal ini tertanam dalam diri Anda, bukan?

// Secara istilah, pengujian adalah proses memastikan 
// keberhasilan suatu sistem untuk mencegah kegagalan 
// saat beroperasi. Ada dua metode yang bisa kita lakukan. 
// Jika tidak secara manual, kita akan lakukan pengujian 
// aplikasi secara otomatis. Ya, bisa otomatis, 
// Anda tidak salah dengar.

// Pengujian manual tentu banyak pihak mampu melakukannya. 
// Cukup jalankan program dan perhatikan output yang dikeluarkan. 
// Perbaikan akan dilakukan jika terjadi error. Namun, 
// cara ini sangatlah rentan dilakukan sebab adanya 
// keluputan manusia dan hal yang paling terasa adalah 
// tingkat efisiensi sangat rendah. Tenaga manusia yang 
// akan lebih banyak dibutuhkan di sini selain komputer. 
// Jika memanfaatkan metode otomatis, kita bisa 
// mendelegasikan tugas kepada mesin dan biarlah ia yang 
// bekerja. Tidak mengenal waktu, letih, 
// dan keluputan adalah karakteristik dari mesin.


// Manual Lebih Mudah? Fix The Error
// Sebelum belajar membuat kode testing otomatis, 
// mari kita belajar memperbaiki kesalahan program yang
// mengandung beberapa bug dituntun oleh pengujian manual.
// Sebelum melanjutkan pembahasan, 
// pastikan Anda sudah paham makna dari bug, ya!

// Nah, kali ini, mari kita ambil contoh kasus program 
// kalkulator total harga belanjaan yang perlu dibayar. 
// Programnya sederhana, kok.

function calculateTotalPrice(shoppingCart){
    const total = 0;

    return shoppingCart.reduce((accumulator, cartItem) => {
    // kita akan membuat filter untuk mengecek apakah cartItem.price adalah number
    if (typeof cartItem.price === 'number') {
        return accumulator + cartItem.price;
    } else {
        console.error(`tipe data cartItem harus bertipe number`, cartItem);
        return accumulator;
    }

    }, total);
}

const shoppingCart = [
    { name: 'Buku', price: 50000 },
    { name: 'Pensil', price: 12000 },
    { name: 'Tempat Pensil', price: 18000 },
    { name: 'Penghapus', price: '30000' },

]

console.log(`Total belanjaan adalah Rp.${calculateTotalPrice(shoppingCart)}`);