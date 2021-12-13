import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../pages/App';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
