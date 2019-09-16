import React from 'react';
import Logo from '../data/logo.png';
import '../styles/NavigationBar.css';


class NavigationBar extends React.Component {
  
    isSelected = tab => {
        return tab === this.props.currentTab;
    }
    render() {  
        return (
            <div className='container'>
                <img className='logo' src={Logo}
                onClick={() => this.props.changeTab('home')} alt=''
                style={{filter: this.isSelected('home') ? 'invert(1)' : 'invert(0)'}}/>
                <button 
                onClick={() => this.props.changeTab('menu')} 
                style={{color:this.isSelected('menu') ? 'white' : 'grey'}}>
                    MENU
                </button>
                <button 
                onClick={() => this.props.changeTab('apply')}
                style={{color:this.isSelected('apply') ? 'white' : 'grey'}}>
                    APPLY
                </button>
                <button 
                onClick={() => this.props.changeTab('members')}
                style={{color:this.isSelected('members') ? 'white' : 'grey'}}>
                    MEMBERS
                </button>
                <button 
                onClick={() => this.props.changeTab('leaderboard')}
                style={{color:this.isSelected('leaderboard') ? 'white' : 'grey'}}>
                    LEADERBOARD
                </button>
                <button 
                onClick={() => this.props.changeTab('contact')}
                style={{color:this.isSelected('contact') ? 'white' : 'grey'}}>
                    CONTACT
                </button>
            </div>
        );
    }
}

export default NavigationBar;