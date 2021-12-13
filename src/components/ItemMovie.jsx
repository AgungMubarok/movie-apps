import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import {
  addToFavourite,
  getDetailMovie,
  removeFavourite,
} from '../redux/actions/actions';

const ItemMovie = ({
  title,
  year,
  imdbID,
  loadingDetail,
  detailMovie,
  dispatch,
  content,
  isFavourite,
}) => {
  console.log(isFavourite);
  const [show, setShow] = useState(false);
  const [bg, setBg] = useState(false);
  const [fav, setFav] = useState(false);

  const handleClickModal = () => {
    setShow(!show);
    setBg(false);
  };

  const clickFav = async () => {
    await setFav(!fav);
    if (fav) {
      dispatch(removeFavourite(imdbID));
    } else {
      dispatch(addToFavourite(content, imdbID));
    }
  };

  return (
    <>
      <tr>
        <td
          onClick={async () => {
            setShow(!show);
            setBg(!bg);
            await dispatch(getDetailMovie(imdbID));
          }}
          className="animate-detail"
        >
          <div
            className={`bg-unique ${bg ? 'bg-unique-show' : 'bg-unique-hide'}`}
          />
          <div style={{ position: 'relative' }}>{title}</div>
        </td>
        <td>{year}</td>
        <td>{imdbID}</td>
        <td>
          <span
            onClick={clickFav}
            className={`fa fa-star transition-fav ${fav && 'checked'}`}
          ></span>
        </td>
      </tr>
      <Modal
        show={show}
        onHide={handleClickModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Movies Detail</Modal.Title>
        </Modal.Header>

        {loadingDetail ? (
          <p>Loading ...</p>
        ) : (
          <Modal.Body>
            <div className="d-flex justify-content-center">
              <img src={detailMovie.Poster} alt="poster" />
            </div>
            <div className="mt-3 text-secondary">
              <h4>{detailMovie.Title}</h4>
              <div>Year : {detailMovie.Year}</div>
              <div>Released : {detailMovie.Released}</div>
              <div>Director : {detailMovie.Director}</div>
              <div>Actors : {detailMovie.Actors}</div>
              <div>Plots : {detailMovie.Plot}</div>
              <div>Awards : {detailMovie.Awards}</div>
              <div>Writer : {detailMovie.Writer}</div>
              <div>imdb Rating : {detailMovie.imdbRating}</div>
              <div>imdb Votes : {detailMovie.imdbVotes}</div>
            </div>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClickModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const ItemMovie2 = ({
  title,
  year,
  imdbID,
  loadingDetail,
  detailMovie,
  dispatch,
}) => {
  const [show, setShow] = useState(false);
  const [bg, setBg] = useState(false);

  const handleClickModal = () => {
    setShow(!show);
    setBg(false);
  };

  return (
    <>
      <tr>
        <td
          onClick={async () => {
            setShow(!show);
            setBg(!bg);
            await dispatch(getDetailMovie(imdbID));
          }}
          className="animate-detail"
        >
          <div
            className={`bg-unique ${bg ? 'bg-unique-show' : 'bg-unique-hide'}`}
          />
          <div style={{ position: 'relative' }}>{title}</div>
        </td>
        <td>{year}</td>
        <td>{imdbID}</td>
        <td>
          <span
            onClick={async () => await dispatch(removeFavourite(imdbID))}
            className="fa fa-star checked"
          ></span>
        </td>
      </tr>
      <Modal
        show={show}
        onHide={handleClickModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Movies Detail</Modal.Title>
        </Modal.Header>

        {loadingDetail ? (
          <p>Loading ...</p>
        ) : (
          <Modal.Body>
            <div className="d-flex justify-content-center">
              <img src={detailMovie.Poster} alt="poster" />
            </div>
            <div className="mt-3 text-secondary">
              <h4>{detailMovie.Title}</h4>
              <div>Year : {detailMovie.Year}</div>
              <div>Released : {detailMovie.Released}</div>
              <div>Director : {detailMovie.Director}</div>
              <div>Actors : {detailMovie.Actors}</div>
              <div>Plots : {detailMovie.Plot}</div>
              <div>Awards : {detailMovie.Awards}</div>
              <div>Writer : {detailMovie.Writer}</div>
              <div>imdb Rating : {detailMovie.imdbRating}</div>
              <div>imdb Votes : {detailMovie.imdbVotes}</div>
            </div>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClickModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { ItemMovie, ItemMovie2 };
