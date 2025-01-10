import React, { useRef, useState } from 'react';

export default function Example1() {
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [inputs, setInputs] = useState([]); // 이름과 이메일 데이터를 저장하는 배열
    const [errorMessage, setErrorMessage] = useState('');
    const [inputSearch, setInputSearch] = useState('');
    const [result, setResult] = useState([]);
    const [searchType, setSearchType] = useState('writer');
    
    const writerRef = useRef(); 
    const titleRef = useRef();
   

    const add = () => {
        if (writer.trim() === '' || title.trim() === '') {
            if (writer.trim() === '') {
                setErrorMessage('작성자를 입력해주세요!');
                writerRef.current.focus(); 
            } else if (title.trim() === '') {
                setErrorMessage('제목을 입력해주세요!');
                titleRef.current.focus(); 
            }
            return;
        }

        const newInput = {
            id: inputs.length + 1,
            writer: writer,
            title: title,
        };

        setInputs([...inputs, newInput]);

        setWriter('');
        setTitle('');
        setErrorMessage('');
    };

    const searchComment = ()=>{
        let searchResult = inputs.filter((item)=>{
            if(!item[searchType].includes(inputSearch)){
                return null;
            }
            return item;
        });
        
        setResult(searchResult);
        setInputSearch('');
    
    }

    const selectSearchType = (e) => {
        setSearchType(e.target.value);
    }

    return (
        <div>
            작성자 :
            <input
                type="text"
                placeholder="작성자"
                value={writer}
                ref={writerRef}
                onChange={(e) => setWriter(e.target.value)} // 이름 업데이트
            />
            제목 :
            <input
                type="text"
                value={title}
                ref={titleRef}
                onChange={(e) => setTitle(e.target.value)}
            />
            {errorMessage && (
                <div
                    style={{ color: 'red', marginTop: '5px', fontSize: '14px' }}
                >
                    {errorMessage}
                </div>
            )}
            <button onClick={add}>작성</button>
            <form>
                <select name="type" onChange={selectSearchType}>
                    <option value="writer">작성자</option>
                    <option value="title">제목</option>
                </select>

                <input
                    type="text"
                    name="search"
                    placeholder="검색어"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                />
                <button type="button" onClick={searchComment}>
                    검색
                </button>
            </form>
            <div>
                <h3>전체 댓글 목록</h3>
                <table border={1} style={{ marginTop: '30px', width: '500px' }}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inputs.map((input) => (
                            <tr key={input.id}>
                                <td>{input.id}</td>
                                <td>{input.title}</td>
                                <td>{input.writer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h3>댓글 검색 결과</h3>
            {result.length > 0 ? (
                <div>
                    <table
                        border={1}
                        style={{ marginTop: '30px', width: '500px' }}
                    >
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value.title}</td>
                                        <td>{value.writer}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h5>검색 결과가 없습니다.</h5>
            )}
        </div>
    );
}
