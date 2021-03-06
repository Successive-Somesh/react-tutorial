import './App.css';
import React from 'react';
import ChildWithProps from '@components/ChildWithProps';
import ChildWithStateAndProps from '@components/ChildWithStateAndProps.js';
import LifeCyclePage from '@pages/LifeCyclePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import M1Home from '@modules/m1/M1Home';
import Child from '@components/Child';
import RenderChilds from '@pages/RenderChilds';
////////////////////
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import drawer from '@layout/drawer';
import JSIntroPage from '@pages/JSIntroPage';
import JSXIntroPage from '@pages/JSXIntroPage';
import ReactIntroPage from '@pages/ReactIntroPage';
import VirtualDOMIntroPage from '@pages/VirtualDOMIntroPage';
import TestingPage from '@pages/TestingPage';
import PropsAndStatePage from '@pages/PropsAndStatePage';
import EventHandlingPage from '@pages/EventHandlingPage';
import FormHandlingPage from '@pages/FormHandlingPage';
import NoMatchPage from '@pages/NoMatchPage';


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
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
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
            
            <Route path="introduction" element={<M1Home />}>
              <Route path="js-intro" element={<JSIntroPage />} />
              <Route path="jsx-intro" element={<JSXIntroPage />} />
              <Route path="virtualdom-intro" element={<VirtualDOMIntroPage />} />
              <Route path="react-intro" element={<ReactIntroPage />} />
            </Route>
            
            <Route path="basics" element={<M1Home />}>
              <Route path="render-childs" element={<RenderChilds />} ></Route>
              <Route path="child" element={<Child />} ></Route>
              <Route path="child-with-props" element={<ChildWithProps someData="some data" moreData="more data"/>} ></Route>
              <Route path="childwithpropsandstate" element={<ChildWithStateAndProps />} ></Route>
              <Route path="lifecycle" element={<LifeCyclePage />} ></Route>
              <Route path="props-and-state" element={<PropsAndStatePage />}></Route>
              <Route path="event-handling" element={<EventHandlingPage />}></Route>
              <Route path="forms-handling" element={<FormHandlingPage />}></Route>
              <Route path="*" element={<NoMatchPage />} ></Route>
            </Route>

            <Route path="advanced" element={<M1Home />}>
              <Route path="renderChilds" element={<RenderChilds />} ></Route>
              <Route path="child" element={<Child />} ></Route>
              <Route path="childwithprops" element={<ChildWithProps someData="some data" moreData="more data"/>} ></Route>
              <Route path="childwithpropsandstate" element={<ChildWithStateAndProps />} ></Route>
              <Route path="lifecycle" element={<LifeCyclePage />} ></Route>
            </Route>

            <Route path="api" element={<M1Home />}>
              <Route path="renderChilds" element={<RenderChilds />} ></Route>
              <Route path="child" element={<Child />} ></Route>
              <Route path="childwithprops" element={<ChildWithProps someData="some data" moreData="more data"/>} ></Route>
              <Route path="childwithpropsandstate" element={<ChildWithStateAndProps />} ></Route>
              <Route path="lifecycle" element={<LifeCyclePage />} ></Route>
            </Route>

            <Route path="testing" element={<M1Home />}>
              <Route path="testing" index element={<TestingPage />} ></Route>
            </Route>

            <Route path="performance" element={<M1Home />}>
              <Route path="renderChilds" element={<RenderChilds />} ></Route>
              <Route path="child" element={<Child />} ></Route>
              <Route path="childwithprops" element={<ChildWithProps someData="some data" moreData="more data"/>} ></Route>
              <Route path="childwithpropsandstate" element={<ChildWithStateAndProps />} ></Route>
              <Route path="lifecycle" element={<LifeCyclePage />} ></Route>
            </Route>

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
