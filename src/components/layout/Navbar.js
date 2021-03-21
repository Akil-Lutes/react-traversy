import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {
    // these props are passed if I don't explicitly pass props with (this is an object)
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    }

    // These are static proptypes I can pass in the main App.js file.
    static propTypes =  {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

    render() {
        return (
            // I am using a bg class from the App.css
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={this.props.icon}/> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
