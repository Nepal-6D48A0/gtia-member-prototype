import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { VscHome, VscCalendar, VscBell, VscStarEmpty, VscAccount } from "react-icons/vsc";


const CustomMenu = () => {
    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
                console.log(selected);
            }}
            style={{
                background: "#00254c",
                position: "fixed", 
                fontColor: "rgb(0, 0, 0)"
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home" style={{ fontColor: "rgb(0, 0, 0)" }}>
                <NavItem eventKey="home" style={{ fontColor: "rgb(0, 0, 0)" }}>
                    <NavIcon>
                        <VscHome style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="signups">
                    <NavIcon>
                        <VscCalendar style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Sheets
                    </NavText>
                    <NavItem eventKey="signups/new">
                        <NavText>
                            Create New Sheets
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="signups/active">
                        <NavText>
                            View Active Sheets
                         </NavText>
                    </NavItem>
                    <NavItem eventKey="signups/responses">
                        <NavText>
                            View My Responses
                        </NavText>
                    </NavItem>
                    
                </NavItem>
                <NavItem eventKey="points">
                    <NavIcon>
                        <VscStarEmpty style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Points
                    </NavText>
                </NavItem>
                <NavItem eventKey="notifications">
                    <NavIcon>
                        <VscBell style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Notifications
                    </NavText>
                </NavItem>
                <NavItem eventKey="profile">
                    <NavIcon>
                        <VscAccount style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        User
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default CustomMenu;