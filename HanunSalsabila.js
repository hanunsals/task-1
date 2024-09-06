// kalkulator.js

const readline = require('readline');

// Fungsi operasi aritmatika
function kalkulator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error: Pembagi tidak boleh nol!';
        default:
            return 'Operator tidak valid.';
    }
}

// Membuat antarmuka input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Meminta input pengguna
rl.question('Masukkan angka pertama: ', (angka1) => {
    rl.question('Masukkan angka kedua: ', (angka2) => {
        rl.question('Masukkan operator (+, -, *, /): ', (operator) => {
            const num1 = parseFloat(angka1);
            const num2 = parseFloat(angka2);
            const hasil = kalkulator(num1, num2, operator);
            console.log(`Hasil: ${hasil}`);
            rl.close();
        });
    });
});
