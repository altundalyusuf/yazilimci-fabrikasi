import React, { Component } from 'react'

export default class Celsius extends Component {
    render() {
        return (
            <div className='bg-dark p-1 text-white'>
                Celsius: {this.props.temperature}
            </div>
        )
    }
}
