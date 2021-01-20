import {useEffect,useState} from 'react'
import ColorInput from './components/ColorInput'
import UsernameInput from './components/UsernameInput'
import { disconnectSocket, initSocket, receiveColor } from './socketService'

//Butona basıldığında;
//Backende color,username
//Contexe color,username


function Container() {

    const [receivedDatas, setReceivedDatas] = useState('')
    console.log(receivedDatas)

    useEffect(()=>{
        initSocket()
        
        receiveColor(color =>{
            setReceivedDatas(color)
        })


        return () => disconnectSocket()
    },[])


    return (
        <div>
            <ColorInput/>
            <UsernameInput/>
        </div>
    )
}

export default Container
