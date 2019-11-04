import React from 'react';

class GridView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows:[]
        }
    }

    renderRow = rowID => {
        var row = [];
        for (var i = 0; i < this.props.columns; i++) {
            row = [...row, <div key={i}>{
                this.props.itemRender(this.props.items[rowID * this.props.columns + i])
            }</div>];
        }
        return row;
    }

    componentDidMount() {
        var rows = [];
        for (var i = 0; i < this.props.items.length / 3; i++) {
            rows = [...rows, this.renderRow(i)];
        }
        this.setState({rows});
    }
    
    j = 0;
    render() {
        return (
            <div style={{height:'500px', overflowY:'scroll'}}>
                {
                    this.state.rows.map(row => {
                    return (
                    <div key={'row'+this.j++} style={{flexDirection:'row', display:'flex', justifyContent:'center', margin:20}}>
                        {row}
                    </div>
                    );
                    })
                }
            </div>
        );
    }
}

export default GridView;