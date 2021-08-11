import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import vaccRoutes from './routes/vaccinations.js';

const app = express();

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

// Connect to MongoDB Atlas
const CONNECTION_URL = 'mongodb+srv://patalapanen:lapatapanen@cluster0.yw7iw.mongodb.net/Vaccinates?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
