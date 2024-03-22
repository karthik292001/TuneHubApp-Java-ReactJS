import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import Register from "./pages/register";
import Login from "./pages/login";
import Adminhome from "./pages/adminhome";

import './CSS/welcome.css';
import './CSS/customer.css';
import './CSS/admin.css';
import Customerhome from "./pages/customerhome";
import AddSongs from "./pages/addsongs";
import ViewSongs from "./pages/viewsongs";
import CreatePlaylist from "./pages/createplaylist";
import ViewPlaylist from "./pages/viewplaylist";
import AddSongsFail from "./pages/addsongfail";
import CreatePlaylistFail from "./pages/createplaylistfail";
import ExploreSongs from "./pages/exploresongs";
import MakePayment from "./pages/payment";


 function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/map-register' element={<Register/>}></Route>
          <Route path='/map-login' element={<Login/>}></Route>
          <Route path='/adminhome' element={<Adminhome/>}></Route>
          <Route path='/map-addsongs' element={<AddSongs/>}></Route>
          <Route path='/addsongfail' element={<AddSongsFail/>}></Route>
          <Route path='/map-viewsongs' element={<ViewSongs/>}></Route>
          <Route path='/createplaylist' element={<CreatePlaylist/>}></Route>
          <Route path='/createplaylistfail' element={<CreatePlaylistFail/>}></Route>
          <Route path='/viewPlaylists' element={<ViewPlaylist/>}></Route>
          <Route path='/customerhome' element={<Customerhome/>}></Route>
          <Route path='/exploresongs' element={<ExploreSongs/>}></Route>
          <Route path='/payment' element={<MakePayment/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
