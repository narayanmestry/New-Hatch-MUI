import Button from "@mui/material/Button"
import MaterialIcon from "./MaterialIcon"
import { Box } from "@mui/material"
type attributesList = {
    labelText: string,
    padding?: string,
    fontSize?: string
    textColor?: string
    bgColor?: string,
    iconName?: string,
    border?: string,
    borderColor?: string,
    hoverBGColor?: string,
    hoverTextColor?: string,
    hoverBorderColor?: string
    width?: string,
    margin?: string,
    onClickFuction?: ( event: React.MouseEvent<HTMLButtonElement> ) => void
}
function CustomButton( props: attributesList ) {
    return (
        <Button
            type="submit"
            disableRipple
            className="custom-buttom"
            onClick={props.onClickFuction}
            sx={{
                fontSize: props.fontSize,
                background: props.bgColor,
                border: props.border ? props.border : '2px solid',
                color: props.textColor,
                '&:hover': {
                    background: props.hoverBGColor,
                    color: props.hoverTextColor,
                    borderColor: props.hoverBorderColor
                },
                borderRadius: '40px',
                textTransform: 'none',
                fontFamily: "chivo",
                borderColor: props.borderColor,
                padding: props.padding ? props.padding : '6px 32px',
                width: props.width,
                margin: props.margin

            }}>
            <Box mr={1}><MaterialIcon iconName={props.iconName as string} /></Box>
            {props.labelText}
        </Button>
    )
}
export default CustomButton