import React from 'react'

import './footer.css'
import logo from '../../Assets/download.png'



export default function Footer(){
        return (
            <div>
                <div className='footer-section1'>
                <center>
                    <button className='btn btn-primary'>Get Started</button>
                    <p className='text-center side-text'>Take the Tutorial </p>
                </center>
                </div>
                
                <footer>
                    <div className='footer-section'>
                        
                        <div>
                            <div className='footer-section3'>
                                <img src={logo} alt="" height="45px"/>
                                <p className='copyright'>Copyright © 2021 Meta Platforms, Inc.</p>
                            </div>
                        </div>
                        <div className='footer-section2'>
                            <div className='footer-style'>
                                <h3>DOCS</h3>
                                <a href="" className='link1'>Installation</a>
                                <a href="" className='link1'>Main Concepts</a>
                                <a href="" className='link1'>Advanced Guides</a>
                                <a href="" className='link1'>API Reference</a>
                                <a href="" className='link1'>Hooks</a>
                                <a href="" className='link1'>Testing</a>
                                <a href="" className='link1'>Contributing</a>
                                <a href="" className='link1'>FAQ</a>

                            </div>
                            <div className='footer-style'>
                                <h3>Channels</h3>
                                <a href="" className='link1'>GitHub <i class="fas fa-external-link-square-alt"></i></a>
                                <a href="" className='link1'>Stack Overflow <i class="fas fa-external-link-square-alt"></i></a>
                                <a href="" className='link1'>Discussion Forums <i class="fas fa-external-link-square-alt"></i></a>
                                <a href="" className='link1'>Reactiflux Chat <i class="fas fa-external-link-square-alt"></i></a>
                                <a href="" className='link1'>DEV Community <i class="fas fa-external-link-square-alt"></i></a>
                                <a href="" className='link1'>Facebook <i class="fas fa-external-link-square-alt"></i></a>
                                <a href="" className='link1'>Twitter <i class="fas fa-external-link-square-alt"></i></a>
                            </div>
                            <div className='footer-style'>
                                <h3>Community</h3>
                                <a href="" className='link1'>Code of Conduct <i class="fas fa-external-link-square-alt"></i></a>
                                <a href="" className='link1'>Community Resources</a>
                            </div>
                            <div className='footer-style'>
                                <h3>MORE</h3>
                                <a href="" className='link1'>Tutorial</a>
                                <a href="" className='link1'>Blog</a>
                                <a href="" className='link1'>Acknowledgements</a>
                                <a href="" className='link1'>React Native <i class="fas fa-external-link-square-alt"></i></a>
                                <a href="" className='link1'>Privacy <i class="fas fa-external-link-square-alt"></i></a>
                                <a href="" className='link1'>Terms <i class="fas fa-external-link-square-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }



