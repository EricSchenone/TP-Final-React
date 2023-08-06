import { createContext, useEffect, useState } from "react";
export const productsContext = createContext({});

export const ProductsProvider = ({children}) => {
    const[productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);

    const url = 'https://fakestoreapi.com/products'
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(productos => setProductos(productos));
                setLoading(false);
    }, []);

    if (loading) {
        return <p className="p-loading">Cargando productos...</p>;
      }

    return (
        <productsContext.Provider value={productos}>
            {children}
        </productsContext.Provider>
    );
};