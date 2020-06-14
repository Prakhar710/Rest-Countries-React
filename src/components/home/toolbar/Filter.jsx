import React, { Component } from 'react'

export class Filter extends Component {

    selectedValue=(e)=>{
        let filter=e.target.value
        this.props.filterFunction(filter)
    }

    render() {
        return (
            <div className="mt-2 mb-2 ">
                <select onChange={this.selectedValue} className="filter-wrapper cursor">
                <option defaultValue value="">Filter By Region</option>
                <option value={'africa'}>Africa</option>
                <option value={'americas'}>Americas</option>
                <option value={'asia'}>Asia</option>
                <option value={'europe'}>Europe</option>
                <option value={'oceania'}>Oceania</option>
                </select>
            </div>
        )
    }
}

export default Filter
