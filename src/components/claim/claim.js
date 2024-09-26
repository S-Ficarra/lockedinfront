import React, { useState } from "react";
import './claim.css';
import NavBar from "../navbar/navbar";
import { emailService } from "../../services/email.service";

function Claim() {
  // État pour stocker les valeurs des champs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    campus: "",
    locker: "",
    text: ""
  });

  // État pour gérer si l'envoi a réussi
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fonction pour mettre à jour l'état quand les champs changent
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Fonction pour envoyer le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Préparation des données à envoyer
    const emailData = {
      firstName: formData.firstname, // Prénom
      lastName: formData.name, // Nom
      campus: formData.campus, // Campus
      lockerNumber: formData.locker, // Casier concerné
      message: formData.text // Le message de l'utilisateur
    };

    // Appel du service d'envoi d'email
    const result = await emailService.sendEmail(emailData);

    // Gestion du retour du service
    if (result.success) {
      setIsSubmitted(true); // Met à jour l'état pour indiquer que le formulaire a été soumis avec succès
    } else {
      alert(result.message); // Gère le cas d'une erreur
    }
  };

  return (
    <>
      <NavBar />
      <div className="claimContainer">
        <h1>Contactez Nous</h1>
        {/* Si le formulaire est soumis avec succès, afficher le message de succès, sinon afficher le formulaire */}
        {isSubmitted ? (
          <div className="successMessage">
            <h2>Votre demande a été envoyée avec succès</h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Votre nom</label>
            <input id="name" type="text" required value={formData.name} onChange={handleChange} />

            <label htmlFor="firstname">Votre prénom</label>
            <input id="firstname" type="text" required value={formData.firstname} onChange={handleChange} />

            <label htmlFor="campus">Campus</label>
            <input id="campus" type="text" required value={formData.campus} onChange={handleChange} />

            <label htmlFor="locker">Casier concerné</label>
            <input id="locker" type="text" required value={formData.locker} onChange={handleChange} />

            <label htmlFor="text">Votre message</label>
            <input id="text" type="text" required value={formData.text} onChange={handleChange} />

            <button type="submit">Envoyer</button>
          </form>
        )}
      </div>
    </>
  );
}

export default Claim;
