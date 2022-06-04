import axios from 'axios'
import React from 'react'




  
  export const getCoffeaction = (dispatch) => {
    axios.get('https://isko88.github.io/coffee.json')
  .then(res=>console.log(res))
  
  }
  