import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  return (
    <div className="bg-zinc-700 w-full min-h-svh">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
