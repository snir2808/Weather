import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

export default function Header(props) {
    return (
        <div>
            <Link style={{textDecoration:'none'}} to ='/'><Button>home</Button></Link>
            <Link style={{textDecoration:'none'}} to ='/Favorites'><Button onClick={props.telAvivCallFunc}>favorites</Button></Link>
        </div>
    )
}
