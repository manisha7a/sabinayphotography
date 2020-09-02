import React from 'react';
import { Card, CardHeader,CardImg, CardText, CardImgOverlay } from 'reactstrap';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

const Display = ({tshirtColor, myFormValues}) => {
    
    return(
        <Card inverse className="mb-3">
            <CardHeader tag="h3" className="text-center text-dark">Display</CardHeader>
            <CardImg width="100%" src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${tshirtColor}`} alt="Card image cap" />
            <CardImgOverlay className="d-flex flex-column justify-content-center text-center">
                <CardText>
                    <small>{myFormValues.aboveImageTxt}</small>
                </CardText>
                <CardImg src="http://via.placeholder.com/400x300" alt="meme-text" className="img-thumbnail mx-auto w-50"/>
                <CardText>
                    <small>{myFormValues.belowImageTxt}</small>
                </CardText>
                <div></div>
            </CardImgOverlay>
        </Card>
    );
}

const selector = formValueSelector('displayForm');

const mapStateToProps = state => {
    return {
        myFormValues: selector(state,'aboveImageTxt', 'belowImageTxt')
    }
} 
export default connect(mapStateToProps) (Display)