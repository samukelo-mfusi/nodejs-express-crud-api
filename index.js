import bodyParser from 'body-parser';
import express from 'express';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //middleware

app.use('/users', usersRoutes);


//route
app.get('/', (req, res) => res.send('Hello from Homepage!'));




//listen to incoming requests
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));