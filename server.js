const express = require('express');
const routes = require('./routes');
require('dotenv');

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(process.env.MYSQL_DATABASE);

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
});
