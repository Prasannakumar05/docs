import React,{Component} from 'react'
import { Link } from 'react-router-dom'

import './navBar.css'
import logo from '../../Assets/logo192.png'


class NavBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             clicked: false
        }
    }
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
   
    render() {
        
        return (
            <div>
               <nav>
               <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                   <div className="nav-left">
                   <img src={logo} className="logo" alt="logo" height='20'/>
                    <h3 className='logo-text'>React</h3> 
                   </div>
                   <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} onClick={this.handleClick}>
                       <li>Docs</li>
                       <li>Tutorial</li>
                       <li>Blog</li>
                       <li>Community</li>
                   </ul>
                   <div className="nav-right">
                       <div className="search-container">
                                <i class="fas fa-search"></i>
                                <input type="text" className='input-with-logo'  placeholder='search'/>
                                
                        </div>
                        <a href="">v17.0.2</a>
                               
                               <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>
                                <a href="">Launguages</a>
                                <a href="">Github  <i class="fas fa-external-link-square-alt"></i></a>
                   </div>
               </nav>
            </div>
        )
    }
}

export default NavBar
