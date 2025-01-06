import PropTypes from 'prop-types';
import image from './assets/123.jpg';

const styles = {
    backgroundColor: 'yellow',
    width: '600px',
    height: '700px',
    // display: 'flex',
    // alignItems: 'center',
    // flexDirection: 'row'
};


const book = ({ title,author,price,type }) => {
    
    return (
        <div style={styles}>
            <h1 style={{ color: 'orange' }}>이번주 베스트 셀러</h1>
            <img style={{ width: '300px' }} src={image} />
            <div style={{ alignItems: 'center' }}>
                <div style={{ textAlign: 'left' }}>
                    <h4 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        {title}
                    </h4>
                    <h4>저자: {author}</h4>
                    <h4>판매가: {price}</h4>
                    <h4>구분: {type}</h4> 
                </div>
            </div>
        </div>
    );
};

book.defaultProps = {
    title: '나의 하루는 4시 40분에 시작한다',
    author: '김유진',
    price: '13500원',
    type: '자기계발서',
};

export default book;
