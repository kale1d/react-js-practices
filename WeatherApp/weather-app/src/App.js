import React, { Component } from 'react';
import { Grid, row, Col } from 'react-flexbox-grid';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import LocationList from './components/LocationList'

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
  
  handleSelectedLocation = city => {
    console.log('handleSelectedLocation');
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <LocationList
            cities={cities}
            onSelectedLocation={this.handleSelectedLocation}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
