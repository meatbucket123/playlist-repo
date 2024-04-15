
import logo from "./logo.svg";

import Songs from "./Songs.js";
import Playlist from "./Playlist.js";
import Results from "./Results.js";
import Title from "./Title.js";

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";



const tempMusicData = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist A",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist B",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist C",
    genre: "Jazz",
  },
];

const tempPlaylist = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist A",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist B",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist C",
    genre: "Jazz",
  },
];
export default function App() {
  const [query, setQuery] = useState("");
  const [musics, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const addToPlaylist = (music) => {
    setPlaylist([...playlist, music]);
  };
  return (
    <div className="">
      <nav className="d-flex row">
        <Title></Title>
        <input
          className="search col"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Results className = "d-flex col-4"></Results>
      </nav>
      <div className="d-flex row">
        <Songs musics = {tempMusicData}></Songs>
        <Playlist playlist = {tempPlaylist}></Playlist>
        
      </div>
    </div>
  );
}
