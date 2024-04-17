
import logo from "./logo.svg";

import Songs from "./Songs.js";
import Playlist from "./Playlist.js";
import Nav from "./Nav.js";

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";



const Sinister = [
  {
    id: 1,
    title: "Verbatim",
    artist: "Mother Mother",
    genre: "Indie Rock",
  },
  {
    id: 2,
    title: "The Fall",
    artist: "half-alive",
    genre: "Indie Pop",
  },
  {
    id: 3,
    title: "Cradles",
    artist: "Sub Urban",
    genre: "Alternative Rock",
  },
];

const YOLO = [
  {
    id: 1,
    title: "Back in Black",
    artist: "AC/DC",
    genre: "Rock",
  },
  {
    id: 2,
    title: "Enter Sandman",
    artist: "Metallica",
    genre: "Heavy Metal",
  },
  {
    id: 3,
    title: "Free Bird",
    artist: "Lynyrd Skynyrd",
    genre: "Rock",
  },
];

const Neon = [
  {
    id: 1,
    title: "Don't Blame Me",
    artist: "Taylor Swift",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Judas",
    artist: "Lady Gaga",
    genre: "Pop",
  },
  {
    id: 3,
    title: "Disturbia",
    artist: "Rihanna",
    genre: "Pop",
  },
];

const tempPlaylist = [
  {
    id: 1,
    title: "All",
    songs: [...Sinister, ...YOLO, ...Neon]
  },
  {
    id: 2,
    title: "Sinister",
    songs: Sinister,
  },
  {
    id: 3,
    title: "YOLO",
    songs: YOLO,
  },
  {
    id: 4,
    title: "Neon",
    songs: Neon,
  },
];
export default function App() {
  const [musics, setMusic] = useState(YOLO);
  const [playlists, setPlaylists] = useState(tempPlaylist);
  const [title, setTitle] = useState("YOLO");

  const handlePlaylistClick = (playlistItem) => {
    setMusic(playlistItem.songs);
    setTitle(playlistItem.title);
  };
  

  const addToPlaylist = (selectedPlaylist, song) => {
    setPlaylists(prevPlaylists => prevPlaylists.map(playlist => {
      if (playlist.id === selectedPlaylist.id) {
        return {...playlist, songs: [...playlist.songs, song]};
      } else {
        return playlist;
      }
    }));
  };
  
  return (
    <div className="bg-black">
      <nav className="d-flex row">
        <Nav playlists={playlists} selectedPlaylist={title}></Nav>
      </nav>
      <br/>
      <br/>
      <br/>
      <div className="d-flex">
        <Songs className = "d-flex col-6" musics = {musics} title = {title} playlists = {playlists} addToPlaylist={addToPlaylist}> </Songs>
        <Playlist className = "d-flex col-6" playlist = {playlists} onClick={handlePlaylistClick}></Playlist>
        
      </div>
    </div>
  );
}
