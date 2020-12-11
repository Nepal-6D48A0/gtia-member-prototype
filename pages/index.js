import React from "react";
import { Col, Row } from "react-bootstrap";
import { getSocialPoints, getUpcomingEvents, getWorkPoints, getUserProfile } from '../utils/seed';
import ProfileCard from '../components/profile-card';
import UpcomingEvents from '../components/upcoming-events';
import Layout from './_layout';

const Home = ({ userProfile, points, upcomingEvents }) => (
  <Layout pageTitle="Home">
    <h1 className="display-1 mb-3">Home</h1>
    <Row>
      <Col md={3} className="mb-4">
        <ProfileCard userProfile={userProfile} points={points} />
      </Col>
      <Col md={9} className="mb-4">
        <UpcomingEvents events={upcomingEvents} />
      </Col>
    </Row>
  </Layout>
);

export const getStaticProps = async () => {
  const userProfile = getUserProfile();

  const points = {
    workPoints: getWorkPoints().length,
    socialPoints: getSocialPoints().length,
  };

  const upcomingEvents = getUpcomingEvents(5);

  return {
    props: {
      userProfile,
      points,
      upcomingEvents,
    }
  }
}

export default Home;
