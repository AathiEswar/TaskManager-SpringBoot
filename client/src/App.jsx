import './App.css'
import TodoMain from './components/TodoMain'
import Welcome from './components/Welcome'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ErrorComponent from './components/Common/ErrorComponent'
import TodoList from './components/TodoList'
import Layout from './components/Common/Layout'
import AuthContextWrapper, { useAuth } from './components/context/authContext'

function AuthRoute({ children }) {
  const authContext = useAuth();

  if (authContext.isAuth) {
    return { children }
  }
  return <Navigate to={'/'} />

}

function App() {

  return (
    <AuthContextWrapper>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<TodoMain />}></Route>
            <Route path='/login' element={<TodoMain />}></Route>
            <Route path='/welcome' element={
              <AuthRoute>
                <Welcome />
              </AuthRoute>}>
            </Route>
            <Route path='/list' element={
              <AuthRoute>
                <TodoList />
              </AuthRoute>
            }></Route>
            <Route path='*' element={<ErrorComponent />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthContextWrapper>
  )
}

export default App
