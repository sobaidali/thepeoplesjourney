import React from 'react'
import PropTypes from 'prop-types'
//react-bootstrap
import { Button, Form } from 'react-bootstrap'

const FormUI = ({
    cancel,
    errors,
    submit,
    submitBtnText,
    elements,
    passwordErrors,
}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault()
        submit()
    } 
    const handleCancel = (evt) => {
        evt.preventDefault()
        cancel()
    }
    return (
        <>
            <Form>
                { elements }
                <Button 
                    className="mr-1" 
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                >
                    { submitBtnText }
                </Button>
            </Form>
        </>
    )
}

FormUI.propTypes= {
    elements: PropTypes.string.isRequired,
    submitBtnText: PropTypes.string.isRequired
}

export default FormUI
