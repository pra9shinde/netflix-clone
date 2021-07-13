import React, { useState, useContext, createContext, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner } from './styles/Player';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
    const [showPlayer, setshowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{ showPlayer, setshowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
    const videoRef = useRef();

    const closeModal = (e) => {
        if (!videoRef.current.contains(e.target)) {
            setshowPlayer(false);
        }
    };

    const { showPlayer, setshowPlayer } = useContext(PlayerContext);
    return showPlayer
        ? ReactDOM.createPortal(
              <Overlay onClick={closeModal} {...restProps}>
                  <Inner ref={videoRef}>
                      <video id='netflix-player' controls>
                          <source src={src} type='video/mp4' />
                      </video>
                  </Inner>
              </Overlay>,
              document.body
          )
        : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
    // eslint-disable-next-line no-unused-vars
    const { showPlayer, setshowPlayer } = useContext(PlayerContext);

    return (
        <Button onClick={() => setshowPlayer((showPlayer) => !showPlayer)} {...restProps}>
            Play
        </Button>
    );
};
