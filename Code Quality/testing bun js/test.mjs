import {describe, it , expect} from 'bun.test';
import {add} from './utils.js';

describe('calculator', () => {
    it ('penjumlahan yang benar', () => {
        
        // Arrange
        const operandA = 5;
        const operandB = 10;

        // Action
        const actualValue = add(operandA, operandB);

        // Assert
        const expectValue = 15;
        expect(actualValue).toBe(expectValue);

    })

    it('error ketika numA bukan number', () => {
        const potensiError = () => {
             // Arrange
        const operandA = '5';
        const operandB = 10;

        // Action
        add(operandA, operandB);

        // assert
        expect(potensiError).toThrow(Error);
        }
       
    })

    it('error ketika numB bukan number', () => {
        const potensiError = () => {
            // Arrange
            const operandA = 5;
            const operandB = '10';

            // Action
            add(operandA, operandB);

            // assert
            expect(potensiError).toThrow(Error);
        }
    })
})