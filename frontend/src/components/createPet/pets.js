
import React,{Component} from 'react';
import axios from 'axios';
import TableRow from "./TableRow"


export default class pets extends Component{
    constructor(props){
        super(props);
        this.state = { pets : [] };
    }
    componentDidMount(){
        console.log('loading');
        axios.get('http://localhost:8055/pet/')
        .then(response =>{
            console.log('loading');
            console.log('pets',response.data.data);
            this.setState({pets : response.data.data});

            console.log('state pets type'+typeof(this.state.pets))

            //const entries = Object.entries(response.data);

//console.log(entries);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // tabRow(){
    //     return   this.state.pets.map(function(object, i){
    //         return <TableRow obj ={object} key={i}/> 
    //     });
    // }



    render(){
        return(
            <div>
                <h3 align = "center">pets list</h3>
                <table classname = "table table-striped" style ={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th colspan ="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    <tr>
                        <td>
    {this.state.pets.map( cell => { 
        return <TableRow obj ={cell} />
    })}
    </td>
  </tr>
  



                    </tbody>
                    
                </table>
            </div>
        );
    }
}



