import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from 'reactstrap';

export default (props) => {
  return <Button color="danger">Danger!</Button>;
};

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

