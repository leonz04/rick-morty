

import './styles/EpisodeCard.css'
import ImgCharacter from "./ImgCharacter"
const EpisodeCard = ({ episode }) => {
  const characters = episode?.characters;
  return (
    <article className="episode">
      <header className="episode__header">
        <h2 className="episode__name">{episode?.name}</h2>
        <span className="episode__code">{episode?.episode}</span>
      </header>
      <section className="episode__body">
      <span className="episode__label">Fecha emisión: </span>
        <span className="air__date">{episode?.air_date}</span>
        <hr className="episode__hr" />
        

        
          
          <details className='details'>
          <summary className='summary'>Personajes</summary>
          <div className='container__characters'>
            {
                characters.map(char => (
                  <ImgCharacter
                    key={char.id}
                    char={char}
                  />
                  ))
                  /*<ImgCharacter
                    char={characters[0,1,2,3,4,5,6,7,8,9,10]}
                  />*/

                
            }
            </div>
            </details>
        
      </section>
    </article>
  )
}

export default EpisodeCard