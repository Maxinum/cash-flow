import React, { useState } from 'react';
import { Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import classes from '../Modal.module.css';
import IExpense from '../interfaces/IExpense';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducer";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../../store/action";

interface CategoryOption {
    label: string;
    id: number;
}

const Expense: React.FC = () => {
    const accounts: string[] = useSelector((state: RootState) => state.accounts);
    const expenses: string[] = useSelector((state: RootState) => state.expenses);
    const dispatch = useDispatch();

    const [data, setData] = useState<IExpense>({
        account: "",
        sum: 0,
        date: "",
        category: "",
        comment: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        setData((prevData) => ({
            ...prevData,
            [name]: name === "sum" ? Number(value) : value,
        }));
    };

    const categoryChange = (event: React.SyntheticEvent, newValue: CategoryOption | null): void => {
        setData({
            ...data,
            "category": newValue.label,
        });
    };

    const send = (): void => {
        dispatch(addTransaction(data));
        setData({
            account: "",
            sum: 0,
            date: "",
            category: "",
            comment: ""
        })
    };

    return (
        <Box>
            <Box className={classes.inputBlock}>
                <FormControl fullWidth>
                    <InputLabel required id="demo-simple-select-label">
                        Account
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.account}
                        label="Account"
                        onChange={handleChange}
                        name="account"
                    >
                        {accounts.map((account, index) => (
                            <MenuItem value={account} key={index}>{account}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    <TextField
                        sx={{ width: '50%' }}
                        onChange={handleChange}
                        value={data.sum}
                        id="outlined-basic"
                        label={"Sum"}
                        required
                        variant="outlined"
                        name="sum"
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            sx={{ width: '50%' }}
                            label={"Date"}
                            value={data.date}
                            inputFormat="DD/MM/YYYY"
                            onChange={(date) => handleChange({ target: { name: 'date', value: date } })}
                            renderInput={(params) => <TextField variant="outlined" {...params} />}
                        />
                    </LocalizationProvider>
                </Box>
                <Autocomplete
                    onChange={categoryChange}
                    disablePortal
                    id="combo-box-demo"
                    options={expenses.map((expense, index) => ({ label: expense, id: index }))}
                    value={data.category}
                    renderInput={(params) => <TextField {...params} required label={"Expenses category"} />}
                />
                <TextField id="outlined-multiline-static" label="Comment..." multiline rows={4} />
                <Box className={classes.Button}>
                    <Button onClick={send} variant="contained">Submit</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Expense;
