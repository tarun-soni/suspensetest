'use client';

import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
  useTransition,
} from 'react';
import './App.css';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const start = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  };

  useEffect(() => {
    start();
  }, []);

  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        {isLoaded && <LazyComponent />}
      </Suspense>
    </div>
  );
}

export default App;
