import mysql from 'mysql2';

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'taskflow',
  port: 3306
};


const connection = mysql.createConnection(config);

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

export {
  connection
}