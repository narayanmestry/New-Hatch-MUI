import PropTypes from 'prop-types';

import { FormControl, MenuItem, Select, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type OptionList = {
    labelName?: string,
    bg_color?:string,
    list: string[]
}
function CommonSelect( props: OptionList ) {
    const selectOptionList: string[] = props.list
    return (
        <FormControl sx={{ width: '100%' }}>
            {
                props.labelName && <Typography fontWeight={600}
                    sx={{
                        '@media (max-width: 1300px)': {
                            fontSize:'14px'
                        },
                    }}>
                    <label htmlFor="" >{props.labelName}</label>
                </Typography>
            }

            <Select
                size='small'
                IconComponent={ExpandMoreIcon}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue='none'
                sx={{
                    bgcolor: props.bg_color,
                    // bgcolor:'',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#c7c7c8', // Set your desired border color here

                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#c7c7c8', // Set your desired border color on hover
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#c7c7c8',
                    },
                }}
                variant="outlined"
            >
                <MenuItem value="none">
                    <em>Select</em>
                </MenuItem>
                {
                    selectOptionList.map( ( value: string, index: number ) => ( <MenuItem value={value} key={index} > {value}</MenuItem> ) )
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