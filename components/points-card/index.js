import React from "react";
import PropTypes from 'prop-types';
import { Row, Col } from "react-bootstrap";
import { Card, CardTitle, CardBody, Badge, Button } from "shards-react";
import ReactStars from "react-stars";
import styles from './styles.module.css';
import PointEvent from "./pointEvent";

const PointsCard = ({ title, requiredPoints, workedEvents }) => {
    // const totalPoints = workedEvents.reduce((a, b) => a.points + b.points);
    let totalPoints = 0;
    workedEvents.forEach((event) => {
        totalPoints += event.points;
    });

    return (
        <Card>
            <CardBody>
                <CardTitle className={styles.cardTitle}>{title}</CardTitle>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <ReactStars count={requiredPoints} value={totalPoints} edit={false} size={28} />
                        <h6 className="my-0 ml-3">({totalPoints} / {requiredPoints})</h6>
                    </div>
                    <Button>+ New</Button>
                </div>

                <div className="my-5">
                    {
                        workedEvents.map((event, index) => {
                            return <PointEvent title={event.title} points={event.points} committee={event.committee} key={index} />
                        })
                    }

                </div>

            </CardBody>
        </Card>
    )
};

PointsCard.propTypes = {
    title: PropTypes.string.isRequired,
    requiredPoints: PropTypes.number.isRequired,
    workedEvents: PropTypes.array,
}


export default PointsCard;