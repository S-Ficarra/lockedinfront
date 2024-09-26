import { BASE_URL } from "../App";


export const emailService = {
  sendEmail: async (emailData) => {
    try {
      console.log(emailData);
      
            const response = await fetch(`${BASE_URL}/sendEmail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData), // Envoi des données formatées
      });

      if (response.ok) {
        return { success: true, message: "L'email a été envoyé avec succès !" };
      } else {
        return { success: false, message: "Erreur lors de l'envoi de l'email." };
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
      return { success: false, message: "Erreur lors de l'envoi de l'email." };
    }
  }
};
