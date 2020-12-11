import React from "React";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

import styles from "./styles.module.css";

const PointEvent = ({ title, points, committee }) => (
    <Row className={styles.eventContainer}>
        <Col xs={6}>
            <h5 className="my-0">{title}</h5>
        </Col>
        <Col xs={3}>
            {points} Pt(s)
        </Col>
        <Col xs={3}>
            {committee}
        </Col>
    </Row>
);

PointEvent.propTypes = {
    title: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    committee: PropTypes.string.isRequired,
}


export default PointEvent;