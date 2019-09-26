import React, { Component } from 'react';
import { Card, CardImg, CardBody, Row, CardText, CardImgOverlay, CardTitle, Container } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

    }
    renderComments(comments) {
        if (comments == null) {
            return (
                <div></div>
            )
        }
        const showcomments = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p> -- {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            )
        })

        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {showcomments}
                </ul>

            </div>
        )

    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <Container className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </Container>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }
    }
    render() {
        const dish = this.props.details;
        if (dish == null) {
            return (
                <div></div>
            )


        }
        return (
            <Container>
                <Row >
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
                </Row>
            </Container>
        );
    }
}
export default DishDetail;