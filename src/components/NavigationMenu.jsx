
const NavigationMenu = ({setCurrentSection}) => {

    const hadleEpisodes =()=>{
        setCurrentSection ('')
        
        

    }

    const hadleDimensions =()=>{
        setCurrentSection ('locations')

    }

  return (
    <div>
        <header className='header'>
        <nav>
          <ul>
            <li onClick={hadleEpisodes}>Episodios</li>
            <li onClick={hadleDimensions}>Dimensiones</li>
          </ul>
        </nav>
        </header>
    </div>
  )
}

export default NavigationMenu