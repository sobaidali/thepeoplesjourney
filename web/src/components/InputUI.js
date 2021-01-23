import React from 'react'
import PropTypes from 'prop-types'
//react-bootstrap
import { FormControl, InputGroup } from 'react-bootstrap'

const InputUI = ({ name, type, placeholder, onChange, className, value, error, children, label, ...props }) => {
    const handleChange = (evt) => {
        evt.preventDefault()

        onChange()
    }

    return (
        <>
            <label htmlFor="basic-url">{label}</label>
            <InputGroup className="">
                <FormControl 
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={handleChange}
                />
            </InputGroup>
        </>
    )
}

InputUI.defaultProps = {
    type: "text",
    className: ""
}

InputUI.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired
}

export default InputUI
