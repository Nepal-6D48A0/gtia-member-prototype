import React from "react";
import { Col, Row } from "react-bootstrap";
import PointsCard from "../../components/points-card";
import { getSocialPoints, getUserProfile, getWorkPoints } from '../../utils/seed';
import Layout from '../_layout';

const Points = ({ userProfile, workPoints, socialPoints }) => (
    <Layout pageTitle="Points">
        <h1 className="display-1">Points</h1>
        <Row>
            <Col>
                <PointsCard title="Work Points" requiredPoints={3} workedEvents={workPoints} />
            </Col>
            <Col>
                <PointsCard title="Social Points" requiredPoints={3} workedEvents={socialPoints} />
            </Col>
        </Row>

    </Layout>
);

export const getStaticProps = async () => {
    const userProfile = getUserProfile();
    const workPoints = getWorkPoints();
    const socialPoints = getSocialPoints();

    return {
        props: {
            userProfile,
            workPoints,
            socialPoints,
        }
    }
}

export default Points;
