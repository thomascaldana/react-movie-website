import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';
import api from '../../services/api';
import { getImages } from '../../services/utils/getImages';
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster
} from './styles';

function Home() {
  const [showModal, setshowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular');

      setMovie(results[1]); // I can choose what movie changing index
    }

    async function getTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated');

      setTopMovies(results);
    }

    async function getTopSeries() {
      const {
        data: { results }
      } = await api.get('/tv/top_rated');

      setTopSeries(results);
    }

    async function getPopularSeries() {
      const {
        data: { results }
      } = await api.get('/tv/popular');

      setPopularSeries(results);
    }

    async function getTopPeople() {
      const {
        data: { results }
      } = await api.get('/person/popular');

      setTopPeople(results);
    }

    getTopPeople();
    getPopularSeries();
    getTopSeries();
    getTopMovies();
    getMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setshowModal={setshowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button
                  red
                  onClick={() => navigate(`/detail/${movie.id}`)}
                >{`Watch Now`}</Button>
                <Button
                  onClick={() => setshowModal(true)}
                >{`Watch the Trailer`}</Button>
              </ContainerButtons>
            </Info>

            <Poster>
              <img alt="movie cover" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Movies'} />}
      {topSeries && <Slider info={topSeries} title={'Top Series'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Popular Series'} />
      )}
      {topPeople && <Slider info={topPeople} title={'Top Artists'} />}
    </>
  );
}

export default Home;
