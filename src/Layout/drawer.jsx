import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from '@mui/material';


const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['renderChilds','child','childwithprops','childwithstateandprops','lifecycle'].map((text, index) => (
          <ListItem key={text} disablePadding button component={Link} href={'/m1/'+text}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
      {['child','childwithprops','childwithstateandprops','lifecycle'].map((text, index) => (
          <ListItem key={text} disablePadding button component={Link} href={'/m1/'+text}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
      {['child','childwithprops','childwithstateandprops','lifecycle'].map((text, index) => (
          <ListItem key={text} disablePadding button component={Link} to={'/m1/'+text}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  export default drawer;