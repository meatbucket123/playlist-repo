import './styles.css';

import { useState } from "react";

function Nav() {
    const [query, setQuery] = useState("");
    return (
        <>
        <h1 className="d-flex offset-5 col color-neongreen text-tron shadow-neongreen text-big">Tunify</h1>
        <input
          className="search placeholder-white align-self-center rounded-pill border-neongreen box-neongreen bg-transparent d-flex col-2"
          type="text"
          placeholder="Search songs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="d-flex col color-neongreen justify-content-center align-items-center">
            Found <strong>X</strong> results
        </p>
        </>
    )
}

export default Nav;