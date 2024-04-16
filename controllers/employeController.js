import { Employe } from "../models/employe.js";

class EmployeController {
  static async getEmployes(request, response) {
    try {
      const employes = await Employe.selectEmployes();
      response.status(200).json(employes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting employes.");
    }
  }

  static async createEmploye(request, response) {
    const employeData = request.body;

    try {
      const result = await Employe.insertEmploye(employeData);
      response
        .status(201)
        .json({ message: "Employe created successfully.", id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating employe.");
    }
  }

  static async updateEmploye(request, response) {
    const { id } = request.params;
    const employeData = request.body;

    try {
      const result = await Employe.updateEmploye(id, employeData);
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Employe with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Employe updated successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating employe.");
    }
  }

  static async deleteEmploye(request, response) {
    const { id } = request.params;

    try {
      const result = await Employe.deleteEmploye(id);
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Employe with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Employe deleted successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting employe.");
    }
  }

  static async getEmployeById(request, response) {
    const { id } = request.params;

    try {
      const employe = await Employe.getEmployeById(id);
      if (!employe) {
        response
          .status(404)
          .json({ message: `Employe with ID ${id} not found.` });
      } else {
        response.status(200).json(employe);
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting employe.");
    }
  }
}

export { EmployeController };
