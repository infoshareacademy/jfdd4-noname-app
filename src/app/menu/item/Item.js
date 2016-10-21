import React from 'react'
import {Link} from 'react-router'
import './Item.css';

export default (props) =>

    <li className="App-Menu-Item">
        <Link to={props.path}
              activeClassName="active"
              onlyActiveOnIndex={props.activeWhenMatchingExactly}>
            {props.children}
        </Link>
    </li>



