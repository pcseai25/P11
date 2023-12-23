import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home.jsx';
import EditorForm from './pages/EditorForm';
import EditorPage from './pages/EditorPage';
import "./style/header.scss"
import "./style/App.scss"
import "./style/editorform.scss"
import "./style/editorpage.scss"
import "./style/home.scss"
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <Toaster 
        position="top-right"
        toastOptions={{
          success:{
            theme:{
              primary:'#5e17eb',
            },
         },
       }}
        ></Toaster>
    
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/editorform' element={<EditorForm/>} />
          {/* <Route path='/editorform/:roomId' element={<EditorPage/>} /> */}
          <Route path='/editor/*' element={<EditorPage />} />
        </Routes>
        
      </BrowserRouter>
    </div>
   
  );
}

export default App;
