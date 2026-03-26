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

// const pool = new sql.ConnectionPool(config)
// const poolConnect = pool.connect()


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
  const { name, price, quantity } = req.body   // 🔥 เพิ่มตรงนี้

  try {
    await sql.connect(config)
    // await poolConnect
    // const request = pool.request()

    const request = new sql.Request()
    request.input('name', sql.VarChar, name)
    request.input('price', sql.Int, price)
    request.input('quantity', sql.Int, quantity)  // 🔥 เพิ่ม

    await request.query(`
      INSERT INTO Products (name, price, quantity)
      VALUES (@name, @price, @quantity)
    `)

    res.send('เพิ่มสำเร็จ')
  } catch (err) {
    console.log(err)
    res.status(500).send(err.message)
  }
})

app.put('/products/:id', async (req, res) => {
  const { name, price, quantity } = req.body
  const { id } = req.params

  try {
    await sql.connect(config)
    // await poolConnect
    // const request = pool.request()

    const request = new sql.Request()
    request.input('id', sql.Int, id)
    request.input('name', sql.VarChar, name)
    request.input('price', sql.Int, Number(price))
    request.input('quantity', sql.Int, Number(quantity))

    await request.query(`
      UPDATE Products
      SET name = @name, price = @price, quantity = @quantity
      WHERE id = @id
    `)

    res.send('อัปเดตสำเร็จ')
  } catch (err) {
    console.log(err)
    res.status(500).send(err.message)
  }
})

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params

  try {
    await sql.connect(config)
    // await poolConnect
    // const request = pool.request()
    const request = new sql.Request()

    request.input('id', sql.Int, id)

    await request.query(`
      DELETE FROM Products WHERE id = @id
    `)

    res.send('ลบสำเร็จ')
  } catch (err) {
    res.status(500).send(err.message)
  }
})

app.listen(3000, () => console.log('API running on port 3000'));