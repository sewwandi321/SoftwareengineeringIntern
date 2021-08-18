import React, { Component } from 'react';
import axios from 'axios';

const initialState = {
    name:'',
    description:'',
}

class createPet extends Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
        this.state = initialState;
    }
    

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        let pet = {
            name:this.state.name,
            description:this.state.description,
        }
        console.log('DATA to Send',pet);
        axios.post('http://localhost:8055/pet/create' ,pet)
        .then(response =>{
            alert('Data successfully inserted')
        })
        .catch(error =>{
            console.log(error.message);
            alert("unsucceful");
        })
    }
    render() {
        return (
            <div className='container'>
                <h1>Create  Pet</h1>
                <form onSubmit ={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="petname" className="form-label">Pet Name</label>
                        <input type="text" 
                        className="form-control"
                         id="name" 
                         name= "name" 
                         value = {this.state.name} 
                         onChange={this.onChange}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" 
                        className="form-control"
                         id="description" 
                         name= "description" 
                         value = {this.state.description} 
                         onChange={this.onChange}
                         />
                    </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default createPet;