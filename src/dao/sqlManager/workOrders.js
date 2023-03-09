import urbano from "../../connection/urbano.js";

export default class WorkOrders {
  constructor() {
    console.log("Working with urbano mysql");
  }

  getAll = async () => {
    try {
      return new Promise((resolve, reject) => {
        urbano.query("SELECT * FROM trabajos LIMIT 2", (error, results) => {
          if (error) reject(new Error(error));
          resolve(results);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  getPending = async (sector) => {};
  getMyWorkOrders = async (technical) => {};
  getInProcess = async () => {};
  getToDeliver = async () => {};
}
