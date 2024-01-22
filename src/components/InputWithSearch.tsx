import PropTypes from 'prop-types';

import { Button, FormControl, InputAdornment, OutlinedInput } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

type InputParameterList = {
    placeholder:string
}

function InputWithSearch(props:InputParameterList) {
    return (
        <FormControl sx={{ m: 1, width: '235px' }} variant="outlined">
            <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={<InputAdornment position="end">
                    <Button color='info' sx={{ minWidth: 0, padding: '15px 3px',bgcolor: '#bebfbe' }} >
                        <SearchIcon />
                    </Button>
                </InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                placeholder={props.placeholder}
                inputProps={{
                    'aria-label': 'weight',
                }}
                sx={{
                    bgcolor: '#eeeeee',
                    paddingRight: '2px',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#c7c7c8'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#c7c7c8'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#c7c7c8',
                    },
                    '&:hover .MuiInputAdornment-root': {
                        borderColor: '#c7c7c8',
                        height: '100px'
                    },
                    pr:0


                }}
            />
            {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
        </FormControl>
    )
}
InputWithSearch.prototype={
    placeholder:PropTypes.string
}
export default InputWithSearch