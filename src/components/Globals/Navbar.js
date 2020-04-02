import React, { Component } from 'react'
import { Link } from 'gatsby'
import brand from "../../images/brand.png"
import { GoCalendar } from "react-icons/go"
import NavbarIcons from "./NavbarIcons"



export default class Navbar extends Component {
    state = {
        navbarOpen: false,
        collapseState: 'collapse navbar-collapse',
        links: [
            {
                id: 1,
                path: '/',
                text: 'home'
            }, {
                id: 2,
                path: '/about',
                text: 'about'
            },
            {
                id: 3,
                path: '/menus',
                text: 'menu'
            },
            {
                id: 4,
                path: '/contact',
                text: 'contact'
            }
        ]

    }
    navbarHandler = () => {
        this.state.navbarOpen ? this.setState(
            { navbarOpen: false, collapseState: "collapse navbar-collapse" })
            : this.setState({
                navbarOpen: true,
                collapseState: "collapse navbar-collapse show"

            })

    };

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link to="/" className="navbar-brand">
                    <img width="70" height="50" src={brand} alt="brand" />
                    {/* logomakr.com/2KdHnz */}
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.navbarHandler} >
                    <span className="navbar-toggler-icon" />
                </button >
                <div className={this.state.collapseState}>
                    <ul className="navbar-nav mx-auto">
                        {
                            this.state.links.map(link => {
                                return (
                                    <li key={link.id} className="nav-item">
                                        <Link to={link.path} className="nav-link text-capitalize">{link.text}</Link>

                                    </li>
                                )
                            })
                        }
                        <li className="nav-item ml-sm-2 book">
                            <GoCalendar className="book-icon" />
                        </li>
                    </ul>
                    <NavbarIcons />
                </div>

            </nav>
        )
    }
}

