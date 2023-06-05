import { getImages } from '../../../services/utils/getImages';
import { Title, Container } from './styles';

function Credits({ credits }) {
  return (
    <>
      <Title>Credits</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map((artist) => (
            <div key={artist.id}>
              <img src={getImages(artist.profile_path)} />
              <p>{artist.original_name}</p>
            </div>
          ))}
          <div></div>
        </Container>
      )}
    </>
  );
}

export default Credits;
