
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

// connected to mongodb
mongoose.connect("mongodb://localhost:27017/wikiapi",
{useNewUrlParser: true});

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

app.get("/articles", (req, res) => {
    Article.find((err, foundArticles) => {
        console.log(foundArticles);
    });
});

app.listen(5000, () =>  {
    console.log("Dev your Server is on port 5000");
});