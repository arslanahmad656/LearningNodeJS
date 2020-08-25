const axios = require('axios');

axios.default.get('https://jsonplaceholder.typicode.com/posts/2')
    .then(res => console.log(res.data))
    .catch(err => console.log('ERROR'));