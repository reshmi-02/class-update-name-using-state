import React,{Component} from 'react'

class Classstate extends Component{

    constructor(){
        super()

        this.state={
            name:"reshmi"
        }

    }

    render(){

        const changename=()=>{
            this.setState({name:"preeetha"})
        }

        return(
            <div>
                <h3>1.change name</h3>
                <p>{this.state.name}</p>
                <button onClick={changename}>Change name</button>
            </div>
        )
    }
}

export default Classstate