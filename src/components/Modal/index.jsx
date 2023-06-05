import { useEffect, useState } from 'react';

import { getMovieVideos } from '../../services/utils/getData';
import { Container, Background } from './styles';

function Modal({ movieId, setshowModal }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieVideos(movieId));
    }

    getMovies();
  }, []);

  return (
    <Background onClick={() => setshowModal(false)}>
      {movie && (
        <Container>
          <button>X</button>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
