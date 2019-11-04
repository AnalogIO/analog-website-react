import React from 'react';
import GridView from './GridView';

class Memberpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [
                {name:'Bob', imgurl:'https://d279m997dpfwgl.cloudfront.net/wp/2016/01/bob_oakes_square.jpg'},
                {name:'Lisa', imgurl:'https://data.whicdn.com/images/332260659/original.jpg'},
                {name:'Martin', imgurl:'https://localpartnerships.org.uk/wp-content/uploads/2016/03/Martin-Forbes.jpg'},
                {name:'Gitte', imgurl:'https://www.augsburger-allgemeine.de/img/incoming/crop19486306/4854121727-cv3_4-w460/Gitte1.jpg'},
                {name:'Mark', imgurl:'https://www.hoganlovells.com/~/media/hogan-lovells/global/people/b/brennan_mark_h08640.jpg'}
            ]
        }
    }

    ready = false;
    
    componentDidMount() {
        fetch('https://analogio.dk/publicshiftplanning/api/employees/Analog?active=true', {method: 'GET'}).then(response => {
            response.json().then(responsejson => {
                this.setState({members: responsejson});
                this.ready = true;
                this.forceUpdate();
            });
        }).catch(ex => {
            console.error('Could not connect to Analog API: ' + ex)
        });
    }
    
    memberRender = member => {
        return (
            member !== undefined ?
            <div style={{border:'thin solid black', width:150, height:220, backgroundColor:'lightgrey', paddingTop:10, paddingLeft:10, paddingRight:10, margin: 20}}>
                <img width={150} height={150} src={member.photoRef} alt={''}/>
                {member.firstName + ' ' + member.lastName}
            </div>
            :
            <div width={150} height={200} style={{backgroundColor:'black'}}></div>    
        );
    }

    render() {

        return (
            this.ready && <GridView items={this.state.members} columns={3} itemRender={this.memberRender}/>
        );
    }
}

export default Memberpage;