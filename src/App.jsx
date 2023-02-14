import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

export default function App() {
  const[joueur1,jouer1]=useState(0)
  const[joueur2,jouer2]=useState(0)
  return (
    <div className="App">
      <h1>Chifoumi </h1>
      <div className="joueur1">
        <p>Joueur 1</p>
        <button onClick={()=> jouer1("papier") }>
        Papier
        </button>
        <button onClick={()=> jouer1("feuille")}>
        Feuille
        </button>
        <button onClick={()=> jouer1("ciseaux")}>
        Ciseaux
        </button>
        <div id="valuejoueur1">
        </div>
      </div>
      <br />
      <div className="joueur2">
        <p>Joueur 2</p>
        <button onClick={()=> jouer2("papier")}>
        Papier
        </button>
        <button onClick={()=> jouer2("feuille")}>
        Feuille
        </button>
        <button onClick={()=> jouer2("ciseaux")}>
        Ciseaux
        </button>
        <div id="valuejoueur2">
        </div>
      </div>
      <div id="resultat">
      {(joueur1 && joueur2?(joueur1 === joueur2 ? 'égalité' : 'match' ): '')}
        </div>
    </div>
  )
}
