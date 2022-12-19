const express = require("express");
const morgan = require("morgan");

const donorRouter = require("./routes/donorRoutes");
const distributorRouter = require("./routes/distributorRoutes");
const factory = require("./controllers/handlerFactory");
const notifController = require("./controllers/notifController");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

// Development Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  app.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Headers',"*");
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
  app.options('*', (req,res)=>{
    res.status(200).send();
  })
}
app.use(express.json());

// Routes
app.use("/api/donor", donorRouter);
app.use("/api/distributor", distributorRouter);
app.post("/api/checkExist", factory.checkUserExist);
app.post("/api/notifyUpdate", notifController.receiveUpdate);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
