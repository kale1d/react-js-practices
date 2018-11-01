import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import LocationList from './components/LocationList'
import ForecastExtended from './components/ForecastExtended'

import './App.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe',
]

class App extends Component {
  constructor() {
    super();

    this.state = {
      city: null
    };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
  }
  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                  Weather App
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className="details">
                  {
                    city &&
                    <ForecastExtended
                      city={city}
                    />
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
