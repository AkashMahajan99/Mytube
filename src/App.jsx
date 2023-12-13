import './App.css'
import React from 'react';
import Body from './components/Body';
import { store } from './redux/store';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/Watchpage/WatchPage';
import SearchResultPage from './components/search/SearchResultPage';
import { Provider } from 'react-redux';

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/> ,
  children:[
    {
      path:"/",
      element: <Maincontainer/>
    },
    {
      path:"watch",
      element: <WatchPage/>
    },
    {
      path:"SearchResults",
      element: <SearchResultPage/>
    }
  ]
}])
function App() {
    return (
      <Provider store={store}>
        <RouterProvider router={appRouter}>
        <Body/>
        </RouterProvider>
      </Provider>
    );
  };
      



export default App
