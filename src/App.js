import Navbar from "./Component/Navbar/Navbar.js";
import AlbumList from './Component/AlbumList/AlbumList.js';

function App()
{
    return(
        <>
         {/* Top navbar of the page */}
        <Navbar />

        {/* main container of the page */}

        <AlbumList />
        </>
    ) ;
}

export default App;