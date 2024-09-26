import { BASE_URL } from "../App";

export const userService = {

    async fetchUser (userId) {
      const response = await fetch(`${BASE_URL}/users/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      
      return data
    },

    async bookLocker(data) {
      const response = await fetch(`${BASE_URL}/users/booklocker`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      if (!response.ok) {
          throw new Error('Erreur lors de la réservation du casier');
      }

      return await response.json(); // Retourne les données de réponse
  }


  
}