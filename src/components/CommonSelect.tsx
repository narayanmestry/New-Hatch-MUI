import FormControl from "@mui/material/FormControl"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Typography from "@mui/material/Typography"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ISelectItemList } from '../Interface/ISelectItemList'

type OptionList = {
    labelName?: string,
    required?: boolean
    bg_color?: string,
    arrayOfObject: ISelectItemList[],
    name?: string,
    value?: string,
    onHandleChange?: ( event: SelectChangeEvent ) => void
}
function CommonSelect( props: OptionList ) {
    const selectOptionList: ISelectItemList[] = props.arrayOfObject


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
                    <label htmlFor="" >{props.labelName}</label>{props.required ? <><label htmlFor="" style={{ fontSize: '18px', color: '#248dc1', paddingLeft: '1px' }}>*</label></> : <></>}
                </Typography>
            }

            <Select
                size='small'
                IconComponent={ExpandMoreIcon}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue='none'
                value={props.value}
                variant="outlined"
                name={props.name}
                onChange={props.onHandleChange}
                sx={{
                    bgcolor: props.bg_color,
                }}
            >
                <MenuItem value="none">
                    <em>Select</em>
                </MenuItem>
                {
                    // selectOptionList.map( ( value: string, index: number ) => ( <MenuItem value={value} key={index} > {value}</MenuItem> ) )
                    selectOptionList.map( ( item: ISelectItemList, index: number ) => (
                        <MenuItem key={index} value={item.value}>{item.labelName}</MenuItem>
                    ) )

                }
            </Select>
        </FormControl >
    )
}
export default CommonSelect