import React from 'react';
import { ThemeComponent } from './ThemeComponent';
// ## 부모 컴포넌트

// prop drilling을 의도적으로 시뮬레이션 하기 위한 컴포넌트
export const ThemeMiddle = () => {
    return (
        <div style={{ padding: '10px', border: '1px solid red' }}>
            <h3>부모 컴포넌트 (중간 다리)</h3>
            <ThemeComponent></ThemeComponent>
        </div>
    );
};
