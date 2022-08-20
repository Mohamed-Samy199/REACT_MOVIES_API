import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import Card from '../Card/Card'
import "./Populer.css"

let API_key = "&api_key=b44e5bbfa6921b60c1a1e3941df29c03"
let base_url = "https://api.themoviedb.org/3"
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key

const Populer = () => {

    const [movie, setMovie] = useState([])
    const [urlState, setUrlState] = useState(url)
    const [search, setSearch] = useState()
    let arr = ["Populer", "Theatre", "kids", "Drama"]

    useEffect(() => {
        axios.get(urlState).then(({ data }) => {
            setMovie(data.results)
        })
    }, [urlState])
    const getData = (movieTypeLink) => {
        if (movieTypeLink === "Populer") {
            url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key
        }
        if (movieTypeLink === "Theatre") {
            url = base_url + "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" + API_key
        }
        if (movieTypeLink === "kids") {
            url = base_url + "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" + API_key
        }
        if (movieTypeLink === "Drama") {
            url = base_url + "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10" + API_key
        }
        setUrlState(url)
    }
    const handelSearchMovie = (e) => {
        if (e.key === "Enter") {
            url = base_url + "/search/movie?api_key=b44e5bbfa6921b60c1a1e3941df29c03&query=" + search
            setUrlState(url)
            setSearch(" ")
        }
    }

    return (
        <Fragment>
            <div className='nav'>
                <div className='container'>
                    <div className='logo'>
                        <h1 style={{ cursor: "pointer" }}>watch</h1>
                    </div>
                    <div className='links'>
                        {
                            arr.map((val) => {
                                return (
                                    <Fragment>
                                        <a href='#' name={val} onClick={(e) => { getData(e.target.name) }} >{val}</a>
                                    </Fragment>
                                )
                            })
                        }
                    </div>

                    <div className='search'>
                        <input type="text" placeholder='enter movies' id='name'
                            onChange={(e) => setSearch(e.target.value)} value={search}
                            onKeyPress={handelSearchMovie} style={{ textTransform: "lowercase" }} />
                        <label htmlFor='name' ><button  ><i class="fa-solid fa-magnifying-glass"></i></button></label>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='container'>
                    {
                        movie.length === 0 ? <p className='not-found' style={{ fontSize: "40px", color: "#032541" }}>not found</p> :
                            movie.map((e, idx) => {
                                return (
                                    <Fragment><Card key={idx} send={e} /></Fragment>
                                )
                            }
                            )
                    }
                </div>
            </div>
        </Fragment>
    )
}
export default Populer