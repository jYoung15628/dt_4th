//  #2. 다중 자식 요소 전달
import './Multichild.css'

const MultiChild = ({children}) => {
    return<div className='multi'>{children}</div>;
}

export default MultiChild;