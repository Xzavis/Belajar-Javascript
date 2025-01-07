export function add(numA, numB){
    if (typeof numA !== 'number' || typeof numB !== 'number'){
        throw new Error('parameter harus bertipe number');
    }
    return numA + numB;
};



// Yeay! Mari kita perbarui kondisi daftar skenario pengujian kita.

// Function add dapat mengoperasikan penjumlahan aritmetika dengan baik.
// Function add membangkitkan error jika nilai argumen dari numA tidak bertipe number.
// Function add membangkitkan error jika nilai argumen dari numB tidak bertipe number.