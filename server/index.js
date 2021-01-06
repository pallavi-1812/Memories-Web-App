import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/posts', postRoutes); //middleware

const connection_url = "mongodb://localhost:27017/memoriesPosts";
const PORT = process.env.PORT || 5000;

mongoose.connect(connection_url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
