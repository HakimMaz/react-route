import React from 'react';
const Contact =(props)=>{
    setTimeout(()=>{
    props.history.push('/about')
    },2000)
    return(
        <div className="container">
        <h4 className="center">Contact</h4>
        <p>For contact please call: +213554967457 </p>
        </div>
    )
}
export default Contact