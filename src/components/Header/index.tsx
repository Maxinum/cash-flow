import CashModal from "../Modal";
import classes from './Header.module.css';
import { Typography, Box, ImageListItem } from "@mui/material";
import Logo from "../../assets/react.svg";

const Header = () => {
    return (
        <Box className={classes.header}>
            <Box className={classes.logo}>
                <ImageListItem>
                    <img
                        style={{
                            width: '50px',
                            height: '50px'
                        }}
                        src={Logo}
                        alt={"logo"}
                        loading="lazy"
                    />
                </ImageListItem>
                <Typography variant="h4">Cash Flow</Typography>
            </Box>
            <CashModal />
        </Box>
    )
}

export default Header;