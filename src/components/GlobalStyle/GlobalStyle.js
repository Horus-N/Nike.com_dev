import Proptypes from 'prop-types';
import './GlobalStyles.css';

function GlobalStyle({ children }) {
    return children;
}
GlobalStyle.propTypes = {
    children: Proptypes.element.isRequired,
}
export default GlobalStyle;