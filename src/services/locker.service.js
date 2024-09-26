import { BASE_URL } from "../App";

export const lockerService = {

    async fetchAvailableLockers () {
      
      const response = await fetch(`${BASE_URL}/locker/available`);
      const data = await response.json();

    
      return data
    },

  
}