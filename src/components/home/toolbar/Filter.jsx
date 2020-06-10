import React, { Component } from 'react'

export class Filter extends Component {
    render() {
        return (
            <div>
                <select>
                <option defaultValue>Filter By Region</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                </select>
            </div>
        )
    }
}

export default Filter
