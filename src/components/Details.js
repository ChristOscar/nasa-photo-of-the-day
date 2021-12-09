import React from 'react';
 import styled from 'styled-components';

 const Exp = styled.p `
 font-family: 'Oxygen', sans-serif;
 color: #ffba08;
 font-size: 1.8rem;
 line-height: 200%;
 letter-spacing:.5rem;
 `
 const Title = styled.h1`
 color: #ffba08;
 font-size: 3rem;
 font-family: 'Oxygen', sans-serif;

 margin: 0;
 grid-column: 1;
 grid-row: 1;
 z-index: 1;
 text-transform: uppercase;
 animation: glow 2s ease-in-out infinite alternate;
 text-align: center;


 
 
 `

 const Dtail = styled.div`
 display: flex;
 height: 100%;
 width: 85%;
 margin: 0 auto;
 
 `

 export default function Details (props) {

     return (
         <div class='bod'>
         <Dtail>
             
             {/* <Title>{props.title}</Title> */}
             <h1>{props.date}</h1>
             
         </Dtail>
         <Exp>{props.explanation}</Exp>
         </div>
     )
 } 