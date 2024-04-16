import { TypeEmploi } from "../models/typeEmploi.js";

class TypeEmploiController {
  static async getTypeEmplois(request, response) {
    try {
      const typeEmplois = await TypeEmploi.selectTypeEmplois();
      response.status(200).json(typeEmplois);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting type emplois.");
    }
  }

  static async createTypeEmploi(request, response) {
    const { nom } = request.body;

    try {
      const result = await TypeEmploi.insertTypeEmploi(nom);
      response
        .status(201)
        .json({ message: "Type emploi created successfully.", id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating type emploi.");
    }
  }

  static async updateTypeEmploi(request, response) {
    const { id } = request.params;
    const { nom } = request.body;

    try {
      const result = await TypeEmploi.updateTypeEmploi(id, nom);
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Type emploi with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Type emploi updated successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating type emploi.");
    }
  }

  static async deleteTypeEmploi(request, response) {
    const { id } = request.params;

    try {
      const result = await TypeEmploi.deleteTypeEmploi(id);
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Type emploi with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Type emploi deleted successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting type emploi.");
    }
  }

  static async getTypeEmploiById(request, response) {
    const { id } = request.params;

    try {
      const typeEmploi = await TypeEmploi.getTypeEmploiById(id);
      if (!typeEmploi) {
        response
          .status(404)
          .json({ message: `Type emploi with ID ${id} not found.` });
      } else {
        response.status(200).json(typeEmploi);
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting type emploi.");
    }
  }
}

export { TypeEmploiController };
