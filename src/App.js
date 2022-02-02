import './App.css';
import context from "./context/context";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState} from "react";
import Header from "./components/Header";
import AllProd from "./pages/AllProd";
import CreateP from "./pages/CreateP";
import CartP from "./pages/CartP";
import SingleItemP from "./pages/SingleItemP";

function App() {
    const [page, setPage] = useState(null)
    const [items, setItems] = useState([])
    const [item, setItem] = useState([])
    const [cartItems, setCartItems] = useState([])

    return (
        <div className="App">
            <context.Provider value={{items, setItems, page, setPage, item,
                setItem, cartItems, setCartItems}}>
                <Router>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<AllProd/>}/>
                        <Route path='/item/:title' element={<SingleItemP/>}/>
                        <Route path='/create' element={<CreateP/>}/>
                        <Route path='/shop' element={<CartP/>}/>
                    </Routes>
                </Router>
            </context.Provider>
        </div>
    );
}

export default App;
