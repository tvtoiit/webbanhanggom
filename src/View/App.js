import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/global.css';
import Nav from './Nav';
import Login from './Login/Login';
import News from './News/News';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Shopping from './Shopping/Shopping';
import ProductPage from './ProductPage/ProductPage';
import Product from './Product/';
import Home from './Home';
import Footer from './Footer';
import useFetch from '../custom/fetch';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { gapi } from 'gapi-script';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const clientId = '545591293381-r81f531rg6emth069dmr0osqc36rplfu.apps.googleusercontent.com';
    const [checkUser, setCheckUser] = useState(false);
    const [user, setUser] = useState({});
    const onSuccess = (response) => {
        setUser(response.profileObj);
        setCheckUser(true);
    };
    let { data: dataBlock, loadedData } = useFetch('https://6288a9b610e93797c15d8515.mockapi.io/api/product');

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: '',
            });
        }
        gapi.load('client:auth2', start);
    });

    const [listProduct, setListProduct] = useState([]);
    const handlePush = (id) => {
        const item = { id: id, quality: 1 };
        const check = listProduct.find((item) => item.id === id);
        toast.success('Đã thêm sản phẩm vào giỏ hàng');

        if (!check) {
            setListProduct([item, ...listProduct]);
        } else {
            const findID = listProduct.findIndex((item) => item.id === id);
            listProduct[findID].quality = listProduct[findID].quality + 1;
        }
    };
    const handleDelete = (id) => {
        let newListProduct = listProduct;
        newListProduct.splice(
            newListProduct.findIndex(function (i) {
                return i.id === id;
            }),
            1,
        );
        toast.error('Đã xoá sản phẩm ra khỏi giỏ');

        setListProduct([...newListProduct]);
    };
    const data = listProduct.map((aitem) => {
        return dataBlock.filter((bitem) => {
            return bitem.id === aitem.id;
        });
    });
    // let [datamap, setDatamap] = useState([]);
    let datamap = [];
    data.map((aitem) => {
        return aitem.map((bitem) => {
            datamap.push(bitem);
        });
    });

    datamap.map((item) => {
        return listProduct.filter((aitem) => {
            return (item.quality = aitem.quality);
        });
    });
    return (
        <BrowserRouter>
            <div className="app-container">
                <Nav listProduct={listProduct} user={user} checkUser={checkUser} />
                <Routes>
                    <Route
                        path="/"
                        element={<Home dataBlock={dataBlock} loadedData={loadedData} handlePush={handlePush} />}
                    />
                    <Route path="/news" element={<News />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shopping" element={<Shopping />} />
                    {/* <Route path="/login" element={<Login user={user} clientId={clientId} onSuccess={onSuccess} />} /> */}
                    <Route
                        path="/cart"
                        element={<Cart loadedData={loadedData} handleDelete={handleDelete} datamap={datamap} />}
                    />
                    <Route
                        path="/product"
                        element={<Product dataBlock={dataBlock} loadedData={loadedData} handlePush={handlePush} />}
                    />

                    <Route
                        path="/product/:id"
                        element={<ProductPage dataBlock={dataBlock} loadedData={loadedData} handlePush={handlePush} />}
                    />
                </Routes>
                <Footer />
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
