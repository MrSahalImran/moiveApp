import React from 'react'
import Dropdown from '../templates/Dropdown'

const HorizontalCards = ({ data }) => {

    return (
            <div className='w-full mb-3 p-3 overflow-y-hidden  flex '>
                {data.map((item, index) => (
                    <div className='min-w-[15%] rounded-md overflow-hidden mr-3 mb-3 bg-zinc-950' key={index}>
                        <img className='w-full h-[50%] object-cover' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`} alt="" />
                        <div className='text-white p-2 h-[45%]'>

                            <h1 className='text-lg font-semibold '>

                                {item.title || item.name || item.original_title || item.original_name}
                            </h1>
                            <p className='mt-3 mb-3 text-sm text-zinc-400'>
                                {item.overview.slice(0, 50)}... <span className='text-blue-400'>more</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default HorizontalCards