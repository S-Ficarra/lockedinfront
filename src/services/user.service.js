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

  
}