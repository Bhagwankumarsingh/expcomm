import express from "express";
const port = 3000;
const app = express();
app.listen(port, () => {
    console.log(`server is working on https://localhost:${port}`);
});