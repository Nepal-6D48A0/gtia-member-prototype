import React from "react";
import { Col, Row } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";

import classes from "./styles.module.css";

const Event = ({ title, date, time, committee, id }) => (
    <Row className={classes.eventContainer}>
        <Col xs={4}>
            <h5>{title}</h5>
        </Col>
        <Col xs={2}>
            <p>{date}</p>
        </Col>
        <Col xs={2}>
            <p>{time}</p>
        </Col>
        <Col xs={3}>
            <p>{committee}</p>
        </Col>
        <Col xs={1}>
            <FiExternalLink />
        </Col>
    </Row>
)

export default Event;