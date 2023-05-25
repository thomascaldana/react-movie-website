import { useState, useEffect } from 'react';

import Button from '../../components/Button';
import api from '../../services/api';
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster
} from './styles';

function Home() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular');

      setMovie(results[0]); // I can choose what movie changing index
    }

    console.log(movie);
    getMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red>{`Watch Now`}</Button>
                <Button>{`Watch the Trailer`}</Button>
              </ContainerButtons>
            </Info>

            <Poster>
              <img
                alt="movie cover"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  );
}

export default Home;
