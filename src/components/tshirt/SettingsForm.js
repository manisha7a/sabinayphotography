import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Col, Form, FormGroup, Label, Button } from 'reactstrap';

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

const DisplayForm = ({ handleSubmit, mimeType}) => {
    const onSubmit = formValues => {
        alert(formValues);
    }
    
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Field name="aboveImageTxt" component={renderInput} type="text" label="Write Text" placeholder="Above image"/>
            <Field name="belowImageTxt" component={renderInput} type="text" placeholder="Below image"/>
            <Field name="uploadImg" component={renderInput} label="Upload Image" type="file" mimeType={mimeType}/>
            <Field name="textSize" component={renderInput} label="Text Size" type="range" min="0" max="100"/>
            <Field name="textColor" component={renderSelect} label="Text Color" />
            <FormGroup row>
                <Col>
                    <Button color="primary" type="submit">Save</Button>
                </Col>
            </FormGroup>
        </Form>
    );
}

export default reduxForm({
    form:'displayForm'
}) (DisplayForm);