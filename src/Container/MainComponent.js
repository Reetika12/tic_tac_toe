import React, { Component } from 'react'
import Boxmodel from '../Component/Boxmodel'
class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            ans:[[-1, -1, -1],[-1,-1,-1], [-1,-1,-1]],
            player1Enable: true,
            player2Enable: false
        }
    }

    checkCurrentStatus = () =>{
        let { ans} = this.state
        
    }
    handleBlockClick = (i, j) => {
        let {player1Enable, player2Enable, ans} = this.state
        if(ans[i][j] === -1){
            let temp = player1Enable ? 1 : 0
            ans[i][j]=temp
            this.setState({
                player1Enable: !player1Enable,
                player2Enable: !player2Enable,
                ans
            })
            this.checkCurrentStatus(i,j)
        }
    
    }

    changeState = ()=>{
        let arr=[]
        let {ans} = this.state
        for(let i=0;i<3;i++)
        {
            let arr1=[]
            for(let j=0;j<3;j++)
            {
                arr1.push(
                    
                    <Boxmodel onClick={this.handleBlockClick.bind(this, i, j)}>{ans[i][j]}</Boxmodel>
               )
            }

            arr.push(
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {arr1}
                </div>
            )
        }
        return arr;
        // console.log("array",arr)
    }
    render() {
      
        return (
            <div>
                {this.changeState()}
            </div>
        )
    }
}

export default MainComponent
