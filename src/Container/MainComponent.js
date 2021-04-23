import React, { Component } from 'react'
import Boxmodel from '../Component/Boxmodel'
class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            arr=[],

        }
    }

    changeState = ()=>{

    }
    render() {
        return (
            <div>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Boxmodel onClick={this.changeState} >0</Boxmodel>
                    <Boxmodel  >0</Boxmodel>
                    <Boxmodel  >0</Boxmodel>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Boxmodel  >0</Boxmodel>
                    <Boxmodel  >0</Boxmodel>
                    <Boxmodel  >0</Boxmodel>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Boxmodel  >0</Boxmodel>
                    <Boxmodel  >0</Boxmodel>
                    <Boxmodel  >0</Boxmodel>
                </div>
                
            </div>
        )
    }
}

export default MainComponent
//
