import React, { Component } from 'react'
import { Container, Row, Col, Navbar, NavbarBrand, Button } from 'reactstrap';
import Celsius from './Components/Celsius';
import Fahrenheit from './Components/Fahrenheit';
import Kelvin from './Components/Kelvin';
import './index.css';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0
    }
  }

  increaseTemperature() {
    this.setState({
      temperature: this.state.temperature + 1
    })
  }

  decreaseTemperature() {
    this.setState({
      temperature: this.state.temperature - 1
    })
  }

  render() {
    return (
      <div>
        {/* Navbar */}
        <Navbar
          className="px-5"
          color="dark"
          dark
        >
          <NavbarBrand href="/">
            <img
              alt="logo"
              src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
              style={{
                height: 40,
                width: 40
              }}
              className="me-3"
            />
            Reactstrap
          </NavbarBrand>

          <div className='text-white'>React, Reactstrap ve Bootstrap ile hava durumu...</div>
        </Navbar>

        {/* Heading */}
        <div className='d-flex justify-content-center mt-5 pt-5'>
          <img src="https://icon-library.com/images/weather-icon-sunny/weather-icon-sunny-15.jpg" alt="sunny weather"
            style={{
              height: 50,
              width: 50
            }}
          />
          <h1 className='ms-3 me-3'>Hava Nasıl?</h1>
          <img src="https://seeklogo.com/images/R/rainy-weather-symbol-logo-B77AF66DC1-seeklogo.com.png?v=637938245660000000" alt="rainy weather"
            style={{
              height: 50,
              width: 50
            }}
          />
        </div>
        <Container className='weather'>
          <div>
            {/* Main Component */}
            <Row>

              {/* paragraphs and button */}
              {/* If temperature is greater then 0 then print it with red, else print with blue :) */}
              {
                this.state.temperature > 0 ? <div className='text-center rounded bg-dark text-danger p-2'>
                  <p className='h4'>
                    Şu an sıcaklık: {this.state.temperature} derece.
                  </p>
                </div>
                  :
                  <div className='text-center rounded bg-dark text-primary p-2'>
                    <p className='h4'>
                      Şu an sıcaklık: {this.state.temperature} derece.
                    </p>
                  </div>
              }

              <div className='my-2 text-center'>
                <Button color="dark" className='text-danger mt-2' onClick={() => this.increaseTemperature()}>
                  Sıcaklık Arttır
                </Button>
                <Button color="dark" className='ms-5 text-primary mt-2' onClick={() => this.decreaseTemperature()}>
                  Sıcaklık Azalt
                </Button>
              </div>

              <div className='text-center mt-3 pt-3 rounded border-top'>
                <p className='h4 d-inline-flex p-1 text-white'>
                  3 Birimde Sıcaklık Ölçümü
                </p>
              </div>
            </Row>

            {/* Celsius, Fahrenheit, Kelvin Components */}
            <Row>
              <Col className="">
                <Celsius temperature={this.state.temperature} />
              </Col>
              <Col className="">
                <Fahrenheit temperature={this.state.temperature} />
              </Col>
              <Col className="">
                <Kelvin temperature={this.state.temperature} />
              </Col>
            </Row>
          </div>

        </Container>
      </div>
    );
  }
}

