import express  from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import post_routes from './routes/posts.js' //we should add .js when we importing in nodejs not react


const app = express();
// adding my routes
app.use('/posts', post_routes);

app.use(bodyParser.json({limit : "30mb", extended : true}))
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}))
app.use(cors());
const PORT = process.env.PORT || 5555;
const CONNECTION_URL = "mongodb+srv://fetihul:AN8BqTMIYsH0V9oa@cluster0.80jdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.log(err.message));

//   mongoose.set('useFindAndModify', false);