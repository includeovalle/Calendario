const express = require ('express');
const morgan = require ('morgan');
const dotenv = require ('dotenv').config();
const path = require ('path');

const app = express();

//middlewares
app.use(morgan("tiny"));

//static folder
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res)=>{
	res.status(205)
	.send('parece miniscilo')	
})
const port = process.env.PORT;
app.listen(port,()=>{
	console.log(`en el ${port}`)
} )
