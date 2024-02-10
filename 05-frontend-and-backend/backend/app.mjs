import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(morgan('tiny'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// enable all CORS requests
app.use(cors())

app.use((req, res) => {
    const personData = {
        name: 'Alon4ik',
        isStudent: true,
    };
    console.log(req.body);
    return res.json(personData);
});

app.listen(5000, () => {
    console.log('Server is listenning at port 5000');
});
