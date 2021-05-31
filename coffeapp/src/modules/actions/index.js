import axios from 'axios'

axios.get('https://isko88.github.io/coffee.json')
  .then(function (response) {
    
    console.log(response);
  })
  .catch(function (error) {
  
    console.log(error);
  })