import './styles.css';

function Playlist({playlist, onClick}) {
  
    return (
        <div className="container ">
          <h2 className='color-neongreen shadow-neongreen text-tron'>Playlist</h2>
          <ul>
            {playlist.map((music) => (
              <li className='' key={music.id}>
                <button 
                className='bg-transparent color-neongreen shadow-neongreen'
                onClick={() => onClick(music)}>{music.title}</button>
              </li>
            ))}
          </ul>
        </div>
    )
}

export default Playlist;