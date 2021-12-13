import { Container, Form, Table } from 'react-bootstrap';
import { ItemMovie } from '../components/ItemMovie';

const SearchMovie = ({ state, dispatch, handleSearch }) => {
  const { loading, loadingDetail, content, detailMovie, isFavourite } = state;
  return (
    <Container fluid className="mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="form-search">
          <Form.Control
            placeholder="Enter movie title here ..."
            type="search"
            aria-label="Search"
            onChange={handleSearch}
          />
        </Form.Group>
      </Form>
      {loading ? (
        <p>loading ...</p>
      ) : (
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
            {content?.map(e => (
              <ItemMovie
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
      )}
    </Container>
  );
};

export default SearchMovie;
