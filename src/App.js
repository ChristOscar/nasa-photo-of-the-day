import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import styled from 'styled-components';

//Nasa Folders
import { BASE_URL, API_KEY } from "./constants";
import Details from "./components/Details";
import Button from "./components/Button";
import CopyRight from './components/Copyright';
import Image from "./components/Image";

const Div = styled.div`
 background: #f5f1e6;
 margin-bottom: 0;
 `

function App() {
  const [data, setData] = useState([]);
  



  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
    console.log(res.data);
    setData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  return (
    <div className="App">
      <Div>
      <Image  photo={data.url} title={data.title}/>
      <Details title={data.title} explanation={data.explanation}/>
      </Div>
    </div>
  );
}

export default App;
