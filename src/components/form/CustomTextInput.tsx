import { FormControl, TextField, Typography } from "@mui/material"
import { ChangeEvent } from "react"

type OptionList = {
    labelName?: string,
    required?: boolean
    bg_color?: string,
    value?: string,
    name?: string
    onHandleChange?: ( event: ChangeEvent ) => any
}
function CustomTextInput( props: OptionList ) {
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
            <TextField
                size="small"
                label=""
                name={props.name}
                variant="outlined"
                value={props.value}
                onChange={props.onHandleChange}
                sx={{
                    background: props.bg_color,
                }}
            />
        </FormControl>

    )
}

export default CustomTextInput