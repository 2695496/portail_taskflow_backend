import { connection } from "./connexion.js";

class Utilisateur {
    static selectUsers() {
        return new Promise((resolve, reject) => {
          connection.query("SELECT * FROM utilisateur", (error, results, fields) => {
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
  static createUser(employeeId, password) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO utilisateur (employe_id, mot_de_passe, date_creation) VALUES (?, ?, NOW())";
      const values = [employeeId, password];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Utilisateur inséré avec l'identifiant :", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static getUserById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM utilisateur WHERE id=?", [id], (error, results, fields) => {
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

  static updateUser(id, password) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE utilisateur SET mot_de_passe = ? WHERE id = ?";
      const values = [password, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Utilisateur mis à jour avec l'identifiant :", id);
          resolve(results);
        }
      });
    });
  }

  static deleteUser(id) {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM utilisateur WHERE id = ?", [id], (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Utilisateur supprimé avec l'identifiant :", id);
          resolve(results);
        }
      });
    });
  }

  static getUserByMatricule(matricule) {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT employe.*, utilisateur.*
        FROM employe
        INNER JOIN utilisateur ON employe.id = utilisateur.employe_id
        WHERE employe.matricule = ?;
      `;
      connection.query(query, [matricule], (error, results, fields) => {
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
  
  static getUserByMatriculeAndPassword(matricule, password) {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT e.prenom, u.id AS id_utilisateur, e.nom, e.fonction_id, e.photo_profil, e.id AS id_employe
        FROM utilisateur u
        JOIN employe e ON u.employe_id = e.id
        WHERE e.matricule = ? AND u.mot_de_passe = ?;
      `;
      const values = [matricule, password];
      connection.query(query, values, (error, results, fields) => {
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

export { Utilisateur };
