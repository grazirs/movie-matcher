
import express, { Request, Response } from 'express';
import 'dotenv/config'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import sessionRoutes from "./routes/sessionsRoutes"

const app = express();

console.log(process.env.PORT)
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/v1/sessions', sessionRoutes);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
