const app = require("./config/app");
require('dotenv').config({path: 'variables.env'})

// set port, listen for requests
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

app.listen(port, host, () => {
  console.log(`Server is running on ${host}:${port}`);
});
