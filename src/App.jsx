import { useEffect, useRef, useState } from 'react'
import useFetch from './hooks/useFetch'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'
import Pagination from '@mui/material/Pagination';
import Autosuggest from 'react-autosuggest'
import NavigationMenu from './components/NavigationMenu'
import EpisodeCard from './components/EpisodeCard'

function App() {



  const locationId = getRandomNumber(126)
  const [inputValue, setInputValue] = useState(locationId)

  const [page, setPage] = useState(1)
  const [totalResidents, setTotalResidents] = useState(0)
  const [limitResidents, setLimitResidents]=useState(8)


  const handleChange = (event, value) => {
    event.preventDefault
    setPage(value)
  }
  let allLocations = []
  for (let i = 1; i < 127; i++) {
    allLocations.push(i);

  }

  let allEpisode = []
  for (let i = 1; i < 52; i++) {
    allEpisode.push(i);

  }

  //consultas
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const urlEpisodes = `https://rickandmortyapi.com/api/episode/${allEpisode}`
  const [location, getLocation, hasError] = useFetch(url)
  const [allDimensions, getAllDimensions, doError] = useFetch(`https://rickandmortyapi.com/api/location/${allLocations}`)

  const [allEpisodes, getAllEpisodes, errorEpisodes] = useFetch(urlEpisodes)

  useEffect(() => {
    getAllEpisodes();
  }, [])

  console.log(allEpisodes)


  useEffect(() => {
    getLocation()

  }, [inputValue])

  useEffect(() => {
    getAllDimensions()

  }, [])


  useEffect(() => {
    setTotalResidents(location?.residents.length);


  }, [page, handleChange])

  console.log('allDimensions')
  console.log(allDimensions)


  /*const inputLocation = useRef()

  const searchLocation = event => {

    event.preventDefault();
    setInputValue(inputLocation.current.value)

  }*/

  const searchLocation = (event) => {

    event.preventDefault();
    setInputValue(dimensionSelected.id)

  }

  let startIndex = (page - 1) * limitResidents; // Índice inicial del slice
  let endIndex = startIndex + limitResidents; // Índice final del slice
  let residents = location?.residents.slice(startIndex, endIndex) || []; 

  console.log('residents desde APP');
  console.log(residents)

  //const [data, setData] = useState(allDimensions)
  const [dimensiones, setDimensiones] = useState(allDimensions)
  const [value, setValue] = useState('')
  const [dimensionSelected, setDimensionSelected] = useState()

  const [currentSection, setCurrentSection] = useState('')



  const onSuggestionsFetchRequested = ({ value }) => {
    console.log(filtrarDimensiones(value))

    setDimensiones(filtrarDimensiones(value))
  }
  const filtrarDimensiones = (value) => {
    const inputValue = value.trim().toLowerCase();

    const inputLength = inputValue.length;

    let filtrado = allDimensions.filter((dimension) => {
      let texto = dimension.name + " - " + dimension.id;

      if (texto.toLowerCase()
        .normalize("NFD")
        .includes(inputValue)) {
        return dimension;
      }
    });
    console.log(filtrado)
    return inputLength === 0 ? [] : filtrado;
  }

  const onSuggestionsClearRequested = () => {
    setDimensiones([]);
  }


  const getSuggestionValue = (suggestion) => {
    return `${suggestion.name} - ${suggestion.id}`

  }

  const renderSuggestion = (suggestion) => (
    <div onClick={() => seleccionarDimension(suggestion)}>
      {`${suggestion.name} - ${suggestion.id}`}

    </div>
  )

  const seleccionarDimension = (dimension) => {
    setDimensionSelected(dimension);
    searchLocation()
  }

  const onChange = (e, { newValue }) => {
    setValue(newValue);
  }
  const inputProps = {
    placeholder: 'dimension',
    value,
    onChange,
  };

  const eventEnter = (e) => {
    if (e.key == 'Enter') {
      let split = e.target.value.split('-');
      let dimension = {
        name: split[0].trim(),
        id: split[1].trim()

      }
      seleccionarDimension(dimension)
    }
  }
  return (

    <div className='app'>
      <div className='banner'></div>
      <h1>Rick and Morty</h1>
      <NavigationMenu
      setCurrentSection={setCurrentSection}
      currentSection={currentSection}
      setInputValue={setInputValue}
      setPage={setPage}
      setLimitResidents={setLimitResidents} />
      
      {/*<form onSubmit={searchLocation}>
        <input ref={inputLocation} type='text' />
        <button>Search</button>
  </form>*/}


      {
        hasError
          ? 
          <h2>Hey you must provide an id from 1 to 126</h2>
          : (currentSection == 'locations'
              ?
              <>
              <div className='search'>
              <Autosuggest 
        suggestions={dimensiones ? dimensiones : []}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={eventEnter}
      />
      <button className='btn__search__location' onClick={searchLocation}>Consultar Dimension</button>
      </div>

              <LocationCard 
                location={location}
              />
              <div className='container__residents'>
                {
                  residents?.map(url => (
                    <ResidentCard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
              <Pagination
                count={parseInt(Math.ceil(totalResidents / limitResidents),10)}
                page={page}
                onChange={handleChange} 
                color="primary"/>
                </>
              : (<div className='container__residents'>
                {
                
                  allEpisodes?.map(episode => (
                    <EpisodeCard
                      key={episode}
                      episode={episode}
                    />
                    
                  ))
                 
                }
              </div>)
            
          )
      }



    </div>

  )
}

export default App
