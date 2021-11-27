import React from 'react';
import { Container, Row, Col } from "react-bootstrap"

const Bootstrap = () => {
    return (
        <Container fluid>
            <Row>
                <Col xl={3} style={{border:"1px solid green"}}>
                    <p>Large</p>
                </Col>
                <Col xl={3} style={{border:"1px solid green"}}>
                    <p>Large</p>
                </Col>
                <Col xl={3} style={{border:"1px solid green"}}>
                    <p>Large</p>
                </Col>
                <Col xl={3} style={{border:"1px solid green"}}>
                    <p>Large</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Bootstrap;