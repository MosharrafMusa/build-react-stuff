import React, { Component } from 'react'
import propTypes from 'prop-types'

export class Navbar extends Component {
    static deafultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    }
    static propTypes ={
        title : propTypes.string.isRequired
    }

    render() {
        return (
            <nav className='navbar bg-primary'>
            <h1>
            <i className = {this.props.icon} /> {this.props.title}</h1> 
            </nav>
        )
    }
}

export default Navbar