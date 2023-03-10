import { Router } from "express";
import WorkOrders from "./../dao/sqlManager/workOrders.js";

const workOrdersManager = new WorkOrders();
const router = Router();

// get
router.get("/all", async (req, res) => {
  try {
    const result = await workOrdersManager.getAll();
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

router.get("/in-process", async (req, res) => {
  try {
    const result = await workOrdersManager.getInProcess();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.get("/to-deliver/:quantity/:time", async (req, res) => {
  try {
    const { quantity, time } = req.params;
    const result = await workOrdersManager.getToDeliver(quantity, time);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.get("/nrocompro/:nrocompro", async (req, res) => {
  try {
    const { nrocompro } = req.params;
    const result = await workOrdersManager.getWorkOrder(nrocompro);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

// patch
router.patch("/take/:nrocompro/technical/:technical", async (req, res) => {
  try {
    const { nrocompro, technical } = req.params;
    const result = await workOrdersManager.take(
      nrocompro,
      technical.toUpperCase()
    );
    res.send(result);
  } catch (error) {}
});

export default router;
