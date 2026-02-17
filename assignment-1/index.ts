import express form "express"
const app = express()

app.use(express.json())

app.get("/", (req,res)=>{
	res.status(200).json({
		msg : "everything is good"
	})
})

app.listen(8000, ()=>{
	console.log("server is running on port : 8000")
})
