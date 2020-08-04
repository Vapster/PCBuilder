import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import PCBuilder from './containers/PCBuilder/PCBuilder';

class App extends Component{

  render(){
    return(
      <Layout>
        <PCBuilder/>
      </Layout>
    );
  }
}

export default App;