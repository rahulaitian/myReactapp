import PropTypes from 'prop-types'

const Buttons = ({color,text,onToggleAddform,changebtn}) => {
    color =changebtn ? 'red' : 'green'
    return (
        <button onClick={onToggleAddform} className='btn'  style={{backgroundColor : color}}>{changebtn ? 'Add' : 'close'}</button>
    )
}

Buttons.defaultProps ={
    color : 'steelblue',
    text : 'add',
}
Buttons.propTypes ={
    color : PropTypes.string,
    text : PropTypes.string,
}

export default Buttons
