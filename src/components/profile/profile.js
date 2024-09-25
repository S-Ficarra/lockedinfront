import React, { useState, useEffect } from "react";
import NavBar from "../navbar/navbar";
import './profile.css'
import { userService } from "../../services/user.service";

function Profile () {

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
            <div className="profileContainer">
                <h1>Nom</h1>
                <h2>{user.name}</h2>

                <h1>Prénom</h1>
                <h2>{user.firstName}</h2>

                <h1>E-mail</h1>
                <h2>{user.email}</h2>

                <h1>Statut</h1>
                <h2>{user.role}</h2>
            </div>
        </>
    )
}

export default Profile;