import './css/forminput.css'

const FormInput = ({ handelChange, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handelChange} {...otherProps} />
            
        </div>
    )
}

export default FormInput
