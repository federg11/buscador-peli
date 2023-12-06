import React, { useState } from 'react'
import axios from 'axios';

const apiKey = "c79aa600";

const Content = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState({});
    
    
    const onSearchHandler = () => {
        if(!searchTerm){
            return;
        }

        axios({
            method: "GET",
            url: `http://www.omdbapi.com/?t=${searchTerm}&&apiKey=${apiKey}`,
        }).then(response => {
            setData(response.data)
            console.log(response.data)
        });

        setSearchTerm("");
    };


  return (
    <div className='h-screen bg-slate-800 w-full pt-7'>
        <div className='w-full flex items-center justify-center'>
            <input 
            type='text' 
            placeholder='Escribe una pelicula'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='text-[19px] mr-4 outline-none rounded-md p-2 w-[40%]' />
            <button 
            onClick={onSearchHandler} 
            className='border border-white rounded-md p-2 text-white font-bold'>
                Search
            </button>
            
           { Object.keys(data).length > 0 &&
            <div className='mt-10 w-full flex items-center justify-center text-white font-bold flex-wrap'>
                <div>
                    <img src={data.Poster} className="border border-white rounded-lg"/>
                </div>
                <div className='ml-5 bg-slate-700 p-2 rounded-md'>
                    <h1>Titulo: {data.Title}</h1>
                    <div className='pt-2' />
                    <p>Año: {data.Year}</p>
                    <div className='pt-2' />
                    <p>Director: {data.Director}</p>
                    <div className='pt-2' />
                    <p>Genre: {data.Genre}</p>
                    <div className='pt-2' />
                    <p>Pais: {data.Country}</p>
                    <div className='pt-2' />
                    <p>Actores: {data.Actors}</p>
                    <div className='pt-2' />
                    <p>Lenguaje: {data.Language}</p>
                    <div className='pt-2' />
                    <p>Rating: {data.imdbRating}</p>
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default Content