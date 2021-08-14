import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import vaccRoutes from './routes/vaccinations.js';

const app = express();
dotenv.config();

app.use(express.json({
	limit: "30mb",
	extended: true
}));
app.use(express.urlencoded({
	limit: "30mb",
	extended: true
}));
app.use(cors());

// Connect db to app using express middleware
app.use('/vaccinations', vaccRoutes);

// Connect to Heroku (access currently unavailable)
app.get('/', (req, res) => {
	res.send('Vaccine exercise API!');
});

// Connect to MongoDB Atlas
const PORT = process.env.PORT || 5000;
const CONNECTION = process.env.CONNECTION_URL || "mongodb+srv://test-user:test-user123@cluster0.yw7iw.mongodb.net/Vaccinates?retryWrites=true&w=majority";

mongoose.connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
