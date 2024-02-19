const app = require('./app');

// En el puerto decido que escoja el servidor y en caso de que esto no sea asi que elija el 3000 
const port = process.env.PORT || 3000;


const mongoose = require('mongoose');
const atlasUri = "mongodb+srv://bartu:bartu@cluster0.xqsv0re.mongodb.net/BartuDB?retryWrites=true&w=majority";

mongoose.connect(atlasUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Llamo al puerto 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});