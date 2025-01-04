// TypeScript, Superset dari JavaScript
// Materi terakhir dalam type system untuk JavaScript adalah TypeScript.
//  Apakah Anda bisa menebak apa TypeScript itu? Dia adalah bahasa 
// pemrograman di atas JavaScript! Mari bereksplorasi.

// JavaScript pada awalnya dibangun demi fleksibilitas dan tingkat 
// kemudahan yang tinggi. Oleh karena itu, JavaScript sangat cocok 
// untuk dipelajari sebagai langkah awal para developer. Namun, 
// ini menjadi tidak ideal jika kita membangun aplikasi berskala besar 
// dengan ribuan hingga jutaan baris kode. Ini yang sudah kita pahami 
// sedari awal karena tidak ada type checker dalam interpreter 
// JavaScript. Bahkan, JavaScript dikategorikan sebagai 
// weakly-typed language karena saking fleksibelnya.

// Microsoft membangun sebuah bahasa bernama TypeScript untuk 
// memadukan fleksibilitas JavaScript dengan bahasa yang stricter 
// (lebih ketat/kaku). TypeScript memiliki sistem yang dapat 
// menambahkan fitur type pada kode JavaScript dan nantinya akan 
// dianalisis oleh compiler milik TypeScript. 
// Yup, ini mirip dengan Flow.

// Jangan khawatir atas kompatibilitas TypeScript terhadap JavaScript.
// Seluruh fitur JavaScript tentunya ada dalam TypeScript, 
// yakni arrow function, class, dan fitur-fitur terkini lainnya. 
// Salah satu hal yang kami sukai dari TypeScript adalah ia menjadi 
// bahasa paling digemari di dunia berdasarkan Survey Stackoverflow 
// 2023 dan dipakai industri besar, seperti Google dan Amazon.


// Coding dengan TypeScript
// Penulisan kode TypeScript membutuhkan .ts sebagai ekstensi berkasnya. 
// Lalu, sintaks kodenya pun tidak berbeda dengan Flow. Berikut contohnya.

const myName: string = 'TypeScript';

function greet(name : string) {
    console.log(`Hello, ${name} My name is ${myName}`);
};

greet('JavaScript');



function numbers(numA : number, numB : number ){
    return numA + numB;
};

const result = numbers('10', 5);
console.log(result);
