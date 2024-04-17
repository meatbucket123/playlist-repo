import React, { useState } from 'react';
import './styles.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

function Songs({ musics, title, playlists, addToPlaylist, removeFromPlaylist }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const handleHeartClick = (song) => {
    setSelectedSong(song);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleAddToPlaylist = (playlist) => {
    addToPlaylist(playlist, selectedSong);
    setModalOpen(false);
  };

  const handleRemoveFromPlaylist = (playlistId, song) => {
    removeFromPlaylist(playlistId, song); // Pass playlist ID instead of playlist title
    // Optionally, you can also close the modal here
  };

  return (
    <div className="container">
      <h2 className='text-tron color-neongreen shadow-neongreen'>{}Playlists</h2>
      <ul>
        <h2 className='text-tron color-neongreen shadow-neongreen'>{title}</h2>
        {musics.map((music) => (
          <li className='d-flex justify-content-between' key={music.id}>
            <button className='bg-transparent color-neongreen shadow-neongreen'>
              {music.title} by {music.artist} ({music.genre})
            </button>
            <button className='bg-transparent border-neongreen border-3 box-neongreen' onClick={() => handleHeartClick(music)}>
              ♥️
            </button>
            <button className='bg-transparent border-red border-3 box-red' onClick={() => handleRemoveFromPlaylist(title, music)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </li>
        ))}
      </ul>
      <Modal
        className={`d-flex flex-column justify-content-center align-items-center`}
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Add to Playlist"
        style={{
          overlay: {
            backgroundColor: 'black',
            opacity: 0.85,
          },
          content: {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
      >
        <h2 className='d-flex row'>Select a playlist</h2>
        <ul className='d-flex flex-wrap'>
          {playlists.filter((playlist) => playlist.title !== 'All').map((playlist) => (
            <li key={playlist.id} className='mx-2 my-2'>
              <button onClick={() => handleAddToPlaylist(playlist)} className='bg-transparent border-neongreen border-3 box-neongreen px-3 py-1 rounded-pill'>
                <b>{playlist.title}</b>
              </button>
            </li>
          ))}
        </ul>
        <button className='d-flex bg-neongreen box-neongreen' onClick={handleModalClose}><b>Close</b></button>
      </Modal>
    </div>
  );
}

export default Songs;
