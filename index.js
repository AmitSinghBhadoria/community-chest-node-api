require('dotenv').config();
const express = require('express');
const userRoutes = require("./api/routes/user_routes");
const port = process.env.PORT  || 4500
//Express Imports
const app = express();
app.use(express.json());
app.use('/api/user', userRoutes);
console.log(process.env.PORT);
app.listen(port, () => console.log('server up and running:'+ port ));
