// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
// import { Box, Grid } from '@mui/material';

// export default function CustomDateRangeCalendar() {
//   return (
//     <Grid container>
//         <Grid item>
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateRangeCalendar']}>
//         <DateRangeCalendar />
//       </DemoContainer>
//     </LocalizationProvider>
//     </Grid>
//     </Grid>
//   );
// }


import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const MyDateRangePicker = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleSelect = (ranges:any) => {
    setDateRange([ranges.selection]);
  };

  return (
    <div>
      <DateRangePicker
        ranges={dateRange}
        onChange={handleSelect}
      />
    </div>
  );
};

export default MyDateRangePicker;