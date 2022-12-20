import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "./App"
// import Dev from "./Development"
import Error404 from "./components/404"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<Error404 />} />
        {/* <Route path='/dev' element={<Dev />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
