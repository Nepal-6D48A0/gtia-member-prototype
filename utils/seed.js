export const getUserProfile = () => {
    return {
        name: "George P. Burdell",
        committee: "Internal",
        profilePicture: "https://pbs.twimg.com/profile_images/849268299431063552/gRLA63TN.jpg"
    };
}

export const getWorkedEvent = (title, points, committee) => {
    return { title, points, committee };
}

export const getWorkPoints = () => {
    return [
        getWorkedEvent("Night Market", 2, "External"),
        getWorkedEvent("Recruitment", 1, "Internal"),
    ];
}

export const getSocialPoints = () => {
    return [
        getWorkedEvent("GTKAP", 1, "Internal"),
    ];
}

export const getCommittees = () => {
    return ["Internal", "External", "Outreach", "Marketing", "Finance"];
}

export const getUpcomingEvents = (count) => {
    const events = [];
    const committees = getCommittees();

    for (let i = 0; i < count; i++) {
        events.push({
            id: i,
            title: `Event Title ${i}`,
            date: `08/20/2020`,
            time: `6:00 pm`,
            committee: committees[Math.floor(Math.random() * committees.length)]
        });
    }

    return events;
}