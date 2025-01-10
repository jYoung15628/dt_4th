import React, { useState } from 'react'


export const Color = () => {
    const [color, setColor] = useState('black');
    const [txt, setTxt] = useState('검정색 글씨');
    const changeColor = () => {
        setColor(color === 'black' ? 'red' : 'black'); 
        setTxt(txt === '검정색 글씨' ? '빨간색 글씨' : '검정색 글씨');
    };
    const changeColor1 = () => {
        setColor(color === 'black' ? 'blue' : 'black');
        setTxt(txt === '검정색 글씨' ? '파란색 글씨' : '검정색 글씨');
    };
    
    return (
        <>
            <h1 style={{ color: color }}>{txt}</h1>
            <button onClick={changeColor}>빨간색</button>
            <button onClick={changeColor1}>파란색</button>
        </>
    );
}

export default Color;