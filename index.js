import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

var pageinfo={accessCurrentPage: null, listItems:null};
var toDoItems=[];
var workItems=[];


app.use(express.static(__dirname+"public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    pageinfo.accessCurrentPage="todo";
    pageinfo.listItems=toDoItems;
    res.render(__dirname+"index.ejs", pageinfo);
});

app.get("/todo", (req, res) => {
    pageinfo.accessCurrentPage="todo";
    pageinfo.listItems=toDoItems;
    res.render(__dirname+"index.ejs", pageinfo);
});

app.post("/todo", (req, res) => {
    pageinfo.accessCurrentPage="todo";
    pageinfo.listItems=toDoItems;
    toDoItems.push(req.body.textEntry);
    res.render(__dirname+"index.ejs", pageinfo);
});

app.get("/work", (req, res) => {
    pageinfo.accessCurrentPage="work";
    pageinfo.listItems=workItems;
    res.render(__dirname+"index.ejs", pageinfo);
});

app.post("/work", (req, res) => {
    pageinfo.accessCurrentPage="work";
    pageinfo.listItems=workItems;
    workItems.push(req.body.textEntry);
    res.render(__dirname+"index.ejs", pageinfo);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
