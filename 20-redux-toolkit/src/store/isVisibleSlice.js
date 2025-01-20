import { createSlice } from '@reduxjs/toolkit';

// #1. 슬라이스 정의
const isVisibleSlice = createSlice({
    name: 'visible',
    initialState: true,
    reducers: {
        toggleVisibility: (state) => {
            return !state;  // 상태를 반전시킴
        },
    },
});

// 액션 생성자, 리듀서를 내보내기
export const { toggleVisibility } = isVisibleSlice.actions;
export default isVisibleSlice.reducer;  //리듀서
