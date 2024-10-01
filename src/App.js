import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News'; 
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5; // Define the page size (you can adjust this value as needed)
  
  // Using useState to manage the progress state
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbar />

      {/* LoadingBar component to show progress */}
      <LoadingBar
        color='#f11946'
        progress={progress}
      />

      <Routes>
        {/* Define the routes correctly */}
        <Route 
          path="/" 
          element={
            <News 
              setProgress={setProgress} 
              key="general" 
              pageSize={pageSize} 
              country="us" 
              category="general" 
            />
          } 
        />
        <Route 
          path="/business" 
          element={
            <News 
              setProgress={setProgress} 
              key="business" 
              pageSize={pageSize} 
              country="us" 
              category="business" 
            />
          } 
        />
        <Route 
          path="/entertainment" 
          element={
            <News 
              setProgress={setProgress} 
              key="entertainment" 
              pageSize={pageSize} 
              country="us" 
              category="entertainment" 
            />
          } 
        />
        <Route 
          path="/general" 
          element={
            <News 
              setProgress={setProgress} 
              key="general" 
              pageSize={pageSize} 
              country="us" 
              category="general" 
            />
          } 
        />
        <Route 
          path="/health" 
          element={
            <News 
              setProgress={setProgress} 
              key="health" 
              pageSize={pageSize} 
              country="us" 
              category="health" 
            />
          } 
        />
        <Route 
          path="/science" 
          element={
            <News 
              setProgress={setProgress} 
              key="science" 
              pageSize={pageSize} 
              country="us" 
              category="science" 
            />
          } 
        />
        <Route 
          path="/sports" 
          element={
            <News 
              setProgress={setProgress} 
              key="sports" 
              pageSize={pageSize} 
              country="us" 
              category="sports" 
            />
          } 
        />
        <Route 
          path="/technology" 
          element={
            <News 
              setProgress={setProgress} 
              key="technology" 
              pageSize={pageSize} 
              country="us" 
              category="technology" 
            />
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
