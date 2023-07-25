import { Button, Modal, Box, Tabs, Tab } from "@mui/material";
import { useState } from 'react';
import classes from './Modal.module.css';
import Expense from "./components/Expense";
// import Transfer from "./components/Transfer";
// import Profit from "./components/Profit";

const CashModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function CustomTabPanel({ children, value, index, ...other }) {
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ pt: 3 }}>
                        {children}
                    </Box>
                )}
            </div>
        );
    }

    return (
        <>
            <Button
                size="large"
                variant="contained"
                onClick={handleOpen}
            >
                Submit Expenses
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.container}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Expenses" />
                        {/* <Tab label="Transfer" />
                        <Tab label="Profit" /> */}
                    </Tabs>
                    <CustomTabPanel value={value} index={0}>
                        <Expense />
                    </CustomTabPanel>
                    {/* <CustomTabPanel value={value} index={1}>
                        <Transfer />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <Profit />
                    </CustomTabPanel> */}
                </Box>
            </Modal>
        </>
    )
}

export default CashModal;