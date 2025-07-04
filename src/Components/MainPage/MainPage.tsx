import React from 'react';
import './MainPage.css';

function MainPage() {

    return (
        <div className='container-main-page'>
            <label id='label-introduction'>Descubre nuestra ultima colección</label>
            <button id='button-explorar'>EXPLORAR AHORA</button>

            <div className='container-imagenes-main-page'>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Richard+mille.JPG' alt='' ></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Rolex+submarine+4.JPG' alt=''></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Rolex+daytona.JPG' alt=''></img>
                <img src='https://relojes-s-l.s3.us-west-1.amazonaws.com/Casio+EDIFICE+5.JPG' alt='' ></img>
            </div>
        </div>
    )
};

export default MainPage;