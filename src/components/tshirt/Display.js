import React from 'react';
import { Card, CardHeader,CardImg, CardText, CardImgOverlay } from 'reactstrap';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

const Display = ({tshirtColor, formValues }) => {
    const fontSize = formValues.textSize ? parseInt(formValues.textSize) : 10;
    return(
        <div>
            <Card inverse className="mb-3">
                <CardHeader tag="h3" className="text-center text-dark">Display</CardHeader>
                <CardImg className="w-100" src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${tshirtColor}`} alt="Card image cap" />
                <CardImgOverlay className="d-flex flex-column justify-content-center text-center">
                    <CardText>
                        <span style={{ fontSize: fontSize, color:formValues.textColor}}>{formValues.printText}</span>
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>
    );
}

const selector = formValueSelector('displayForm');

const mapStateToProps = state => {
    return {
        formValues: selector(state,'printText', 'textSize', 'textColor')
    }
} 
export default connect(mapStateToProps) (Display)