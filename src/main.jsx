import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchPosts } from "./features/posts/postSlice";
import { fetchUsers } from "./features/users/userSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./dist/output.css";
import "./App.css"

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </Provider>
);
