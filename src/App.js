import React, { useState } from 'react';
import Songs from './Songs.js';
import Playlist from './Playlist.js';
import Nav from './Nav.js';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sexy = [
  {
    id: 1,
    title: 'PONY',
    artist: 'Ginuwine',
    genre: 'SEX SONGS',
  },
  {
    id: 2,
    title: 'The Fall (Minecraft Parody)',
    artist: 'CaptainSparklez',
    genre: 'Indian Pop',
  },
  {
    id: 3,
    title: 'Cradles',
    artist: 'Sub Urban',
    genre: 'Alternative Rock',
  },
];

const Sexier = [
  {
    id: 1,
    title: 'Back in Black',
    artist: 'AC/DC',
    genre: 'Rock',
  },
  {
    id: 2,
    title: 'Enter Sandman',
    artist: 'Metallica',
    genre: 'Heavy Metal',
  },
  {
    id: 3,
    title: 'Free Bird',
    artist: 'Lynyrd Skynyrd',
    genre: 'Rock',
  },
];

const Sexiest = [
  {
    id: 1,
    title: "Don't Blame Me",
    artist: 'Taylor Swift',
    genre: 'Pop',
  },
  {
    id: 2,
    title: 'Judas',
    artist: 'Lady Gaga',
    genre: 'Pop',
  },
  {
    id: 3,
    title: 'Disturbia',
    artist: 'Rihanna',
    genre: 'Pop',
  },
];

const tempPlaylist = [
  {
    id: 1,
    title: 'All',
    songs: [...Sexy, ...Sexier, ...Sexiest],
  },
  {
    id: 2,
    title: 'Sexy',
    songs: Sexy,
  },
  {
    id: 3,
    title: 'Sexier',
    songs: Sexier,
  },
  {
    id: 4,
    title: 'Sexiest',
    songs: Sexiest,
  },
];

export default function App() {
  const [musics, setMusic] = useState(Sexy);
  const [playlists, setPlaylists] = useState(tempPlaylist);
  const [title, setTitle] = useState('Sexy');
  const [newPlaylistTitle, setNewPlaylistTitle] = useState('');

  const handlePlaylistClick = (playlistItem) => {
    setMusic(playlistItem.songs);
    setTitle(playlistItem.title);
  };
  const removeFromPlaylist = (playlist, songToRemove) => {
    if (!playlist || !playlist.songs || !Array.isArray(playlist.songs)) {
      console.error('Invalid playlist or songs array');
      return;
    }
  
    // Filter out the song to remove from the playlist
    const updatedSongs = playlist.songs.filter((song) => song.id !== songToRemove.id);
    // Update the playlist with the updated songs
    const updatedPlaylist = { ...playlist, songs: updatedSongs };
    // Update the playlists state
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((pl) => (pl.id === updatedPlaylist.id ? updatedPlaylist : pl))
    );
  };
  
  

  const addToPlaylist = (selectedPlaylist, song) => {
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist) => {
        if (playlist.id === selectedPlaylist.id) {
          return { ...playlist, songs: [...playlist.songs, song] };
        } else {
          return playlist;
        }
      })
    );
  };

  const handleNewPlaylistSubmit = (e) => {
    e.preventDefault();
    const newPlaylist = {
      id: playlists.length + 1,
      title: newPlaylistTitle,
      songs: [],
    };
    setPlaylists([...playlists, newPlaylist]);
    setNewPlaylistTitle(''); // Clear the input field after adding the playlist
  };

  return (
    <div className="bg-black">
      <nav className="d-flex row">
        <Nav
          handleNewPlaylistSubmit={handleNewPlaylistSubmit}
          newPlaylistTitle={newPlaylistTitle}
          setNewPlaylistTitle={setNewPlaylistTitle}
        />
      </nav>
      <br />
      <br />
      <br />
      <div className="d-flex">
      <Songs
  musics={musics}
  title={title}
  playlists={playlists}
  addToPlaylist={addToPlaylist}
  removeFromPlaylist={removeFromPlaylist} // Make sure this prop is correctly passed
/>

        <Playlist
          className="d-flex col-6"
          playlist={playlists}
          onClick={handlePlaylistClick}
        />
      </div>
    </div>
  );
}
