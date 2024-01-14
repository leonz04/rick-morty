import './styles/ImgCharacter.css'

import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
const ImgCharacter = ({char}) => {
    const [character, getCharacter] = useFetch(char)
    console.log(character);
    useEffect(() => {
      getCharacter()
    }, [])
    return (
        <>
            <img className='img__character'src={character?.image} alt="" />
        </>
    )
}
export default ImgCharacter