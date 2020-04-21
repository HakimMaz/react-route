import React from 'react';

const Rainbow=(WrappedComponent)=>{
    const colours=['red','orange','green','dark'];
    const coulorRandom=colours[Math.floor(Math.random()*3)];
    const className= coulorRandom+ '-text';
    return(props)=>{
        return (
            <div className={className}>
             <WrappedComponent {...props}/>
            </div>
        )
        }



}
export default Rainbow;