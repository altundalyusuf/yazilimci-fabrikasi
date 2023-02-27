import React, { Component } from 'react'

export default class Fahrenheit extends Component {
    render() {
        return (
            <div className='bg-dark text-white p-1'>
                Fahrenheit: {((this.props.temperature) * 9 / 5) + 32}
            </div>
        )
    }
}
