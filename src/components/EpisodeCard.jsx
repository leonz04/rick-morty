
import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"


const EpisodeCard = ({episode}) => {


    const[urlCharacter, setUrlCharacter]=useState()

   const[character, getCharacter]=useFetch(urlCharacter)

console.log('prueba url character');
   console.log(character)

useEffect(()=>{
    getCharacter()
},[])




    
  return (
    <article className="episode">
        <header className="episode__header">
            <h2 className="episode__name">{episode.name}</h2>
            <span className="episode__code">{episode.episode}</span>            
        </header>        
        <section className="episode__body">
            <span className="air__date">{episode.air_date}</span>
            <hr className="episode__hr"/>
            <h3>Characters</h3>
            <ul className="character__list">
                <li className="character__item">
                    <div className='container__episodes'>
                {
                 
                  episode.characters.map(char => (
                    console.log(episode.chatacacters)                   
                    //<img className="resident__img" src={resident?.image}/>
                                        
                  ))
                  

                  }
              </div>
                </li>
            </ul>
        </section>
    </article>
  )
}

export default EpisodeCard