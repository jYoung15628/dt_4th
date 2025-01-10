import React, { useState } from 'react';

export default function DisAble() {
    const [txt, setTxt] = useState('사라져라');
    const [dis, setDis] = useState('block');

    const btn = () => {
        if (dis === 'block') {
            setTxt('보여라');
            setDis('none');
        } else {
            setTxt('사라져라');
            setDis('block');
        }
    };

    return (
        <>
            <div style={{ display: dis }}>안녕하세요</div>
            <button onClick={btn}>{txt}</button>
        </>
    );
}
