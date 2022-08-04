import React from 'react';
import Header from "./components/Header/Header";
import { Route, Routes } from 'react-router-dom';
import Authentication from "./components/Authentication/Authentication";
import Users from "./components/Users/Users";
import Registration from "./components/Registration/Registration";
import Logout from "./components/Logout/Logout";

function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path='/' element={<Authentication />} />
              <Route path="/registration" element={<Registration />}/>
              <Route path="/logout" element={<Logout />} />
            <Route path='/users' element={<Users />} />
          </Routes>
      </>
  );
}

export default App;
