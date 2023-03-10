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

  getPending = async (sector) => {
    try {
      const query = `SELECT * FROM trabajos WHERE  codiart = '.${sector}' AND estado = 21 AND codigo != 'ANULADO' ORDER BY prioridad DESC`;
      return await this.#getFromUrbano(query);
    } catch (error) {
      console.log(error);
    }
  };

  getMyWorkOrders = async (technical) => {
    try {
      const query = `SELECT * FROM trabajos WHERE tecnico='${technical}' AND estado = 22 AND codigo != 'ANULADO' ORDER BY prioridad DESC`;
      return await this.#getFromUrbano(query);
    } catch (error) {
      console.log(error);
    }
  };
  getInProcess = async () => {
    try {
      const query = `SELECT * FROM trabajos WHERE estado = 22 ORDER BY tecnico`;
      return await this.#getFromUrbano(query);
    } catch (error) {
      console.log(error);
    }
  };
  getToDeliver = async (quantity = 1, time = "YEAR") => {
    try {
      const query = `
      SELECT * FROM trabajos WHERE ingresado BETWEEN DATE_ADD(NOW(),INTERVAL - ${quantity} ${time}) AND NOW() AND
      codigo != 'ANULADO' AND estado = 23  AND ubicacion = 21 ORDER BY ingresado DESC`;
      return await this.#getFromUrbano(query);
    } catch (error) {
      console.log(error);
    }
  };

  take = async (nrocompro, technical) => {
    try {
      const query = `UPDATE trabajos SET estado=22, tecnico ='${technical}' WHERE nrocompro ='${nrocompro}'`;
      return await this.#getFromUrbano(query);
    } catch (error) {
      console.log(error);
    }
  };
}
