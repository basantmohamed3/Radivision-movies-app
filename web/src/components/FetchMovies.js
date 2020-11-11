import React, { useEffect, useState } from 'react';

import axios from "axios"

function FetchMovies() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/movies")
            .then(res => {
                console.log(res.data.data)
                // console.log(res.data)
                setMovies(res.data.data)
            }).catch(e => {
                console.log(e)
            })
    }, [])
    return (
        <div style={{ height: 400, width: '100%' }}>


            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <p>  Title :    {movie.title}</p>
                        <p>  Year :    {movie.year}</p>
                        <p>   Director :   {movie.director}</p>
                        <p>   Actors :{movie.actors}</p>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default FetchMovies
