import React from 'react';
import loader from '../../asset/VerticalLoader.gif';

const Spinner = () => {
    return (  
        <div className="container">
            <div className="mt-5">
                <img src={loader} alt ="loader" width="100" height="100"></img>
            </div>
        </div>
    );
}
 
export default Spinner;