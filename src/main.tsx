import React from 'react'
import ReactDOM from 'react-dom/client'

import { router } from './router/router'
import { RouterProvider } from 'react-router-dom';
import { TankStackProvider } from './plugins/TankStackProvider';





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TankStackProvider>
      <RouterProvider router={ router} />
    </TankStackProvider>
  </React.StrictMode>,
)
