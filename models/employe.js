import { connection } from "./connexion.js";

class Employe {
  static selectEmployes() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM employe", (error, results, fields) => {
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

  static insertEmploye(employeData) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO employe SET ?";
      connection.query(query, employeData, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted employe with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateEmploye(id, employeData) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE employe SET ? WHERE id = ?";
      connection.query(query, [employeData, id], (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated employe with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteEmploye(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM employe WHERE id = ?";
      connection.query(query, id, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted employe with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getEmployeById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM employe WHERE id=?", [id], (error, results, fields) => {
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

export { Employe };
