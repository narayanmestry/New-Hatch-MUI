import PropTypes from 'prop-types';

import FormControl from "@mui/material/FormControl"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type OptionList = {
    labelName?: string,
    bg_color?: string,
    list: string[]
    selectName?: string,
    customsize?:any,
}
function FormCustomSelect(props: OptionList) {
    const selectOptionList: string[] = props.list
    return (
        <FormControl sx={{ width: '100%' }}>
            {
                props.labelName && <Typography fontWeight={900}
                    sx={{
                        color: '#505050',
                        pb: '3px',
                    }}>
                    <label htmlFor="" >{props.labelName}</label>
                </Typography>
            }

            <Select
                size={props.customsize}
                IconComponent={ExpandMoreIcon}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue='none'
                sx={{
                    bgcolor: props.bg_color,
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid #c7c7c8',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid #c7c7c8',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: '2px solid #c7c7c8',
                    },
                    // Select Bottom-direction arrow style 
                    '& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
                        fontSize: 50,
                        color: '#919191',
                    },
                    // Select Upper-direction arrow style 
                    '& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon':{
                        fontSize: 50,
                        color: '#919191',
                    }
                }}
                variant="outlined"
            >
                <MenuItem value="none">
                    <em style={{ fontStyle: "normal", color: '#505050', fontFamily: 'Chivo,sans-serif', fontSize: '17px' }} >{props.selectName}</em>
                </MenuItem>
                {
                    selectOptionList.map((value: string, index: number) => (<MenuItem value={value} key={index} > {value}</MenuItem>))
                }
            </Select>
        </FormControl >
    )
}
FormCustomSelect.prototype = {
    labelName: PropTypes.string,
    list: PropTypes.array,
    bg_color: PropTypes.string,
    selectName: PropTypes.string,
    customsize: PropTypes.any,
}
export default FormCustomSelect