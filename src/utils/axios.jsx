import axios from "axios";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers:{
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDRjOWQ0OGQyNGMyYzk4YmY2ZTE5NmFlZWFhNjk5NiIsInN1YiI6IjY2MmE4MmZiYmYzMWYyMDA5YmUzNTNhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oZa9sfEd1c-210PerkG3EphwC06E7xYOOGqbBEEdGnw'
    }
    
})

export default instance;