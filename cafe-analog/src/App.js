import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Background from './data/example_images/background.jpg';
import Homepage from './components/Homepage';
import Menupage from './components/Menupage';
import Applypage from './components/Applypage';
import Memberspage from './components/Memberspage';
import Leaderboardpage from './components/Leaderboardpage';
import Contactpage from './components/Contactpage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'home'
    };
  }

  changeTab = tab => {
    this.setState({tab});
  }

  render() {
    return (
      <div className='app'>
        <img src={Background} className='background-image' alt=''/>
        <header>
          <NavigationBar changeTab={this.changeTab} currentTab={this.state.tab}/>
        </header>

        <div className='page-container'>
        {

          (this.state.tab === 'home' && <Homepage/>)                ||
          (this.state.tab === 'menu' && <Menupage/>)                ||
          (this.state.tab === 'apply' && <Applypage/>)              ||
          (this.state.tab === 'members' && <Memberspage/>)          ||
          (this.state.tab === 'leaderboard' && <Leaderboardpage/>)  ||
          (this.state.tab === 'contact' && <Contactpage/>)          ||
          <div>HELLO!</div>
        }
        </div>
      </div>
    );
  }
}

export default App;
