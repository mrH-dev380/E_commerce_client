import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Layout'
import { publicRoutes } from '~/routes'

function App() {
  const getUserFromLocalStorage = localStorage.getItem('token')
  // ? JSON.parse(localStorage.getItem('token'))
  // : null

  const user = !!getUserFromLocalStorage
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {publicRoutes.map((route, index) => {
              const Page = route.component

              if (route.path === '/') {
                return (
                  <Route
                    key={index}
                    index
                    path={route.path}
                    element={<Page />}
                  />
                )
              } else if (route.path === '/check-out') {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={user ? <Page /> : <Navigate to="/login" />}
                  />
                )
              } else {
                return (
                  <Route key={index} path={route.path} element={<Page />} />
                )
              }
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
