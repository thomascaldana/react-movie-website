import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SpanGenres from '../../components/SpanGenres';
import Credits from '../../components/SpanGenres/Credits';
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos
} from '../../services/utils/getData';
import { getImages } from '../../services/utils/getImages';
import { Container, Background, Cover, Info } from './styles';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  useEffect(() => {
    async function getAllData() {
      console.time('time');

      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id)
      ])
        .then(([movie, videos, credits, similar]) => {
          console.log({ movie, videos, credits, similar });
          setMovie(movie);
          setMovieVideos(videos);
          setMovieCredits(credits);
          setMovieSimilar(similar);
        })
        .catch((error) => console.error(error));
      console.timeEnd('time');
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} alt="" />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>
        </>
      )}
    </>
  );
}

export default Detail;
