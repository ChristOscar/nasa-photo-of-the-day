import React from 'react';
import styled from 'styled-components';

const bottom = styled.p`
background: linear-gradient(#03071e, #ffba08);
margin:0;
color: #ffba08;
font-family:'Orbitron', sans-serif;
padding-bottom: 8%;
`


export default function CopyRight (props){

    return (
        <footer>
           <bottom> {props.copyright} &copy;</bottom>
        </footer>
    )
} 