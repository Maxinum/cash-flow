import { useState, } from 'react';
import classes from '../Modal.module.css';
import { FormControl, InputLabel, Box, MenuItem, Select, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { useSelector } from "react-redux";

const Transfer = () => {
    const accounts = useSelector((state) => state.accounts);

    const [data, setData] = useState({
        account: "",
        account2: "",
        sum: "",
        date: "",
        comment: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (
        <Box className={classes.inputBlock}>
            <FormControl fullWidth>
                <InputLabel required >
                    From
                </InputLabel>
                <Select
                    value={data.account}
                    label="From"
                    name="account"
                    onChange={handleChange}
                >
                    {accounts.map((account, index) => (
                        <MenuItem value={account} key={index}>{account}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel required >
                    To
                </InputLabel>
                <Select
                    value={data.account2}
                    label="To"
                    name="account2"
                    onChange={handleChange}
                >
                    {accounts.map((account, index) => (
                        <MenuItem value={account} key={index}>{account}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <TextField
                    onChange={handleChange}
                    value={data.sum}
                    required
                    sx={{ width: '50%' }}
                    label="Sum"
                    variant="outlined"
                    autoComplete="off"
                    name="sum"
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        required
                        sx={{ width: '50%' }}
                        label={"Date"}
                        inputFormat="DD/MM/YYYY"
                        renderInput={(params) => <TextField variant="outlined" {...params} />}
                        name="date"
                        value={data.date}
                        onChange={(date) => handleChange({ target: { name: 'date', value: date } })}
                    />
                </LocalizationProvider>
            </Box>
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
    );
};

export default Transfer;
