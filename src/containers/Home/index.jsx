import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';
import {
  getMovies,
  getTopMovies,
  getTopSeries
} from '../../services/utils/getData';
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
    async function getAllData() {
      console.time('time');
      setMovie(await getMovies());
      setTopMovies(await getTopMovies());
      setTopSeries(await getTopSeries());
      setPopularSeries(setPopularSeries());
      setTopPeople(setTopPeople());
      console.timeEnd('time');
    }

    getAllData();

    /*   async function getAllData() {
      console.time('time');

    Promise.all([]);
      setMovie(await getMovies());
      setTopMovies(await getTopMovies());
      setTopSeries(await getTopSeries());
      setPopularSeries(await setPopularSeries());
      setTopPeople(await setTopPeople());
      console.timeEnd('time');
    } */

    getAllData();
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
