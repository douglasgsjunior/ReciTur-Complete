const express = require('express');
const app = express();
const port = 3000; // Defina a porta que deseja usar para o servidor

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // Ou o host do seu banco de dados MySQL
  user: 'root', // Seu usuário do banco de dados MySQL
  password: '#T3cnol0g1@', // Sua senha do banco de dados MySQL
  database: 'recitur_db', // Nome do banco de dados MySQL
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL');
});
