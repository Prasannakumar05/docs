import React from 'react'

import Details from './Details/Details'
import { SandBox } from './Editor/Sandbox'
import './home.css'

export default function Home() {
    return (
        <div>
            <div className="top">
                <p className='text-center heading'>React</p>
                <p className='text-center body'>A JavaScript library for building user interfaces</p>
                <center>
                    <button className='btn btn-primary'>Get Started</button>
                    <p className='text-center side-text'>Take the Tutorial </p>
                </center>
            </div>
            <Details />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm">
                        <span className='text-heading'>A Simple Component</span>
                        <br/>
                        <br/>
                        <p>React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.</p>
                        <span className='text-bold'>JSX is optional and not required to use React.</span> Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.
                    </div>
                    <div className="col-sm mt-3">
                        <SandBox />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm">
                        <span className='text-heading'>A Stateful Component</span>
                        <br/>
                        <br/>
                        <p>In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().</p>
                        
                    </div>
                    <div className="col-sm">
                        <SandBox />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm">
                        <span className='text-heading'>An Application</span>
                        <br/>
                        <br/>
                        <p>Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.</p>
                         </div>
                    <div className="col-sm">
                        <SandBox />
                    </div>
                </div>
            </div>

        </div>
    )
}
