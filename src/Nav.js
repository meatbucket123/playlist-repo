import './styles.css';

import { useState, useRef } from "react";

function Nav({ playlists, selectedPlaylist }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const searchTimeout = useRef(null);

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
    
        if (searchTimeout.current) {
            clearTimeout(searchTimeout.current);
        }
    
        searchTimeout.current = setTimeout(() => {
            if (value.trim() === "") {
                setResults([]);
            } else if (selectedPlaylist) {
                const songs = playlists.find(playlist => playlist.title === selectedPlaylist).songs;
                const filteredSongs = songs.filter(song => song.title.toLowerCase().startsWith(value.toLowerCase()));
                setResults(filteredSongs);
            }
        }, 500);
    };

    return (
        <div className='d-flex bg-nav'>
        <h1 className="d-flex align-self-center offset-5 col color-neongreen text-tron shadow-neongreen text-big">Tunify</h1>
        <input
        className="ps-2 search color-neongreen shadow-neongreen placeholder-white align-self-center rounded-pill border-neongreen box-neongreen bg-transparent d-flex col-2"
        type="text"
        placeholder="Search songs..."
        value={query}
        onChange={handleSearch}
        />
        {query && (
            <p className="d-flex col color-neongreen justify-content-center align-items-center">
                Found <strong>{results.length}</strong> results
            </p>
        )}
        <ul className='d-flex flex-column col'>
            {results.map((song, index) => (
                <li className='color-neongreen shadow-neongreen' key={index}>
                    {song.title} by {song.artist} ({song.genre})
                </li>
            ))}
        </ul>
    </div>
    )
}

export default Nav;