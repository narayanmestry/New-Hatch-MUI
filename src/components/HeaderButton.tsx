import { Box, Button } from "@mui/material"
import PropTypes from 'prop-types';

type HeaderButtonTypes = {
    customWidth: string;
    variantName: any;
    startIcon: string;
    labelName: string;
};

// type HeaderButtonProps = {
//     buttonData: HeaderButtonTypes;
//     onClick: () => void; // Assuming a click handler is required
// };
const HeaderButton = ({ customWidth, variantName, startIcon, labelName }:HeaderButtonTypes) => {
    return (
      <Button
        style={{ width: customWidth }} // Customize the width based on the prop
        variant={variantName}           // Use the variant specified in the prop
        startIcon={<span>{startIcon}</span>}  // Use the start icon specified in the prop
      >
        {labelName}
      </Button>
    );
  };
  HeaderButton.propTypes = {
    customWidth: PropTypes.string.isRequired,
    variantName: PropTypes.oneOf(['contained', 'outlined', 'text']).isRequired,
    startIcon: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired,
  };
export default HeaderButton