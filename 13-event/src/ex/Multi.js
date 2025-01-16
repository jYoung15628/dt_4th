import React, {useState} from 'react'
import image from '../assets/apple.jpg';
import image1 from '../assets/Banana.jpg';
import image2 from '../assets/peach.jpg'

export default function Multi() {
    const [txt,setTxt] = useState ('text');
    const [img, setImg] = useState(image);
    const [bgColor, setBgColor] = useState('black');
    const [color, setColor] = useState ('white');
    
    const chgImg = (e) => {
        setImg(e.target.value);
    };

    const chgColor = (e) => {
        setBgColor(e.target.value);
    };  

    const chgColor1 = (e) => {
        setColor(e.target.value);
    };  
   
    const chgTxt = (e) => {
        setTxt(e.target.value);
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: '20px',
                }}
            >
                Multi Event
                <div>
                    과일 :
                    <select name="fruits" id="" onChange={chgImg}>
                        <option value={image}>사과</option>
                        <option value={image1}>바나나</option>
                        <option value={image2}>복숭아</option>
                    </select>
                </div>
                <div>
                    배경색 :
                    <select
                        name="bgColor"
                        
                        id=""
                        onChange={chgColor}
                    >
                        <option value="black">검정</option>
                        <option value="red">빨강</option>
                        <option value="blue">파랑</option>
                    </select>
                </div>
                <div>
                    글자색 :
                    <select
                        name="ftColor"
                        id=""
                        onChange={chgColor1}

                    >
                        <option value="black">검정</option>
                        <option value="red">빨강</option>
                        <option value="yellow">노랑</option>
                    </select>
                </div>
            </div>
            <img src={`${img}`} alt={`${img}`} />
            <div>
                내용 :
                <input
                    type="text"
                    placeholder="내용을 입력하세요"
                    onChange={chgTxt}
                />
            </div>
            <p style={{ color: color, backgroundColor: bgColor }}>{txt}</p>
        </>
    );
}
