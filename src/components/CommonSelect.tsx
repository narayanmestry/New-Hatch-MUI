import FormControl from "@mui/material/FormControl"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Typography from "@mui/material/Typography"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ISelectItemList } from '../Interface/ISelectItemList'

type OptionList = {
    labelName?: string,
    bg_color?: string,
    arrayOfObject: ISelectItemList[]
}
function CommonSelect( props: OptionList ) {
    const selectOptionList: ISelectItemList[] = props.arrayOfObject
    selectOptionList.map( ( value: ISelectItemList, index: number ) => {
        console.log( "@@", value.labelName );
    } )

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