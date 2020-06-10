import React from 'react'

const CountryContainer=(props)=> {
    console.log(props)
    return (
        <div>
            {/* <div><img src={props.flag} alt={props.code}/></div> */}
            <div>
    <h5>{props.name}</h5>
    <div>
    <div>{props.population}</div>
    <div>{props.region}</div>
    <div>{props.capital}</div>
    </div>
            </div>
            
        </div>
    )
}

export default CountryContainer