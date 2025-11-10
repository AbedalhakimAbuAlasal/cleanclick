const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    const lang = req.headers["accept-language"];
    if (lang && lang.startsWith("ar")) {
        res.render("index"); 
    } else {
        res.render("index-en");
    }
});


app.get("/ar", (req, res) => {
    res.render("index");
});

app.get("/en", (req, res) => {
    res.render("index-en");
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
