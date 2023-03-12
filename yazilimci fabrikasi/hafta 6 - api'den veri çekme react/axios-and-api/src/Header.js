import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className='p-3 text-center bg-light'>
                        <h1 className='mb-3'>User Data </h1>
                        <h3 className='mb-3'>Fetched with Axios from: </h3>
                        <h4 className='mb-3'><a href="https://jsonplaceholder.typicode.com/users" target={'_blank'} rel='noreferrer' >https://jsonplaceholder.typicode.com/users</a></h4>
                    </div>
                </header>
            </div>
        )
    }
}
