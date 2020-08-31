import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Col, Form, FormGroup, Label } from 'reactstrap';

const validate = formValues => {
    const errors = {}
    if (!formValues.name) {
      errors.name = 'Please enter your name!'
    } 
    if (!formValues.email) {
      errors.email = 'Please enter your email address'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      errors.email = 'Invalid email address'
    }
    if (!formValues.phone) {
        errors.phone = 'Please enter your contact number'
      } else if (isNaN(Number(formValues.phone))) {
        errors.phone = 'Must be a number'
      } 
    return errors
  }

  const renderError= ({ error, touched}) => {
    if(touched && error){
        return(
            <FormGroup row>
                <Col className="text-danger">
                {error}
                </Col>
            </FormGroup>
        );
    }
}

  const renderInput = fieldValues =>(
    <FormGroup row>
        <Label sm={2}>{fieldValues.label}</Label >
        <Col sm={10}>
            <fieldValues.fieldType {...fieldValues.input} 
                placeholder={fieldValues.label} 
                type={fieldValues.type} 
                autoComplete="off"
                className="w-50"/>
            {renderError(fieldValues.meta)}
        </Col>
    </FormGroup>
)

const onSubmit = formValues => {
    //I am not doing anything with the formValues at the moment
    alert('Form Submitted');
}

const ContactUsForm = ( {handleSubmit, pristine, reset, submitting} ) => {
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Field name="name" type="text" component={renderInput} label="Name" fieldType="input"></Field>
            <Field name="phone" type="number" component={renderInput} label="Phone" fieldType="input"></Field>
            <Field name="email" type="email" component={renderInput} label="Email" fieldType="input"></Field>
            <FormGroup row>
                <Label sm={2}>I'm Interested In</Label>
                <Col sm={10}>
                    <Label>
                        <Field name="querytype" component="input" type="radio" value="studioshoot" style={{margin:'0px 20px 0px 0px'}}/>
                        Studio Shoot
                    </Label>
                    <Label>
                        <Field name="querytype" component="input" type="radio" value="maternityshoot" style={{margin:'20px'}}/>
                        Maternity Shoot
                    </Label>
                    <Label>
                        <Field name="querytype" component="input" type="radio" value="functions" style={{margin:'20px'}}/>
                        Functions
                    </Label>
                </Col>
            </FormGroup>
            <Field name="message" component={renderInput} label="Message" fieldType="textarea"/>
            <FormGroup row>
                <Col sm={{ size: 1, offset: 2 }}>
                    <Button color="primary" type="submit" disabled={submitting}>
                        Submit
                    </Button>
                </Col>
                <Col>
                    <Button type="button" color="secondary" disabled={pristine || submitting} onClick={reset}>
                    Clear
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    );
}

export default reduxForm({
    form: 'contactUsForm',
    validate
})(ContactUsForm)