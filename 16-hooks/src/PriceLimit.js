import React, { useState, useMemo } from 'react';

const ProductFilter = () => {
    // 상품 가격 제한 상태 관리
    const [priceLimit, setPrice] = useState('');

    const products = [
        { name: 'Product A', price: 30 },
        { name: 'Product B', price: 50 },
        { name: 'Product C', price: 70 },
    ];

    const handleInputChange = (e) => {
        setPrice(e.target.value);
    };

    const filteredProducts = useMemo(() => {
        // 가격 제한에 따라 필터링
        function filterByPrice(product) {
            return product.price <= Number(priceLimit);
        }

        return products.filter(filterByPrice); // 필터링 결과를 반환
    }, [priceLimit, products]);
    
    return (
        <div>
            <h2>Product Filter</h2>
            <input
                type="number"
                value={priceLimit}
                placeholder="Enter price limit"
                onChange={handleInputChange}
            />
            <ul>
                {filteredProducts.map((product, index) => (
                    <li key={index}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductFilter;
