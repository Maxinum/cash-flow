import { Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import classes from '../Modal.module.css';
import { useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useSelector } from "react-redux";

const Profit = () => {
    const accounts = useSelector((state) => state.accounts);

    const [data, setData] = useState({
        account: "",
        comment: "",
        sum: "",
        date: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Box className={classes.inputBlock}>
            <FormControl fullWidth>
                <InputLabel required >
                    Account
                </InputLabel>
                <Select
                    id="demo-simple-select"
                    value={data.account}
                    label="From"
                    onChange={handleChange}
                    name="account"
                >
                    {accounts.map((account, index) => (
                        <MenuItem value={account} key={index}>{account}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                onChange={handleChange}
                value={data.sum}
                required
                label="Sum"
                variant="outlined"
                autoComplete="off"
                name="sum"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs} dateLibInstance={dayjs}>
                <Stack spacing={3} size="small">
                    <DesktopDatePicker
                        required
                        autoFocus={true}
                        label={"Date"}
                        inputFormat="DD/MM/YYYY"
                        value={data.date}
                        onChange={(date) => handleChange({ target: { name: 'date', value: date } })}
                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                    />
                </Stack>
            </LocalizationProvider>
            <TextField
                id="outlined-multiline-static"
                label="Comment..."
                multiline
                rows={4}
                autoComplete="off"
                value={data.comment}
                onChange={handleChange}
                name="comment"
            />
        </Box>
    )
}

export default Profit;
