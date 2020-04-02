import React, { Component } from 'react'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default class NavbarIcons extends Component {
    state = {
        icons: [
            {
                id: 1,
                icon: <FaFacebook className="icon" />,
                path: 'https://www.facebook.com'
            },
            {
                id: 2,
                icon: <FaTwitter className="icon" />,
                path: 'https://www.twitter.com'
            },
            {
                id: 3,
                icon: <FaInstagram className="icon" />,
                path: 'https://www.instagram.com'
            },
        ]
    }
    render() {
        return (
            <div>
                {

                    this.state.icons.map(item => {
                        return (
                            <a
                                className="ml-sm-0.1 btn-floating btn-lg social-icon"
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ cursor: 'pointer' }}
                                href={item.path}
                                key={item.id}>{item.icon}</a>
                        )
                    })
                }
            </div>
        )
    }
}
