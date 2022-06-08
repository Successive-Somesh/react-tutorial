import './App.css';
import React, { Component } from 'react';
import Child1 from './components/Child';
import Child2 from './components/Child';
import ChildWithProps from './components/ChildWithProps';
import ChildWithStateAndProps from './components/ChildWithStateAndProps.js';
import LifeCycle from './components/LifeCycle';
import ChildWithElements from './components/ChildWithElements';
import Level1 from './components/Level1';
import { UserProvider } from './context/UserContext';
import ConsumerChild1 from './components/ConsumerChild1';
import ChildWrapper1 from './components/ChildWrapper1';
import ChildWrapper2 from './components/ChildWrapper2';
import ConsumerChild2 from './components/ConsumerChild2';
import FormSample from './components/FormSample';
import FormSampleWithData from './components/FormSampleWithData';
import ErrorBoundary from './components/ErrorBoundary';
import BasicComponentFC from './modules/m1/pages/BasicComponentFC';
import BasicComponent from './modules/m1/pages/BasicComponent';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import M1Home from './modules/m1/M1Home';
import M2Home from './modules/m2/M2Home';
import M3Home from './modules/m3/M3Home';
import Child from './components/Child';
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
////////////////////
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import drawer from './Layout/drawer';
const drawerWidth = 300;

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 
  const container = window !== undefined ? () => window().document.body : undefined;

    return(
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            React Learning Resource
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <BrowserRouter>
        
        <div className='container'>
        

        <section className='main' style={{height:'100vh'}}>
          <Routes>
            <Route path="/" element={<Child />} />
            <Route path="m1" element={<M1Home />}>
              <Route path="child" element={<Child />} ></Route>
              <Route path="childwithprops" element={<ChildWithProps someData="some data" moreData="more data"/>} ></Route>
              <Route path="childwithpropsandstate" element={<ChildWithStateAndProps />} ></Route>
              <Route path="lifecycle" element={<LifeCycle />} ></Route>
            </Route>
            <Route path='m2' element={<M2Home />}></Route>
            <Route path="m3" element={<M3Home />}></Route>
            <Route path="*" element={<M1Home />} ></Route>
          </Routes>
        </section>
        </div>
        
      </BrowserRouter>
        
      </Box>
    </Box>
    );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;
