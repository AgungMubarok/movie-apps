import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { ItemMovie2 } from '../components/ItemMovie';

const FavouriteMovie = ({ state, dispatch }) => {
  const { favouriteMovie, detailMovie, loadingDetail, isFavourite } = state;
  return (
    <Container fluid className="mt-5">
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>ImDB ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {favouriteMovie?.map(e => (
            <ItemMovie2
              title={e.Title}
              imdbID={e.imdbID}
              year={e.Year}
              dispatch={dispatch}
              loadingDetail={loadingDetail}
              detailMovie={detailMovie}
              content={e}
              isFavourite={isFavourite}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default FavouriteMovie;
