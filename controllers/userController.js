import AuthUtils from "../auth/auth.js";
import { Utilisateur } from "../models/utilisateur.js";

class UserController {
  static async getUser(request, response) {
    try {
      const users = await Utilisateur.selectUsers();
      response.status(200).json(users);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting evenements.");
    }
  }

  static async createUser(request, response) {
    const { employe_id, password } = request.body;

    try {
      const result = await Utilisateur.createUser(employe_id, password);
      response
        .status(201)
        .json({ message: "User created successfully.", id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating user.");
    }
  }

  static async getUserById(request, response) {
    const { id } = request.params;

    try {
      const user = await Utilisateur.getUserById(id);
      if (!user) {
        response
          .status(404)
          .json({ message: `User with ID ${id} not found.` });
      } else {
        response.status(200).json(user);
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting user.");
    }
  }

  static async updateUser(request, response) {
    const { id } = request.params;
    const { password } = request.body;

    try {
      await Utilisateur.updateUser(id, password);
      response.status(200).json({ message: "User updated successfully." });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating user.");
    }
  }

  static async deleteUser(request, response) {
    const { id } = request.params;

    try {
      await Utilisateur.deleteUser(id);
      response.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting user.");
    }
  }

  static async getUserByMatriculeAndPassword(request, response) {
    const { matricule, password } = request.body;

    try {
      const user = await Utilisateur.getUserByMatriculeAndPassword(matricule, password);
      if (!user) {
        response
          .status(404)
          .json({ message: `User with matricule ${matricule} and provided password not found.` });
      } else {
        
        response.status(200).json({token: AuthUtils.generateToken(user)});
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting user.");
    }
  }
}

export { UserController };
