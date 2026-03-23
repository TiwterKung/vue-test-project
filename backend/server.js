const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const config = {
  user: 'sa',
  password: 'SQL1qaz@WSX',
  server: 'localhost',
  database: 'Testdb',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};


app.get('/products', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT * FROM Products');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.post('/products', async (req, res) => {
  const { name, price } = req.body;

  try {
    await sql.connect(config);

    const request = new sql.Request();
    request.input('name', sql.VarChar, name);
    request.input('price', sql.Int, price);

    await request.query(`
      INSERT INTO Products (name, price)
      VALUES (@name, @price)
    `);

    res.send('เพิ่มสำเร็จ');
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => console.log('API running on port 3000'));