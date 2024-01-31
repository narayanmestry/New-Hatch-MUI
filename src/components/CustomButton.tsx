import Button from "@mui/material/Button"
import MaterialIcon from "./MaterialIcon"
import { Box } from "@mui/material"
type attributesList = {
    labelText: string,
    padding?: string,
    textColor?: string
    bgColor?: string,
    iconName?: string,
    borderColor?: string,
    hoverBGColor?: string,
    hoverTextColor?: string,
    onClickFuction?: ( event: React.MouseEvent<HTMLButtonElement> ) => void
}
function CustomButton( props: attributesList ) {
    console.log( typeof ( props.iconName ), "<<<<" );

    return (
        <Button
            onClick={props.onClickFuction}
            sx={{
                background: props.bgColor,
                border: '2px solid',
                color: props.textColor,
                '&:hover': {
                    background: props.hoverBGColor,
                    color: props.hoverTextColor
                },
                borderRadius: '20px',
                textTransform: 'none',
                fontFamily: "chivo",
                borderColor: props.borderColor,
                padding: props.padding ? props.padding : '6px 32px'

            }}>
            <Box mr={1}><MaterialIcon iconName={props.iconName as string} /></Box>
            {props.labelText}
        </Button>
    )
}

export default CustomButton