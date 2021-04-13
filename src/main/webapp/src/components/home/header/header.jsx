import { AppBar, Toolbar, Typography ,makeStyles, Button} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import './header.css';
import { faSmileWink,faComments,faPeopleCarry} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#152078",
        paddingRight: "79px",
        paddingLeft: "50px",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    fontFamily: {
        fontSize: "2rem",
        fontFamily: "cursive",
        fontWeight: "bolder",
        lineHeight: "1.5",
        letterSpacing: "0.00938em",
    },
}));

const headersData = [
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Log Out",
        href: "/logout",
    },
];

export default function Header({removeToken}) {
    const { header ,menuButton,toolbar, fontFamily} = useStyles();
    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {femmecubatorLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>);
    };

    const femmecubatorLogo = (
        <Typography className={fontFamily}>
            <FontAwesomeIcon icon={faComments}/>&nbsp;&nbsp;Hey Buddy
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            if(label == "Log Out"){
                return (
                    <Button
                        {...{
                            key: label,
                            color: "inherit",
                            component: RouterLink,
                            className: menuButton,
                            onClick: removeToken
                        }}
                    >
                        {label}
                    </Button>
                );
            }
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: menuButton
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <header className="header-container">
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    );
}