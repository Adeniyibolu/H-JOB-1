import React,{useState} from 'react'
import './index.css'
import './mobile.css'
import Popup from '../popup/Popup';
import { data as Images } from '../anotherpage/data'
const Index = () => {
    const [popUpData, setPopUpdata] = useState();
    const [showPopUp, setShowPopup] = useState(false)

    const click =(name)=>{
        setPopUpdata({name})
        setShowPopup(true)
    }
    return (
        <div className="wallets">
            {/* <header>
                <Link to="/">
                    <img src="../../images/ScreenShot2021-10-16at10.29.02PM.png" alt="." />
                </Link>
            </header> */}

            <div className="banner">
                <h1>SELECT WALLET TYPE</h1>
                <span className="info1">Choose your wallet and proceed to synchronize securely.
                    After synchronization, Select Correct Node String.</span>
                <span className="info2">Your data stays on your device and its never stored.</span>
            </div>

            <div className="all-wallets">

                {Images?.map((image,i) => (
                    <div className="box" key={i}>
                        <img src={image.image} alt="." />
                        <span>{image.name}</span>
                        <p onClick={e=>click(image.name) }>synchronize</p>
                    </div>
                ))}


            </div>

            <footer>
                <div className="contact-us">
                    <div className="left">
                        <h1>Contact Us</h1>
                        <p>Send all inquiries to Support@blockchain.com</p>
                    </div>

                    <div className="right">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                        <i style={{ color: '#2fa6da' }} className="fab fa-telegram"></i>
                    </div>
                </div>

                <div className="bottom">
                    <p>Copyright: Blockchain {new Date().getFullYear()}.</p>

                    <i className="fa  fa-chevron-up"></i>
                </div>



            </footer>
            {showPopUp ? <Popup setPopUpdata={setPopUpdata} setShowPopup={setShowPopup} popUpData={popUpData} /> : null}
        </div>
    )
}

export default Index;
