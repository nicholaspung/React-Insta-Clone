import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const SearchBar = () => {
    return (
        <Container>
            <Row>
                <Col xs="3">Logo</Col>
                <Col xs={{ size: 2, offset: 2 }}>SearchBar</Col>
                <Col xs={{ size: 1, offset: 2 }}>Explore</Col>
                <Col xs="1">Heart</Col>
                <Col xs="1">Profile</Col>
            </Row>
        </Container>
    );
}

export default SearchBar;