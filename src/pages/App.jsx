import { useEffect, useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../redux/actions/actions';
import FavouriteMovie from './FavouriteMovie';
import SearchMovie from './SearchMovie';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.movieList);

  const [query, setQuery] = useState('batman');

  function handleSearch(e) {
    e.preventDefault();
    if (e.target.value.length === 0) {
      setQuery('Batman');
    } else {
      setQuery(e.target.value);
    }
  }

  useEffect(() => {
    if (query) {
      dispatch(getMovie(query));
    }
  }, [dispatch, query]);

  return (
    <section className="mt-3 mt-lg-5 px-lg-5">
      <Container fluid>
        <Tabs defaultActiveKey="movieList" id="uncontrolled-tab-example">
          <Tab eventKey="movieList" title="Search Movie">
            <SearchMovie
              state={state}
              dispatch={dispatch}
              handleSearch={handleSearch}
            />
          </Tab>
          <Tab eventKey="favourite" title="My Favourite">
            <FavouriteMovie state={state} dispatch={dispatch} />
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
}

export default App;
