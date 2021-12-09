import React, { useState } from 'react';
import styled from 'styled-components';

const Click = styled.button`
border-radius: 8px;
width: 250px;
background: #67819e;
color: #ffba08;
font-size: 2rem;
font-family: 'Orbitron', sans-serif;
padding: 7%;
margin-bottom: 3%;
`

export default function Button (props) {
    const{ title, photo } = props;
    const [toggle, setToggle] = useState(false);
    const showPic = () => setToggle(!toggle);

    return (
        <div class='click'>
        <Click onClick={showPic}>{!toggle ? 'Open' : 'Close' }</Click>
        {toggle && <img src={photo} alt={title}/>}
        </div>
    )
} 