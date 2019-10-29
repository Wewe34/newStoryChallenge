import React, {Component} from 'react'
import {Link} from "react-router-dom"

class Nav extends Component {
    render () {
        return (
                <div className="nav">
                        <Link to="/"><button className="latest">Latest</button></Link>
                        <Link to="/search"><button className="search">Search</button></Link>
                </div>

        )
    }
}

export default Nav;