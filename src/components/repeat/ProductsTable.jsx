/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import products from '../../data/products';
import './ProductsTable.css';

export default props => {
    function getLines() {
        return products.map((product,i)  => {
            return (
                <tr key={product.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>R$ {product.price.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }
    return(
        <div className="TabelaProdutos">
            <table border="1">
                <thread>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thread>
                <tbody>
                    <tr>
                        {getLines()}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}