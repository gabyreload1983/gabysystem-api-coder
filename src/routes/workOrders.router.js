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

router.get("/:nrocompro", async (req, res) => {
  try {
    const { nrocompro } = req.params;
    const result = await workOrdersManager.getWorkOrder(nrocompro);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.get("/pending/:sector", async (req, res) => {
  try {
    let { sector } = req.params;
    sector = sector.toLowerCase();
    const result = await workOrdersManager.getPending(sector);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.get("/technical/:technical", async (req, res) => {
  try {
    let { technical } = req.params;
    technical = technical.toLowerCase();
    const result = await workOrdersManager.getMyWorkOrders(technical);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

export default router;
