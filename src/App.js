import { ChakraProvider } from '@chakra-ui/react';
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import AuthContextProvider from "./hooks/AuthContextProvider";
import UploadFile from './components/UploadFile/UploadFile';
import BotHasUploaded from './components/ShowBot/BotHasUploaded';

function App() {

  return (
    <ChakraProvider>
      <Router>
        <Fragment>
          <AuthContextProvider>
            <Routes>
              <Route exact path="/Home" element={<Home />} />
              <Route
                exact
                path="/Login"
                element={<SignIn />}
              />
              <Route path="/UploadFile" element={<UploadFile />} />
              <Route path="/BotHasUploaded" element={<BotHasUploaded />} />
            </Routes>
          </AuthContextProvider>
        </Fragment>
      </Router>
    </ChakraProvider>
  );
}

export default App;
