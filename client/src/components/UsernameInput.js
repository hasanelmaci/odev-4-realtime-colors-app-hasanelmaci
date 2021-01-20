import {useState,useContext} from 'react';
import ColorContext from '../contexts/ColorContext'
import { sendColor } from '../socketService';

function UsernameInput() {


    const {setColor} = useContext(ColorContext);
    const [user, setUser] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setColor(prevState=>({...prevState,username:user}))// username contexte gönderilir


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={user} onChange={(e)=>setUser(e.target.value)}  />
            </form>
        </div>
    )
}

export default UsernameInput
