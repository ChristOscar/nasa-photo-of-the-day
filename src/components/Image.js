import React from 'react';
 import styled from 'styled-components';
 import Button from './Button'

 const Head = styled.header`
 background: #f5f1e6;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 font-size: 1.5rem;
 font-family: 'Orbitron', sans-serif;
 color: #03071e;
 margin: 0;
 z-index: 1000;
 position: sticky;
 top: 0;
 `
 const Title = styled.h1`
 color: #ffba08;
 font-size: 2.5rem;
 font-family: 'Oxygen', sans-serif;

 margin: 2;
 grid-column: 1;
 grid-row: 1;
 z-index: 1;
 text-transform: uppercase;
 
 text-align: center;
 
 `


 export default function Image (props) {

     return(
         <Head>
             <Title> {props.title}</Title>
             <Button photo={props.photo} title={props.title}/>
         </Head>
     )
 } 