import './../../../App.css';
import React, { Component } from 'react';
import Child1 from './../../../components/Child';
import Child2 from './../../../components/Child';
import ChildWithProps from './../../../components/ChildWithProps';
import ChildWithStateAndProps from './../../../components/ChildWithStateAndProps.js';
import LifeCycle from './../../../components/LifeCycle';
import ChildWithElements from './../../../components/ChildWithElements';
import Level1 from './../../../components/Level1';
import { UserProvider } from './../../../context/UserContext';
import ConsumerChild1 from './../../../components/ConsumerChild1';
import ChildWrapper1 from './../../../components/ChildWrapper1';
import ChildWrapper2 from './../../../components/ChildWrapper2';
import ConsumerChild2 from './../../../components/ConsumerChild2';
import FormSample from './../../../components/FormSample';
import FormSampleWithData from './../../../components/FormSampleWithData';
import ErrorBoundary from './../../../components/ErrorBoundary';


class BasicComponent extends Component {
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
    return <>
      {
        <>
          <h2>Section 1 : Rendering Child Components </h2>
          <div className='demo'>
            <p className='topic'><span className='cn'>&lt;Child&gt; Component</span> : Rendering Child components imported as Child1 and Child2</p>
            {
              <div className="demo">
                <Child1 someData="some data" />
              </div>
            }
            {
              <div className="demo">
                <Child2 />
              </div>
            }
            <p className='topic'><span className='cn'>&lt;ChildWithProps&gt; Component</span> : Rendering Child component that displays props passed to it</p>
            {
              <div className='demo'>
                <ChildWithProps someData="some data" moreData="more data given" />
              </div>
            }
            <p className='topic'><span className='cn'>&lt;ChildWithElements&gt; Component </span> : Rendering Child component having children</p>
            {

              <div className="demo">
                <ChildWithElements someData="some Data">
                  some text part written here
                  <p>children 1</p>
                  <p>children 2</p>
                  <p>children 3</p>
                  <h2>children 4</h2>
                </ChildWithElements>
              </div>

            }
            <p className='topic'><span className='cn'>&lt;ChildWithStateAndProps&gt; Component </span> : Rendering Child component that displays its state and props data</p>
            {
              <div className="demo">
                <ChildWithStateAndProps someData="some data" moreData="more data given" />
              </div>
            }

          </div>
        </>

      }

      {
        <>
          <h2>Section 2 : Lifecycle of a Component </h2>
          <div className='demo'>
            <p className='topic'><span className='cn'>&lt;LifeCycle&gt; Component </span> : See the order of messages in browser console</p>
            <p className='instruction'> Comment the code for other sections in App.js and refresh</p>
            <div className='demo'>
              {
                !this.state.unmount && <LifeCycle somedata={this.state.Appkey} />
              }
              {<div>
                <button onClick={() => this.setState({ Appkey: "some other value" })}>Update State of App Component</button>
                <button onClick={() => this.setState({ unmount: true })}>Unmount Lifecycle Component</button>
              </div>
              }
            </div>
          </div>
        </>
      }




      {
        <>
          <h2>Section 3 : Form Handling </h2>
          <div className="demo">
            <p className='topic'><span className='cn'>&lt;FormSample&gt; Component </span> : Rendering a simple Form </p>
            <p className='instruction'> Fill values in form and click on submit. The values will be displayed in browser console</p>
            <div className="demo">
              {
                <FormSample />
              }
            </div>
          </div>
        </>
      }
      {
        <>
          <h2>Form Sample with Data </h2>
          <div className="demo">
            {
              // <FormSampleWithData />
            }
          </div>
        </>
      }


      {
        <Level1 />
      }

      {<UserProvider value={this.state.user}>
        <ChildWrapper1>
          <ChildWrapper2>
            <ConsumerChild1 />

          </ChildWrapper2>
        </ChildWrapper1>
      </UserProvider>
      }
      <p></p>
      <p></p>
      {
        <UserProvider value={this.state.user}>
          <ChildWrapper1>
            <ChildWrapper2>
              <ConsumerChild2 />
            </ChildWrapper2>
          </ChildWrapper1>
        </UserProvider>
      }
    </>
  }
}

export default BasicComponent;
