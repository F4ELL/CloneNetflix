import React from 'react'
import './FeaturedMovie.css'

export default ({item}) => {
    console.log(item)

    const firstDate =  new Date(item.first_air_data)

    let genres = []
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    return (
        <div>
            <section className='featured' style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
                <div className='featured--vertical'>
                    <div className='featured--horizontal'>
                        <div className='featured--name'>{item.original_name}</div>
                        <div className='featured--info'>
                            <div className='featured--points'>{item.vote_average}</div>
                            <div className='featured--year'>{firstDate.getFullYear()}</div>
                            <div className='featured--seasons'>{item.seasons.length} temporada{item.seasons.length !== 1 ? 's' : ''}</div>
                        </div>
                        <div className='featured--description'>{item.overview}</div>
                        <div className='featured--buttons'>
                            <a href='#' className='featured--watchbutton'>► Assistir</a>
                            <a href='#' className='featured--mylistbutton'>+ Minha lista</a>
                        </div>
                        <div className='featured--genres'><strong>Gêneros: {genres.join(', ')}</strong></div>
                    </div>
                </div>
            </section>
        </div>
    )
}