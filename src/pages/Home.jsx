import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useStore } from 'react-redux'
import { useHistory } from "react-router-dom";
import { fetchOrUpdateUser } from '../features/user'
import { selectUser } from '../utils/selector'
import Logo from '../assets/icon/Logo.svg'
function Home() {

    const store = useStore()
    const navigate = useHistory()
    const [formValues, setFormValues] = useState({})

    const user = useSelector(selectUser)
    console.log(user)
    useEffect(() => {
        {user.status === "resolved" ? navigate.push("/swipe") : (<div></div>)}
    })
    const submit = e => {
        e.preventDefault()
        fetchOrUpdateUser(store, formValues)
    }
    return(
        <React.StrictMode>
            <div className='LogoBox'>
                <img src={Logo} alt={Logo} />
            </div>
            {user.status === "rejected" && user.error !== null ? user.error : null}
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value})}/>
                </div>
                <button className="log-in-button">Connexion</button>
            </form>
        </React.StrictMode>
    )
}

export default Home