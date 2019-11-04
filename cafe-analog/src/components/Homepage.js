import React from 'react';
import '../styles/Global.css';


// Testing variables, remove once no longer required

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            shift: undefined,
            closingTime: '--:--',
            shiftFetched: false,
            onShiftEmployees: []
        }
    }

    fetchOnShiftEmployees() {
        let employees = [];
        for (let i = 0; i < this.state.shift.checkedInEmployees.length; i++) {
            let emp = this.state.shift.checkedInEmployees[i];
            fetch('https://analogio.dk/publicshiftplanning/api/employees/Analog/' + emp.id, {method: 'GET'}).then(response => {
                response.json().then(responsejson => {
                employees.push(responsejson);
                this.setState({shiftFetched: true, onShiftEmployees: employees});
                this.forceUpdate();
            });
        }).catch(ex => {
            console.error('Could not connect to Analog API: ' + ex)
        });
        }
    }

    componentDidMount() {
        // open/closed
        fetch('https://analogio.dk/publicshiftplanning/api/open/analog', {method: 'GET'}).then(response => {
            response.json().then(responsejson => {
                this.setState({open: responsejson.open});
            });
        }).catch(ex => {
            console.error('Could not connect to Analog API: ' + ex)
        });
        // today's shift
        fetch('https://analogio.dk/publicshiftplanning/api/shifts/today/Analog', {method: 'GET'}).then(response => {
            response.json().then(responsejson => {
                let now = Date.now();
                let shift;
                let closingHours;
                let closingMinutes;
                for (let i = 0; i < responsejson.length; i++) {
                    let s = responsejson[i];
                    let closing = new Date(s.end);
                    if (now > new Date(s.start) && now < closing) {
                        shift = s;
                    }
                    closingHours = closing.getHours();
                    closingMinutes = closing.getMinutes();
                }
                if (closingHours.toString().length === 1) closingHours = '0' + closingHours.toString();
                if (closingMinutes.toString().length === 1) closingMinutes = '0' + closingMinutes.toString();
                
                this.setState({shift, closingTime: closingHours + ":" + closingMinutes});

                this.fetchOnShiftEmployees();
            });
        }).catch(ex => {
            console.error('Could not connect to Analog API: ' + ex)
        });
    }

    render() {

        return (
            <div style={{alignContent:'center'}}>
                <h1>Café Analog</h1>
                <h2>WE ARE</h2>
                <h1>{this.state.open ? 'ÅPEN' : 'CLØSED'}</h1>
                {this.state.open &&
                    <div>
                        <h2>UNTIL {this.state.closingTime}</h2>
                        {this.state.shiftFetched && this.state.onShiftEmployees.length > 0 &&
                        <div>
                            <br/>
                            <p>ON SHIFT NOW</p>
                            <div style={{flexDirection:'row', display:'flex', justifyContent:'center'}}>
                                {this.state.onShiftEmployees.map((emp, i) => {
                                    return  <div style={{border: 'thin solid black', margin:20, backgroundColor:'rgb(0,0,0,0.5)'}}>
                                                <img src={emp.photoRef} width={120} height={140} style={{padding:5}} alt='' key={i}/>
                                                <p>{emp.firstName + " " + emp.lastName}</p>
                                            </div>
                            })}
                            </div>
                        </div>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default Homepage;