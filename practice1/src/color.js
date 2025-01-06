import PropTypes from 'prop-types';

const color =({food})=>{


    return (
        <>
            <h4>
                내가 좋아하는 음식은
                <span style={{ color: 'red' }}>{food}</span> 
                입니다.
            </h4>
        </>
    );

}

color.defaultProps = {
    food: '스파게티',
};

export default color;