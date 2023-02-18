import PropTypes from "prop-types";
import './button-style.css';
export function Button({ text, name = "Usuario" }) {
  return (
    <button onClick={ () =>{console.log('Hola Mundo')} } className='boton-brd'>
      {text} - {name} 
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
};

// Button.defaultProps =
// {
//     name: 'Usuario'
// }
