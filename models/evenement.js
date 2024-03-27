import { connection } from "./connexion.js";

class Evenement {
  static selectEvenements() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM evenement", (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Query results:", results);
          resolve(results);
        }
      });
    });
  }

  static insertEvenement(titre, date_evenement) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO evenement (titre, date_evenement, date_creation) VALUES (?, ?, NOW())";
      const values = [titre, date_evenement];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted evenement with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateEvenement(id, titre, date_evenement) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE evenement SET titre = ?, date_evenement = ? WHERE id = ?";
      const values = [titre, date_evenement, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated evenement with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteEvenement(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM evenement WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted evenement with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getEvenementById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM evenement WHERE id=?", [id], (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Query results:", results);
          resolve(results[0]);
        }
      });
    });
  }
}

export { Evenement };
