import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';

const StyledDivider = styled(Divider, {
    // Make sure props are forwarded
    shouldForwardProp: (prop) => true,
})(({ theme }) => ({
    "&::before, &::after": {
        borderColor: "navy",
      },
}));

export default StyledDivider;