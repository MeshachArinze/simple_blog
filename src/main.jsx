import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './app/store';
import { fetchUsers } from './features/users/userSlice';
import { Provider } from 'react-redux';
import "./dist/output.css";

store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
