var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require('mongoose');
const cors = require("cors");
mongoose 
.connect(`mongodb+srv://admin:adminadmin@cluster0.zn07i.mongodb.net/waput?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=> console.log("Database connected"))
.catch((err) => console.log(err));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var gunsRouter = require("./routes/guns");
var gamesRouter = require("./routes/games");
var employeeRouter = require("./routes/employee");
var wizardRouter = require("./routes/wizard");
var itemRouter = require("./routes/item");
const monkeysRouter = require("./routes/monkeys");
const gamesplatformRouter = require("./routes/gamesplatform");
const playersRouter = require("./routes/players");
const booksRouter = require("./routes/books");
const vacuumcleanerRouter = require("./routes/vacuumcleaner");
const engineRouter = require("./routes/engine");
const seatsRouter = require("./routes/seats");
const lightsRouter = require("./routes/lights");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/api/guns", gunsRouter);
app.use("/api/games", gamesRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/wizard", wizardRouter);
app.use("/api/item", itemRouter);
app.use("/monkeys", monkeysRouter);
app.use("/gamesplatform", gamesplatformRouter);
app.use("/players", playersRouter);
app.use("/books", booksRouter);
app.use("/vacuumcleaner", vacuumcleanerRouter);
app.use("/engine", engineRouter);
app.use("/seats", seatsRouter);
app.use("/lights", lightsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
