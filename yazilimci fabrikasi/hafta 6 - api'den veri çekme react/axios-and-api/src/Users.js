import React, { Component } from 'react'
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBSpinner, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true,
        };
    }
    async componentDidMount() {
        await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => response.data)
            .then(data => this.setState({ users: data }))
            .catch(error => console.error(error))
        this.setState({ loading: false });
    }

    fetchedUsers() {
        return (
            <MDBContainer breakpoint="md">
                <MDBTable align='middle' className='mb-5' hover>
                    <MDBTableHead>
                        <tr className='bg-primary text-white text-center'>
                            <th scope='col' className='fw-bold' >User Name</th>
                            <th scope='col' className='fw-bold'>Name</th>
                            <th scope='col' className='fw-bold'>E Mail</th>
                            <th scope='col' className='fw-bold'>Website</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {this.state.users.map((user) => (
                            <tr key={user.id} className='text-center hover-overlay hover-zoom hover-shadow ripple'>
                                <td>
                                    <p className='fw-normal mb-1'>{user.username}</p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>{user.name}</p>
                                </td>
                                <td>
                                    <MDBBadge color='danger' pill className='p-3'>
                                        {user.email}
                                    </MDBBadge>
                                </td>
                                <td>
                                    <MDBBadge color='success' pill className='p-3 bg-opacity-75'>
                                        {user.website}
                                    </MDBBadge>

                                </td>
                            </tr>
                        ))}

                    </MDBTableBody>
                </MDBTable>
            </MDBContainer>
        )
    }

    loadingUsers() {
        return (
            <div className='text-center'>
                <MDBContainer>
                    <header>
                        <div className='mt-5 mb-1 p-3 text-center bg-success bg-opacity-50'>
                            <h4>Relax, we are just loading the page :)</h4>
                        </div>
                    </header>

                    <MDBBtn disabled className='bg-success'>
                        <MDBSpinner size='sm' role='status' tag='span' className='me-2' />
                        Loading...
                    </MDBBtn>
                </MDBContainer>

            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.loading ? (
                    this.loadingUsers()
                ) : (
                    this.fetchedUsers()
                )}
            </div>
        )
    }
}
