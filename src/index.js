const express = require("express");
const path = require("path");
const app = express();

//configuracion sv
app.set("port", 3000);
app.set("views", path.join(__dirname + "/views"));
app.engine("html", require("ejs").renderFile);
//middlewares

//rotas del sv
app.use(require("./routes/index"));
//archivos estaticos
app.use(express.static(path.join(__dirname + "/public")));

//escucha de sv
app.listen(app.get("port"), () => {
	console.log("server on port", app.get("port"));
});
