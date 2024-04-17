import React, { useState } from 'react';
import './styles.css';
import Modal from 'react-modal'; // Import your Modal component

Modal.setAppElement('#root');

function Songs({musics, title, playlists, addToPlaylist}) {
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

    return (
      <div className="container">
      <h2 className='text-tron color-neongreen shadow-neongreen'>{title}</h2>
      <p className='d-flex color-neongreen shadow-neongreen'><b>Total songs: {musics.length}</b></p>
      <ul>
        {musics.map((music) => (
          <li className='d-flex justify-content-between' key={music.id}>
            <button className='bg-transparent color-neongreen shadow-neongreen'>{music.title} by {music.artist} ({music.genre})</button>
            <button className='bg-transparent border-neongreen border-3 box-neongreen' onClick={() => handleHeartClick(music)}>♥️</button>
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
            opacity:0.85,
          },
          content: {
            backgroundColor: 'black',
            color: 'white', // You might want to set the text color to white for better contrast
            // Add more styles as needed
          },
        }}
        
      >
  <h2 className='d-flex row'>Select a playlist</h2>
  
  <ul className='d-flex'>
  {playlists.filter(playlist => playlist.title !== 'All').map((playlist) => (
  <button className='color-neongreen bg-transparent text-tron text-big shadow-neongreen border-neongreen mx-3' key={playlist.id} onClick={() => handleAddToPlaylist(playlist)}>
    <b>{playlist.title}</b>
  </button>
))}
</ul>
  <button className='d-flex bg-neongreen box-neongreen' onClick={handleModalClose}><b>Close</b></button>
      </Modal>
    </div>
    )
}

export default Songs;