
const app = require('./app');


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Server up" });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});