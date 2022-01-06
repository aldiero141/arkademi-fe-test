import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CourseFront from './CourseTabs/CourseFront';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.2em;
    margin: 5em 0em;
    padding: 0 4em;
    height: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1em;
  margin-top: -6em;
`;

const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    color: #ccc;
    font-size: 0.75em;
    margin-bottom: 1em;
`;

const HeaderTitle = styled.div`
    display: flex;
    flex-direction: row;
`;
const Title = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1em;
    margin-top: -1em;
    h1{
      font-size: 1.5em;
    }
`;

const Stats = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    font-weight: 600;
`;


export default function CategoryCards () {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle ={
    textTransform: 'capitalize', 
    color: '#ccc',
    "&.Mui-selected": 
    { 
      color: '#1C1D20'
    }
  }

  return (
    <Wrapper>
      <Header>
        <Navigation>
          Home  /  Course  /  Bahasa  /  Prakerja
        </Navigation>
        <HeaderTitle>
          <img src='/image/course-banner.svg' alt='banner'/>
          <Title>
            <h1>Strategi Menjadi Entrepreneur Pemula yang Kreatif dan Produktif</h1>
            <Stats>
              <img src='/image/course-rates.svg' height='16px' alt='icon'/>
              4.5 (3274 reviews)
              <img src='/image/User.png' width='12px' height='16px' alt='icon'/>
              29719 siswa
            </Stats>
          </Title>
        </HeaderTitle>
      </Header>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs sx={{ borderBottom: 1, borderColor: 'divider' }} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={tabStyle} label="Depan" {...a11yProps(0)} />
            <Tab sx={tabStyle} label="Siswa" {...a11yProps(1)} />
            <Tab sx={tabStyle} label="Aktivitas" {...a11yProps(2)} />
            <Tab sx={tabStyle} label="Admin" {...a11yProps(3)} />
            <Tab sx={tabStyle} label="Sunting Kelas" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <CourseFront/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Siswa
        </TabPanel>
        <TabPanel value={value} index={2}>
          Aktivitas
        </TabPanel>
        <TabPanel value={value} index={3}>
          Admin
        </TabPanel>
        <TabPanel value={value} index={4}>
          Sunting Kelas
        </TabPanel>
      </Box>
    </Wrapper>
  );
}
  