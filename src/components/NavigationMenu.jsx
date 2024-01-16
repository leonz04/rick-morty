import { useRef } from 'react'
import './styles/NavigationMenu.css'
const NavigationMenu = ({setCurrentSection,currentSection,setPage,setLimitResidents,setFilterStatus}) => {

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

  const filter=(event)=>{
    event.preventDefault()
    console.log('status');
    console.log(status);
    const status=event.target.innerText
    setFilterStatus(status)    
    
    setPage(1);
    
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
          ?(<>
          <div>
          <h2 className='filter__title'>Filtrar por status</h2>
        <ul className='status__filter'>
          <li className='status__filter__item' ><div className={'resident__status__circle Alive'}></div><span onClick={filter} className='label__filter'>Alive</span>
          </li>
          <li className='status__filter__item' onClick={filter} ><div className={`resident__status__circle Dead `}></div><span  className='label__filter'>Dead</span>
          </li>
          <li className='status__filter__item' ><div className={`resident__status__circle `}></div><span onClick={filter} className='label__filter'>Unknow</span>
          </li>
        </ul>
        </div>
        <form className='header__form' >
        <input ref={inputPagination} type="text" />
        <button onClick={handlePagination}>Residentes Por pagina</button>
      </form>
      </>)
      :<></>
}
          
        </nav>
        
        
        </header>
    
  )
}

export default NavigationMenu