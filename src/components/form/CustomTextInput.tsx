import { FormControl, TextField, Typography } from "@mui/material"

type OptionList = {
    labelName?: string,
    bg_color?: string,
    value?: string,
    fieldName?: string
    onHandleChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => any
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
                    <label htmlFor="" >{props.labelName}</label>
                </Typography>
            }
            <TextField
                size="small"
                label=""
                name={props.fieldName}
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