import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';

export default function UseCallbackEx2({ postID }) {
    const [post, setPost] = useState({});

    // [before]
    // const getPost = async () => {
    //     console.log('data fetching...');
    //     // 데이터 요청
    //     try {
    //         const res = await axios.get(
    //             `https://jsonplaceholder.typicode.com/posts/${postID}`
    //         );
    //         setPost(res.data);
    //         console.log('res >>> ', res);
    //         console.log('res.data >>> ', res.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    console.log('post >>>', post);
    console.log('post >>>', post.id);
    console.log('post >>>', post.title);
    console.log('post >>>', post.body);
    

    /**
     * axios
     * - Promise 기반, 외부 라이브러리 => 패키지 설치 (npm i axios)
     * - async/ await 구문과 함께 사용 가능
     * - 자동으로 json 데이터 파싱
     *  ㄴ 서버로부터 받은 응답을 자동으로 JSON으로 파싱해서 response.data에 저장함
     *  ㄴ fetch 와 달리 res.json() 수동으로 호출할 필요가 없음
     */

    // [after]
    // useCallback 훅으로 메모이제이션 -> 의존성 배열에 있는 내용이이 변경되지 않는한 컴포넌트는 리렌더링 되지 않음
    // => 필요한 순간에만 api 요청을 날림
    const getPost = useCallback(async ()=>{
        console.log('data fetching...');
        // 데이터 요청
        try{
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${postID}`
            );
            setPost(res.data);
            console.log(res.data)
        }catch(error){
            console.error(error)
        }
    },[postID]); // postID 변경할때만 재실행

    // useEffect 의존성 배열에 "함수"
    //  컴포넌트 리렌더링 => 함수 재생성 (주소값 변경) => getPost 함수를 무한 생성
    useEffect(()=> {
        getPost();
    },[]);
    return (
        <div>
            <h1>UseCallbackEx2</h1>
            {post.id ? post.title : '로딩중'};
        </div>
    );
}
/**
 * useCallback 훅을 사용하여 getPost 함수를 메모이제이션했기 때문에
 * getPost 함수는 postID가 변경되지 않는 한 "동일한 참조값" 을 유지합니다
 * 
 * 하지만 useEffect의 의존성 배열에 getPost 함수를 넣으면
 * getPost 함수가 변경될 때마다 useEffeect가 재실행 되므로
 * 의존성 배열에 무엇을 넣어야 하는지 신경 써야함
 * 
 * 우리가 원하는 것은 postID가 변경될 때만 getPost가 호출되도록 하는것
 * 따라서 useEffect의 의존성 배열에는 count 대신 getPost 넣어야함
 * 
 * getPost가 메모이제이션된 함수이기 때문에
 * 실제로 postID가 변경될 때만 getPost가 다시 생성되어  useEffect가 트리거 됩니다
 * 
 * 이렇게 하면 postID가 변경될 때마다 getPost 함수가 새로 생성되고 (=새로운 주소값(참조값) 할당)
 * useEffect 가 호출되면서 API 요청이 이루어짐
 * 
 * ==> 우리는 필요한 순간에만 API 요청을 할 수 있게 제어할 수 있는 것!
 * 
 * useEffect(()=>{},[])
 * useMemo(()=>{},[])
 * useCallback(()=>{},[])
 */