import React from "react";
import PropTypes from 'prop-types';
import { Card, CardBody, Button, CardHeader, ListGroup, ListGroupItem } from "shards-react";
import { FcCalendar } from "react-icons/fc";

import Event from "./event";
import classes from "./styles.module.css";


const UpcomingEvents = ({ events }) => {

    let contents;
    if (!events || events.length == 0) {
        contents = (
            <div className="text-center d-flex justify-content-center align-items-center flex-column" style={{ height: "100%" }}>
                <FcCalendar style={{ fontSize: "2.5em" }} />
                <h1 className="lead">No events found</h1>
            </div>
        );
    } else {
        contents = events.map((event, index) => <Event title={event.title} date={event.date} time={event.time} id={index} committee={event.committee} />);
    }

    return (
        <Card style={{ height: "100%" }}>
            <CardHeader className={classes.cardHeader}>Upcoming Events</CardHeader>
            <CardBody>
                {contents}
            </CardBody>
            {/* <CardFooter>Sign up for more events</CardFooter> */}
        </Card >
    )
};

export default UpcomingEvents;