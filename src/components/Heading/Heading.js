import React from 'react';
import './Heading.css'
const Heading = props => {
    return (  
        <div className="alert alert-dismissible alert-warning mt-3 Heading" > {props.title}</div>
    );
}
 
export default Heading;