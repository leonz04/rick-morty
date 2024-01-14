import { useRef } from 'react'
import './styles/NavigationMenu.css'
const NavigationMenu = ({setCurrentSection,currentSection,setPage,setLimitResidents}) => {

  const inputPagination = useRef()

    const hadleEpisodes =()=>{
        setCurrentSection ('')
    }

    const hadleDimensions =()=>{
        setCurrentSection ('locations')
    }
   
    const handlePagination=(event)=>{
      event.preventDefault();
    const inputValue = inputPagination.current.value;
    if (!isNaN(inputValue) && inputValue > 0) {
      setLimitResidents(parseInt(inputValue));
      setPage(1)
    }
  }

  return (  
        <header className='header'>
        <nav className="nav">
          <ul className="nav__menu">
            <li className="nav__menu__item" onClick={hadleEpisodes}>Episodios</li>
            <li className="nav__menu__item" onClick={hadleDimensions}>Dimensiones</li>
          </ul>
          {
          currentSection=='locations'
          ?(
        <form className='header__form' >
        <input ref={inputPagination} type="text" />
        <button onClick={handlePagination}>Residentes Por pagina</button>
      </form>)
      :<></>
}
          
        </nav>
        
        
        </header>
    
  )
}

export default NavigationMenu