import React from 'react';
import '../styles/Global.css';
import Barista from '../data/example_images/barista.png';


// Testing variables, remove once no longer required
let open = true;
let time = "16:00";

class Homepage extends React.Component {

    render() {

        return (
            <div style={{alignContent:'center'}}>
                <h1>Café Analog</h1>
                <h2>WE ARE</h2>
                <h1>{open ? 'ÅPEN' : 'CLØSED'}</h1>
                <h2>UNTIL {time}</h2>
                <p>ON SHIFT NOW</p>
                <div>
                    <img src={Barista} width={140} height={200} style={{padding:20}} alt=''/>
                    <img src={Barista} width={140} height={200} style={{padding:20}} alt=''/>
                    <img src={Barista} width={140} height={200} style={{padding:20}} alt=''/>
                </div>
            </div>
        );
    }
}

export default Homepage;