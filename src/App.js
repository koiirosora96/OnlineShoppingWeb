import './App.css';
import NarBar from './NarBar/NarBar.js'
import ViewCategory from './ViewCategory/ViewCategory.js'
import RecommentedSession from './RecommentedSession/RecommentedSession.js'
import ContactSession from './ContactSession/ContactSession.js'
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";


function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/">
          <div className="App">
            <NarBar></NarBar>
            <ViewCategory></ViewCategory>
            <RecommentedSession></RecommentedSession>
            <ContactSession></ContactSession>
          </div>
    //     {/* </Route>
    //   </Routes>
    // </BrowserRouter> */}
  );
}

export default App;
