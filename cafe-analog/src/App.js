import React from 'react';
import './App.css';
import './styles/Global.css';
import NavigationBar from './components/NavigationBar';
import Background from './data/background.png';
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
      tab: 'home',
      espressoDrinks: [
        {name:"Café Latte", single:17, double:20},
        {name:"Cappuccino", single:15, double:17},
        {name:"Cortado", single:15, double:17},
        {name:"Americano", single:10, double:15},
        {name:"Espresso", single:10, double:12},
        {name:"Iced Latte", single:19, double:22}
      ],
      nonEspressoDrinks: [
        {name:"Filter Coffee", price:10},
        {name:"Tea", price:5},
        {name:"Cocoa", price:15},
        {name:"Chai Latte", price:20},
      ],
      other: [
        {name:"Espresso Beans", price:50},
        {name:"Clip Card", price:80},
        {name:"Fancy Clip Card", price:150},
        {name:"Thermo Cup", price:30},
        {name:"Syrup", price:1}
      ]
    };
  }

  changeTab = tab => {
    this.setState({tab});
  }

  getEspressoDrinks = () => {
    var espressoDrinks = this.state.espressoDrinks.map(i => 
      <p>{genFixedSizeText(i.name, 20) + "\t" + i.single + ",-/" + i.double + ",-"}</p>);
    return espressoDrinks;
  }
  getNonEspressoDrinks = () => {
    var nonEspressoDrinks = this.state.nonEspressoDrinks.map(i => 
      <p>{genFixedSizeText(i.name, 20) + "\t" + i.price + ",-"}</p>);
    return nonEspressoDrinks;
  }
  getOtherProducts = () => {
    var otherProducts = this.state.other.map(i => 
      <p>{genFixedSizeText(i.name, 20) + "\t" + i.price + ",-"}</p>);
    return otherProducts;
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
            <div>Welcome!</div> // This is not supposed to be shown
          }
          <div className='frontpage-menu'>
            <h1>Get recharged</h1>
            <p>Great ideas starts with great coffee!</p>
            <div className='frontpage-menu-content'>
              <div style={{padding:10, borderRight:'2px solid white'}}>
              <h2>Espresso drinks</h2>
              {this.getEspressoDrinks()}
              </div>
              <div style={{padding:10, borderLeft:'2px solid white', borderRight:'2px solid white'}}>
              <h2>Non-espresso drinks</h2>
              {this.getNonEspressoDrinks()}
              </div>
              <div style={{padding:10, borderLeft:'2px solid white'}}>
              <h2>Other</h2>
              {this.getOtherProducts()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function genFixedSizeText(text, size) {
  var newText = "";
  for (let i = 0; i < text.length; i++)
    newText += (i < size) ? text[i] : ".";
  return newText;
}

export default App;
