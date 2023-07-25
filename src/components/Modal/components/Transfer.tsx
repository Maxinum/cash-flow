import { useState, } from 'react';
import classes from '../Modal.module.css';
import { FormControl, InputLabel, Box, MenuItem, Select, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import ITransfer from '../interfaces/ITransfet';
import { useSelector } from "react-redux";
import { RootState } from "@store/reducer";

const Transfer: React.FC = () => {
    const accounts: string[] = useSelector((state: RootState) => state.accounts);

    const [data, setData] = useState<ITransfer>({
        account: "",
        account2: "",
        sum: "",
        date: "",
        comment: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | { value: unknown }>): void => {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
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
