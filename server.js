const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to our Express App!");
});

app.get("/about", (req, res) => {
    res.send("This is the About page.");
});

app.get("/contact", (req, res) => {
    res.send("Contact us at: express@example.com");
});

app.get("/users/:name", (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}! Welcome to our site.`);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
