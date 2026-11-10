const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Дозволяємо серверу працювати зі статичними файлами
app.use(express.static(__dirname));

// Головна сторінка
app.get('/', (req, res) => {
    res.send(`
        <h1>Лабораторна робота №14</h1>
        <h2>Адаптивні вебсторінки Bootstrap</h2>
        <ul>
            <li><a href="/task1">Завдання 1</a></li>
            <li><a href="/task2">Завдання 2</a></li>
        </ul>
    `);
});

// Маршрут першого завдання
app.get('/task1', (req, res) => {
    res.sendFile(path.join(__dirname, 'task1.html'));
});

// Маршрут другого завдання
app.get('/task2', (req, res) => {
    res.sendFile(path.join(__dirname, 'task2.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущено: http://localhost:${PORT}`);
});
