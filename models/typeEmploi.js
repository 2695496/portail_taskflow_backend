import { connection } from "./connexion.js";

class TypeEmploi {
  static selectTypeEmplois() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM type_emploie", (error, results, fields) => {
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

  static insertTypeEmploi(nom) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO type_emploie (nom) VALUES (?)";
      const values = [nom];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted type_emploi with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateTypeEmploi(id, nom) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE type_emploie SET nom = ? WHERE id = ?";
      const values = [nom, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated type_emploi with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteTypeEmploi(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM type_emploie WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted type_emploi with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getTypeEmploiById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM type_emploie WHERE id=?", [id], (error, results, fields) => {
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

export { TypeEmploi };
