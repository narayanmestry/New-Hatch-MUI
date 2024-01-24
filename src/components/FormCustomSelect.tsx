import PropTypes from 'prop-types';

import  FormControl from "@mui/material/FormControl"
import  MenuItem from "@mui/material/MenuItem"
import  Select from "@mui/material/Select"
import  Typography from "@mui/material/Typography"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type OptionList = {
    labelName?: string,
    bg_color?: string,
    list: string[]
}
function FormCustomSelect( props: OptionList ) {
    const selectOptionList: string[] = props.list
    return (
        <FormControl sx={{ width: '100%' }}>
            {
                props.labelName && <Typography fontWeight={600}
                    sx={{
                        '@media (max-width: 1300px)': {
                            fontSize: '14px'
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
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: '3px solid #eee',

                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: '3px solid #eee',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: '3px solid #eee',
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
FormCustomSelect.prototype = {
    labelName: PropTypes.string,
    list: PropTypes.array,
    bg_color:PropTypes.string

}
export default FormCustomSelect