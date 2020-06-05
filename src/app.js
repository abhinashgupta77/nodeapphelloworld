const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000; 
const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));

app.get('/json', (req,res) => {
    res.send([{
        name: 'Daily coding web',
    }])
})

app.listen(port, () => {
    console.log('server is running on port ' + port)
})