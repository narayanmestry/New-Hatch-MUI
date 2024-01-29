import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

const headings = ['Age', 'Grade', 'Language', 'Race', 'Ethnicity'];

const subheadings = [
  [1, 2, 3, 4, 5, 6, 7],
  ['Toddler (2 yrs)', 'Preschool (3 yrs)', 'Pre-K (4 yrs)', 'Kindergarten (5 yrs)', 'Mixed Age Pre-school', 'Not specified', 'Other'],
  ['English', 'Spanish'],
  ['American Indian or Alaska Native', 'Asian', 'Black or African American', 'Hispanic or Latino', 'Native Hawaiian or other Pacific Islander', 'White', 'Two or More Races', 'Not specified'],
  ['Hispanic or Latino', 'Not Hispanic or Latino', 'Not specified'],
];

interface StateCounts {
  countAge: number;
  countGrade: number;
  countLanguage: number;
  countRace: number;
  countEthnicity: number;
}
type OptionList = {
  labelName?: string,
  bg_color?: string,
  list: string[]
  selectName?: string,
  customsize?: any,
}

export default function CustomSelectTable(props: OptionList) {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
  const [stateCounts, setStateCounts] = React.useState<StateCounts>({
    countAge: 0,
    countGrade: 0,
    countLanguage: 0,
    countRace: 0,
    countEthnicity: 0,
  });

  const handleChange = (event: SelectChangeEvent<typeof selectedItems>) => {
    const { target: { value } } = event;
    setSelectedItems(typeof value === 'string' ? value.split(',') : value);
  };

  const handleCheckboxChange = (subheading: string, category: string) => {
    setSelectedItems((prevSelectedItems) => {
      const isSelected = prevSelectedItems.includes(subheading);
      const countState = getCategoryCountState(category);

      if (isSelected) {
        setStateCounts((prevCounts) => ({ ...prevCounts, [countState]: prevCounts[countState] - 1 }));
        return prevSelectedItems.filter((item) => item !== subheading);
      } else {
        setStateCounts((prevCounts) => ({ ...prevCounts, [countState]: prevCounts[countState] + 1 }));
        return [...prevSelectedItems, subheading];
      }
    });
  };

  const getCategoryCountState = (category: string): keyof StateCounts => {
    switch (category) {
      case 'Age':
        return 'countAge';
      case 'Grade':
        return 'countGrade';
      case 'Language':
        return 'countLanguage';
      case 'Race':
        return 'countRace';
      case 'Ethnicity':
        return 'countEthnicity';
      default:
        throw new Error(`Unknown category: ${category}`);
    }
  };

  const renderCategoryItems = (heading: string, headingIndex: number,) => (
    <Box key={heading} sx={{
      padding: '0px', margin: 0,
    }}>

      <MenuItem>
        <ListItemText primary={<span style={{ fontWeight: 600, fontSize: '13px' }}>{heading}<span style={{ color: 'green' }}> ({getCountByCategory(heading) === 0 ? "All" : getCountByCategory(heading)})</span></span>} />
      </MenuItem>
      {subheadings[headingIndex].map((subheading: any) => (

        <MenuItem key={subheading} value={subheading} sx={{ padding: '0px', margin: '0px' }}>
          <Checkbox
            checked={selectedItems.indexOf(subheading) > -1}
            onChange={() => handleCheckboxChange(subheading, heading)}

            sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}
            disableRipple
          />
          <ListItemText primary={<span style={{ fontWeight: 500, fontSize: '13px', paddingLeft: '5px' }}>{subheading}</span>} />
        </MenuItem>
      ))}
    </Box>
  );

  return (
    <FormControl sx={{ width: '100%' }}>
      {
        props.labelName && <Typography fontWeight={900}
          sx={{
            color: '#505050',
            pb: '3px',
          }}>
          <label htmlFor="" >{props.labelName}</label>
        </Typography>
      }
      {/* <InputLabel id="demo-multiple-checkbox-label">{props.selectName}</InputLabel> */}
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        IconComponent={ExpandMoreIcon}
        multiple
        value={selectedItems}
        onChange={handleChange}
        // input={<OutlinedInput label="ALL" />}
        renderValue={(selected) => selected.join(', ')}
        sx={{
          bgcolor: props.bg_color,
          '& .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #c7c7c8',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #c7c7c8',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #c7c7c8',
          },
          // Select Bottom-direction arrow style 
          '& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
            fontSize: 50,
            color: '#919191',
          },
          // Select Upper-direction arrow style 
          '& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon': {
            fontSize: 50,
            color: '#919191',
          }
        }}
        variant="outlined"
      >
        <Box sx={{
          display: 'flex', flexDirection: 'row', padding: '10px'
        }}>
          {headings.map(renderCategoryItems)}
        </Box>
        <Box sx={{ pb: 4, textAlign: 'right', paddingX: '10px' }}>
          <Button sx={{ pr: 2, color: 'green', fontSize: '14px', fontWeight: '550' }}>Clear</Button>
          <Button sx={{
            p: '8px 20px', color: 'white', backgroundColor: '#00af51', fontSize: '14px', fontWeight: '550', borderRadius: '20px',
            '&:hover': {
              color: '#fff',
              backgroundColor: '#009143',
            },
          }}>Apply</Button>
        </Box>
      </Select>
    </FormControl>

  );

  function getCountByCategory(category: string) {
    return stateCounts[getCategoryCountState(category)];
  }
}
CustomSelectTable.prototype = {
  labelName: PropTypes.string,
  list: PropTypes.array,
  bg_color: PropTypes.string,
  selectName: PropTypes.string,
  customsize: PropTypes.any,
}