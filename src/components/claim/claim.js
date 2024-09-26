import React, { useState } from "react";
import './claim.css';
import NavBar from "../navbar/navbar";
import BASE_URL from '../../App'

function Claim() {
  // État pour stocker les valeurs des champs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    campus: "",
    locker: "",
    text: ""
  });

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

    try {
      const response = await fetch(`${BASE_URL}/mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Le formulaire a été envoyé avec succès !");
      } else {
        alert("Erreur lors de l'envoi du formulaire.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
      alert("Erreur lors de l'envoi du formulaire.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="claimContainer">
        <h1>Contactez Nous</h1>
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
      </div>
    </>
  );
}

export default Claim;
