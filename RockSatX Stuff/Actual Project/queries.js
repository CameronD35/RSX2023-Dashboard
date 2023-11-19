const Pool = require('pg').Pool
const pool = new Pool({
  user: 'cam',
  host: 'localhost',
  database: 'data',
  password: '3416$b$p13M$',
  port: 3000,
})

const getUsers = (req, res) => {
    pool.query('SELECT * FROM stuff ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
      console.log(results.rows);
    })
}

module.exports = {
    getUsers
}