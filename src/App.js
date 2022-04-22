import React, { useEffect, useState } from 'react'
import MovieRow from './components/MovieRow';
import Tmdb from './Tmdb'
import './App.css'
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

  const [ movieList, setMovieList ] = useState([])
  const [ featuredData, setFeaturedData ] = useState(null)
  const [ blackHeader, setBlackHeader ] = useState(false)


  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList()
      setMovieList(list)

      const originals = list.filter(item => item.slug === 'originals')
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length))
      const chosen = originals[0].items.results[randomChosen]
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')

      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])


  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])


  return (
    <div className='page'>

      <Header black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}
