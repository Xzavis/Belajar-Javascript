import { describe, test } from 'node:test';
import assert  from 'node:assert';
import { add } from './calcullator.mjs';


describe('testing Calculator', () => {
    // test 1
    test('expetasi berhasil', () => {
        // Arrange
        const operandA = 1;
        const  operandB = 1;
    
        // action
        const actualValue = add(operandA, operandB);
    
        // Assert
        const expetantValue = 2;
        assert.equal(actualValue, expetantValue);
    });
    
    
    // test ke 2
    
    test('harus melempar kesalahan jika string dilewatkan pada parameter numA',() => {
        const potensiErrorA = () => {
            const operandA = '2';
            const operandB = 2;
    
            add(operandA, operandB);
        }
    
        // Asser Throw Error
        assert.throws(potensiErrorA, Error)
    });
    
    // Test 3
    test('harus melempar kesalahan jika string dilewatkan pada parameter numB',() => {
        const potensiErrorB = () => {
            const operandA = 2;
            const operandB = '2';
    
            add(operandA, operandB);
        }
        assert.throws(potensiErrorB, Error);
    });
});


// Kita menambahkan function describe untuk membungkus
// seluruh test case (kasus pengujian). 
// Ini berguna untuk mengategorikan banyak kasus
// pengujian sehingga kode makin rapi dan lebih 
// mudah dipelihara. Jika testing dijalankan, 
// kita akan melihat pengategorian testing.





