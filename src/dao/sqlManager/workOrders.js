import urbano from "../../connection/urbano.js";

export default class WorkOrders {
  constructor() {
    console.log("Working with urbano mysql");
  }

  #getFromUrbano = (query) => {
    return new Promise((resolve, reject) => {
      urbano.query(query, (error, result) => {
        if (error) {
          reject(new Error(error));
        } else {
          resolve(result);
        }
      });
    });
  };

  getAll = async () => {
    try {
      const query = "SELECT * FROM trabajos LIMIT 2";
      return await this.#getFromUrbano(query);
    } catch (error) {
      console.log(error);
    }
  };

  getWorkOrder = async (nrocompro) => {
    try {
      const query = `SELECT * FROM trabajos WHERE nrocompro = '${nrocompro}'`;
      return await this.#getFromUrbano(query);
    } catch (error) {
      console.log(error);
    }
  };

  getPending = async (sector) => {};
  getMyWorkOrders = async (technical) => {};
  getInProcess = async () => {};
  getToDeliver = async () => {};
}
