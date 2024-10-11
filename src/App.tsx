
import './App.css'
import { Provider } from 'react-redux';
import store from './store/store';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { QueryClientProvider } from 'react-query';
import SignIn from './pages/Signin';
import { queryClient } from './utils/queryClient';
import Aside from './components/mudules/Aside';
import Header from './components/mudules/Header';
import Footer from './components/mudules/Footer';
import ProductsList from './pages/productsList';
import ProductsGrid from './pages/ProductGrid';
import ProductCreate from './pages/ProductCreate';
import ProductEdit from './pages/ProductEdit';
import CategoryList from './pages/CategoryList';
import CategoryCreate from './pages/CategoryCreate';
import CategoryEdit from './pages/CategoryEdit';
import UsersList from './pages/UserList';
import UsersCreates from './pages/UserCreate';
import UsersEdit from './pages/UserEdit';

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className='dark dark:bg-dark-900 dark:text-white'>
          <Aside />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products-list' element={<ProductsList />} />
            <Route path='/products-grid' element={<ProductsGrid />} />
            <Route path='/product-create' element={<ProductCreate />} />
            <Route path='/product-edit/:id' element={<ProductEdit />} />
            <Route path='/category-list' element={<CategoryList />} />
            <Route path='/category-create' element={<CategoryCreate />} />
            <Route path='/category-edit/:id' element={<CategoryEdit />} />
            <Route path='/user-list' element={<UsersList />} />
            <Route path='/user-create' element={<UsersCreates />} />
            <Route path='/user-edit/:id' element={<UsersEdit />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
