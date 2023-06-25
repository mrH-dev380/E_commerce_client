import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { publicRoutes } from '~/routes'

function App() {
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
