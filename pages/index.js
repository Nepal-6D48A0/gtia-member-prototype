import Head from 'next/head';
import { Col, Row } from "react-bootstrap";
import CustomMenu from '../components/navbar';
import { getSocialPoints, getUpcomingEvents, getWorkPoints, getUserProfile } from '../utils/seed';

import ProfileCard from '../components/profile-card';
import UpcomingEvents from '../components/upcoming-events';
import styles from '../styles/Home.module.css';

const Home = ({ userProfile, points, upcomingEvents }) => (
  <div className={styles.container}>
    <div className={styles.wave}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="0.78" d="M0,256L48,266.7C96,277,192,299,288,304C384,309,480,299,576,282.7C672,267,768,245,864,234.7C960,224,1056,224,1152,234.7C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
    <Head>
      <title>Home | GTIA Member</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <CustomMenu />
    <main className="my-5 px-5">
      <Row>
        <Col md={3} className="mb-4">
          <ProfileCard userProfile={userProfile} points={points} />
        </Col>
        <Col md={9} className="mb-4">
          <UpcomingEvents events={upcomingEvents} />
        </Col>
      </Row>

    </main>
  </div>
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
