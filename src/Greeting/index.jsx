import React from 'react';



const Greeting = props => {
    const {name} = props;
    
    
    return(
        <>
       <center> <h2> Hey There! How are you {name} ? </h2> </center>
        </>
    );
};

export default Greeting;