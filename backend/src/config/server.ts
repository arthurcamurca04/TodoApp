const PORT = process.env.PORT || 9000;
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from '../routes';

const api = express();
api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());
api.use(cors());

api.use(routes);
api.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
}) 
