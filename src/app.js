import express from "express";
import workOrdersRouter from "./routes/workOrders.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/work-orders", workOrdersRouter);

const PORT = process.PORT || 4444;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
