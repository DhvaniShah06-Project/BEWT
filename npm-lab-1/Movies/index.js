const express=require('express')
const routeUser = require('./Routes/users.route')
const routeMovies=require('./Routes/movies.route')
const routeRatings=require('./Routes/ratings.route')
const app=express()
app.use(express.json())

app.use("/users",routeUser)
app.use("/movies",routeMovies)
app.use("/ratings",routeRatings)


app.listen(3200,()=>{
    console.log("Server Started")
})