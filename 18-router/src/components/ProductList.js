import React from 'react';
import ProductItem from './ProductItem';
import productInfos from './ProductInfo';

export default function ProductList() {
    console.log(productInfos);

    return(
        <div>
            <h1>ProductList</h1>
            {/* 아이템 목록 */}
            <div>
                {productInfos.map((product)=>(
                    <ProductItem key={product.id} product={product}/>))}
            
            </div>
        </div>
    ) 
}
