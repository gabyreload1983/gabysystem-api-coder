import { Router } from "express";
import WorkOrders from "./../dao/sqlManager/workOrders.js";

const workOrdersManager = new WorkOrders();
const router = Router();

router.get("/all", async (req, res) => {
  try {
    const result = await workOrdersManager.getAll();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

export default router;
