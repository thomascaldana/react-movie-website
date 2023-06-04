import { useEffect, useState } from 'react';

import { getMovie } from '../../services/utils/getData';
import { Container, Background } from './styles';

function Modal({ movieId, setshowModal }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      console.log(await getMovie(movieId));
      setMovie(await getMovie(movieId));
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
