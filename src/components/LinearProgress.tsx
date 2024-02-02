
import { Box, LinearProgress } from '@mui/material';
import '../style/progressbar.css';

function LinearProgressBar(props: any) {

    const getColor = (value: number) => {
        if (value <= 250) {
            return 'red';
        } else if (value <= 500) {
            return 'pink';
        } else if (value <= 75) {
            return 'yellow';
        } else {
            return 'green';
        }
    };

    const color = getColor(props.value);
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <LinearProgress
                    variant="determinate"
                    value={100}
                    sx={{
                        height: 40, borderRadius: 1, bgcolor: '#fff',
                        '& .css-jeay1m-MuiLinearProgress-bar1': {
                            backgroundColor: color
                        }
                    }}
                />
            </Box>
        </>
    )
}

export default LinearProgressBar
