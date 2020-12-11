import React from "react";
import PropTypes from 'prop-types';
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { Card, CardTitle, CardBody, CardSubtitle, CardImg, Badge, Button } from "shards-react";
import styles from './styles.module.css';

const ProfileCard = ({ userProfile, points }) => (
    <Card>
        <CardImg src={userProfile.profilePicture} className={styles.cardImage} />
        <CardBody className={styles.profileBody}>
            <CardTitle>{userProfile.name}</CardTitle>
            <CardSubtitle className="mt-1">{userProfile.committee}</CardSubtitle>
            <Badge outline pill>
                General Member
            </Badge>
            <hr />
            <Row>
                <Col>
                    <b>Work Points</b>
                    <h4>{points.workPoints}</h4>
                </Col>
                <Col>
                    <b>Social Points</b>
                    <h4>{points.socialPoints}</h4>
                </Col>
            </Row>
            <Link href="/points">
                <Button theme="warning">Submit Points</Button>
            </Link>
        </CardBody>
    </Card>
);

ProfileCard.propTypes = {
    userProfile: {
        name: PropTypes.string.isRequired,
        committee: PropTypes.string.isRequired,
        profilePicture: PropTypes.string,
    },
    points: {
        workPoints: PropTypes.number,
        socialPoints: PropTypes.number,
    }
}

// ProfileCard.defaultProps = {
//     points: {
//         workPoints: "N/A",
//         socialPoints: "N/A",
//     }
// };

export default ProfileCard;