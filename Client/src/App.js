import React from 'react'
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Homepage from './components/homepage';
import Wallet from './components/wallets'
const App = () => {
        return (

                        <Routes>
                                <Route exact path='/' element={<Homepage/>} />
                                <Route exact path='/wallet' element={<Wallet/>} />
                        </Routes>



        )
}

export default App
