import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactForm from './common/ContactForm';
import Experience from './common/Resume';
import PageWrapper from './components/wrapper/PageWrapper';
import Home from './pages/Home';
import Projects from './pages/Projects';
function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/project" exact element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/contact" exact element={<PageWrapper><ContactForm /></PageWrapper>} />
        <Route path="/experience" exact element={<PageWrapper><Experience /></PageWrapper>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
