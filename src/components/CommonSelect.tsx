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
}
function CommonSelect( props: OptionList ) {
    const selectOptionList: string[] = props.list
    return (
        <FormControl sx={{ width: '100%' }}>
            {
                props.labelName &&
                <Typography
                    sx={{
                        color: '#000',

                        fontWeight: 400,
                        fontFamily: 'chivo',

                        '@media (max-width: 1385px)': {
                            fontSize: '14px'
                        },
                        '@media (max-width: 1260px) and (min-width:1200px)': {
                            fontSize: '12px'
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
                variant="outlined"
                sx={{
                    bgcolor: props.bg_color,
                }}
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
export default CommonSelect