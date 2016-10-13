import React from 'react'
import {Link} from 'react-router'
import {NavItem} from 'react-bootstrap'

export default (props) =>

        <NavItem><Link to={props.path}>{props.children}</Link></NavItem>



