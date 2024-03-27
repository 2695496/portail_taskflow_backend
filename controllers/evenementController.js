import { Evenement } from "../models/evenement.js";

class EvenementController {
  static async getEvenements(request, response) {
    try {
      const evenements = await Evenement.selectEvenements();
      response.status(200).json(evenements);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting evenements.");
    }
  }

  static async createEvenement(request, response) {
    const { titre, date_evenement } = request.body;

    try {
      const result = await Evenement.insertEvenement(
        titre,
        date_evenement
      );
      response
        .status(201)
        .json({ message: "Evenement created successfully.", id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating evenement.");
    }
  }

  static async updateEvenement(request, response) {
    const { id } = request.params;
    const { titre, date_evenement } = request.body;

    try {
      const result = await Evenement.updateEvenement(
        id,
        titre,
        date_evenement
      );
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Evenement with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Evenement updated successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating evenement.");
    }
  }

  static async deleteEvenement(request, response) {
    const { id } = request.params;

    try {
      const result = await Evenement.deleteEvenement(id);
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Evenement with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Evenement deleted successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting evenement.");
    }
  }

  static async getEvenementById(request, response) {
    const { id } = request.params;

    try {
      const evenement = await Evenement.getEvenementById(id);
      if (!evenement) {
        response
          .status(404)
          .json({ message: `Evenement with ID ${id} not found.` });
      } else {
        response.status(200).json(evenement);
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting evenement.");
    }
  }
}

export { EvenementController };
