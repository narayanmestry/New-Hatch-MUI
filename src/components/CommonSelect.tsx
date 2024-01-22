import PropTypes from 'prop-types';

import { FormControl, MenuItem, Select } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type OptionList = {
    labelName?: string,
    list: string[]
}
function CommonSelect( props: OptionList ) {
    const selectOptionList: string[] = props.list
    return (
        <FormControl sx={{ m: 1, minWidth: 235 }}>
            <label htmlFor="">{props.labelName}</label>
            <Select
                IconComponent={ExpandMoreIcon}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue='none'
                sx={{
                    bgcolor: '#eeeeee',
                    padding: 0,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#c7c7c8', // Set your desired border color here
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#c7c7c8', // Set your desired border color on hover
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#c7c7c8',
                    }

                }}
                variant="outlined"
            >
                <MenuItem value="none">
                    <em>None</em>
                </MenuItem>
                {
                    selectOptionList.map( ( value: string,index:number ) => ( <MenuItem value={value} key={index} > {value}</MenuItem> ) )
                }
            </Select>
        </FormControl >
    )
}
CommonSelect.prototype = {
    labelName: PropTypes.string,
    list: PropTypes.array

}
export default CommonSelect