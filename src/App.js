import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SingInUp from './pages/SingInUpPage'

import './App.css';


function App() {
  return (
    <>
    
    <Router>
    <Header />
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SingInUp}/>
    </Router>
    </>
  )
}

export default App;
