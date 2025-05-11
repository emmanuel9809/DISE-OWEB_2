const express = require('express');
path = require('path');
routes = require("./routes/routes");

const app = express();
const port = 3024;
//sirve para archivos estaticos en css, img, etc.
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});

