import express, { request, response } from 'express';

const app = express();

app.get("/users", (request, response) => {
    return response.send("Hello Word")
});

app.listen(3333, () => console.log('Server is runnig!'))