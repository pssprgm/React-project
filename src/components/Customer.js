import React from 'react';

class Customer extends React.Component{

    render(){
        return(
            <div>
                <CustomerProfile image={this.props.image}/>
            </div>
        );
    }

}


class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="My image"/>
                <p>{this.props.name}</p>
            </div>
        );
    }

}


export default Customer;
