import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{

    render(){
        return(
            <TableRow>
                <TableCell>{this.props.name}</TableCell>
                <TableCell><img src={this.props.image} alt="My image"/></TableCell>

            </TableRow>
        );
    }

}


export default Customer;
