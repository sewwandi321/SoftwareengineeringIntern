import React, {Component} from 'react'

class TableRow extends Component{
    render(){
        return(
           <tr>
               <td>
                   {this.props.obj.name}
               </td>
               <td>
                   {this.props.obj.description}
               </td>
               <td>
                  <button className ="btn btn-primary">Edit</button>
               </td>
               <td>
                  <button className ="btn btn-primary">Delete</button>
               </td>
           </tr>
        )
    }
}

export default TableRow
