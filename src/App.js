import './App.css';
import {Component} from 'react';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/views/home/Home';
import ProductsList from './components/views/product/ProductsList';
import ProductAdmin from './components/views/product/ProductAdmin';
import CreateProduct from './components/views/product/CreateProduct';
import UpdateProduct from './components/views/product/UpdateProduct';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/products/list' Component={ProductsList}/>
            <Route exact path='/products/admin' Component={ProductAdmin}/>
            <Route exact path='/products/create' Component={CreateProduct}/>
            <Route exact path='/products/:id' Component={UpdateProduct}/>
          </Routes>
          </BrowserRouter>
       
        </header>
      </div>
    );
  }
}
export default App;


