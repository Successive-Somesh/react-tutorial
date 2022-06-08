import './App.css';
import React, { Component } from 'react';
import Child1 from './components/Child';
import Child2 from './components/Child';
import ChildWithProps from './components/ChildWithProps';
import ChildWithStateAndProps from './components/ChildWithStateAndProps.js';
import LifeCycle from './components/LifeCycle';
import ChildWithElements from './components/ChildWithElements';
import Level1 from './components/Level1';
import { UserProvider } from './context/UserContext';
import ConsumerChild1 from './components/ConsumerChild1';
import ChildWrapper1 from './components/ChildWrapper1';
import ChildWrapper2 from './components/ChildWrapper2';
import ConsumerChild2 from './components/ConsumerChild2';
import FormSample from './components/FormSample';
import FormSampleWithData from './components/FormSampleWithData';
import ErrorBoundary from './components/ErrorBoundary';
import BasicComponentFC from './modules/m1/pages/BasicComponentFC';
import BasicComponent from './modules/m1/pages/BasicComponent';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import M1Home from './modules/m1/M1Home';
import M2Home from './modules/m2/M2Home';
import M3Home from './modules/m3/M3Home';
import Child from './components/Child';
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import Footer from './Layout/Footer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Appkey: "App Value 1",
      unmount: false,
      user: { name: "Somesh", org: "ST" }
    }
    //console.log(this);

  }


  render() {
    return (
      <BrowserRouter>
        <Header className="header"/>
        <div className='container'>
        <Sidebar className='sidebar'/>

        <section className='main' style={{height:'100vh'}}>
          <Routes>
            <Route path="/" element={<Child />} />
            <Route path="m1" element={<M1Home />}>
              <Route path="child" element={<Child />} ></Route>
              <Route path="childwithprops" element={<ChildWithProps someData="some data" moreData="more data"/>} ></Route>
              <Route path="childwithpropsandstate" element={<ChildWithStateAndProps />} ></Route>
              <Route path="lifecycle" element={<LifeCycle />} ></Route>
            </Route>
            <Route path='m2' element={<M2Home />}></Route>
            <Route path="m3" element={<M3Home />}></Route>
            <Route path="*" element={<M1Home />} ></Route>
          </Routes>
        </section>
        </div>
        <Footer className="footer"/>
      </BrowserRouter>
    );

  }

}
export default App;
