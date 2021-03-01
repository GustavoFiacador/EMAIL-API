import express, { request, response } from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({message:"Metodo Get"})
});

app.post("/",(request, response) => {
    return response.json({message:"Metodo Post"})
});

app.listen(3333, () => console.log('Server is runnig!'))