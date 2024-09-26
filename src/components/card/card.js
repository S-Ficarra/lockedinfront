import React, { useState, useEffect } from "react";
import './card.css'
import NavBar from "../navbar/navbar";
import { userService } from "../../services/user.service";
import CardImg from '../../assets/EPSI CARD.png'

function Card () {

    const userId = 1;

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchUser = async () => {
          try {
            setIsLoading(true);  // Démarre le chargement
            const fetchedUser = await userService.fetchUser(userId);
            setUser(fetchedUser);
          } catch (err) {
            console.error('Error fetching user:', err);
            setError('Failed to load user data');
          } finally {
            setIsLoading(false);  // Arrête le chargement après la requête
          }
        };
        fetchUser();
      }, [userId]);
    
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>{error}</div>; 

    return (
        <>
            <NavBar />
            <h1 className="cardh1">Ma carte EPSI</h1>
            <div className="cardcontainer">
                <img src={CardImg} />
                <h2>Clé NFC : {user.nfcKey}</h2>
            </div>
        </>
    )
}

export default Card