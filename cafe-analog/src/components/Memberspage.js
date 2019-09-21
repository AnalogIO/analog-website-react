import React from 'react';
import Blackboard from '../data/blackboard.png';

class Memberpage extends React.Component {

    render() {

        return (
            <div className='frontpage-menu-content'>
                <div style={{width:200, height:300}}>
                    <img style={{width:200, height:300}} 
                    className='blackboard' 
                    src={require('../data/blackboard.png')}/>
                    <h2>menu</h2>
                </div>
                <div style={{width:200, height:300}}>
                    <img style={{width:200, height:300}} 
                    className='blackboard' 
                    src={require('../data/blackboard.png')}/>
                    <p>follow us!</p>
                </div>
            </div>
        );
    }
}

export default Memberpage;