import React, { Component } from 'react'

export default class Kelvin extends Component {
    render() {
        return (
            <div className='bg-dark p-1 text-white'>
                Kelvin: {this.props.temperature + 273.15}
            </div>
        )
    }
}
