import express from 'express';
import userRouter from './router/userRouter.js'; 

const app = express();

app.use('/user', userRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});