import React from "react";
import './claim.css'
import NavBar from "../navbar/navbar";

function Claim () {

    return (
        <>
            <NavBar />
            <div className="claimContainer">
                <h1>Contactez Nous</h1>
                <form>
                    <label htmlFor="name">Votre nom</label>
                    <input  id="name" type="text" required ></input>

                    <label htmlFor="firstname">Votre prénom</label>
                    <input  id="firstname" type="text" required ></input>

                    <label htmlFor="campus">Campus</label>
                    <input  id="campus" type="text" required ></input>

                    <label htmlFor="locker">Casier concerné</label>
                    <input  id="locker" type="text" required ></input>

                    <label htmlFor="text">Votre message</label>
                    <input  id="text" type="text" required ></input>
                    
                    <button>Envoyer</button>
                </form>
            </div>
        </>
    )
}

export default Claim;