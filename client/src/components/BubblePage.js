import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = props => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then(res => {
      setColorList(res.data);
      console.log(colorList)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={props.updateColors} />
      <Bubbles colors={colorList}  />
    </>
  );
};

export default BubblePage;

