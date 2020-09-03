import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Col, Form, FormGroup, Label, Button } from 'reactstrap';
import { connect } from 'react-redux';

import { saveDesign } from '../../actions';

const colors = ['White', 'Black', 'Grey', 'Blue']

const renderSelect = ({input, label}) => (
    <FormGroup row>
        <Col xs="12" className="font-weight-bold text-left">
            <Label>{label}</Label>
        </Col>
        <Col>
            <select {...input}>
                {colors.map(val => (
                    <option value={val} key={val}>
                        {val}
                    </option>
                ))}
            </select>
        </Col>
    </FormGroup>
)

const renderInput = ({ input, label, placeholder, type, min, max, value }) => (
    <FormGroup row>
        <Col xs="12" className="font-weight-bold text-left">
            <Label>{label}</Label>
        </Col>
        <Col>
            <input {...input} 
            placeholder={placeholder}
            type={type} 
            min={min}
            max={max}
            value={value}/>
        </Col>
    </FormGroup>
)

const DisplayForm = ({ handleSubmit, onFormSubmit, saveDesign, handleImageUpload }) => {

    const onSubmit = formValues => {
        saveDesign(formValues);
    }
    
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Field name="printText" component={renderInput} type="text" label="Write Text" placeholder="Text"/>
            <Field name="textSize" component={renderInput} label="Text Size" type="range" min="10" max="100"/>
            <Field name="textColor" component={renderSelect} label="Text Color" />
            <FormGroup row>
                <Col>
                    <Button color="primary" type="submit">Save</Button>
                </Col>
            </FormGroup>
        </Form>
    );
}

const DisplayFormConnect = connect(null, { saveDesign })(DisplayForm)

export default reduxForm({
    form:'displayForm'
}) (DisplayFormConnect);