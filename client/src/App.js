// Import Start
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';

import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';

// ApolloClient
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache
})

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <div>
            <Header />
              <div>
                <Routes>

                  {/* Nino */}
                  {/* <Route 
                      path="/" 
                      element={<Home />} 
                  /> */}


                  <Route 
                    path="/login" 
                    element={<Login />} 
                  />
                  <Route 
                    path="/signup" 
                    element={<Signup />} 
                  />


                  <Route 
                    path="*" 
                    element={<PageNotFound />} 
                  />


                </Routes>
              </div>


            {/* <Footer /> */}


          </div>
        </Router>
    </ApolloProvider>
  );
}

export default App;
