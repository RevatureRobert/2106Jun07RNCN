const express = require('express');
const app = express();

//*app.get();      //Read Information
//*app.post();     //Create Information
//*app.put();      //Update Information
//*app.delete();   //Delete Information

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => console.log("Listening on port 3000..."))