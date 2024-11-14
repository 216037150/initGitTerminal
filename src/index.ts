import express from 'express'
import usersRouter from  "./routes/users"
const port = 3000;
const app = express();

app.use('/api/users', usersRouter);
app.listen(port, () =>{
    console.log(`server is running on http://localhost:${port}`)
})
