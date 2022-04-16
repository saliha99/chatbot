const express = require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());

//in order to add routes to Express app, is pass to the file, the app variable.
require('./routes/dialogFlowRoutes')(app);

const PORT=process.env.PORT || 5000;
app.listen(PORT)