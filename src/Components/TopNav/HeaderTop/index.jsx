import React from 'react'
import { Link } from 'react-router-dom'

import routes from 'Utilities/routes'

const HeaderTop = () => (
    <div className='top_menu row m0'>
    <div className="container-fluid">
        <div className="float-left">
            <p>Call Us: 012 44 5698 7456 896</p>
        </div>
        <div className="float-right">
            <ul className="right_side">
                <li>
                    <Link to={routes.home}>
                        Login/Register
                    </Link>
                </li>
                <li>
                    <Link to={routes.account}>
                        My Account
                    </Link>
                </li>
                <li>
                    <Link to={routes.contact}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</div>
)

export default HeaderTop