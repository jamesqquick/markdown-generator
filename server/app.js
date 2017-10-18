const express = require('express');
const app = express();

const port = process.env.PORT | 3000;

//Add Public Directory
app.use(express.static(path.join(__dirname, 'public')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function(){
    console.log(`App listening on port ${port}`);
})