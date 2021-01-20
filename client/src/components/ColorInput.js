import {useContext, useState} from 'react'
import ColorContext from '../contexts/ColorContext'
import { sendColor } from '../socketService'

function ColorInput() {

    const [colorInput, setColorInput] = useState('')

    const {color,setColor} = useContext(ColorContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setColor(prevState => ({...prevState,color:colorInput}))
        localStorage.setItem("localColor", colorInput);
        sendColor({color:colorInput,username:color.username})
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

            <input value={colorInput} onChange={(e)=>setColorInput(e.target.value)} type='color'/>
            <button type='submit'>Send Color</button>
            </form>
        </div>
    )
}

export default ColorInput
