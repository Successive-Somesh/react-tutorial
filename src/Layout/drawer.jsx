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

function makeRoute(str){
  return str.replace(/\s+/g, '-').toLowerCase();
}

const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText><strong>Introduction</strong></ListItemText>
        </ListItemButton>
        {['JSX','VirtualDOM','React'].map((text, index) => (
          <ListItem key={text} disablePadding button component={Link} href={'/introduction/'+makeRoute(text)+'-intro'}>
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
        <ListItemButton>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText><strong>Basic Concepts</strong></ListItemText>
        </ListItemButton>
        {['Render Childs','Lifecycle','Props And State','Event Handling','Forms Handling'].map((text, index) => (
          <ListItem key={text} disablePadding button component={Link} href={'/basics/' + makeRoute(text)}>
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
        <ListItemButton>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText><strong>Advance Concepts</strong></ListItemText>
        </ListItemButton>
        {['RenderChilds','Lifecycle'].map((text, index) => (
          <ListItem key={text} disablePadding button component={Link} href={'/advanced/'+text}>
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
        <ListItemButton>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText><strong>API Calling</strong></ListItemText>
        </ListItemButton>
        {['RenderChilds','Lifecycle'].map((text, index) => (
          <ListItem key={text} disablePadding button component={Link} href={'/api-call/'+text}>
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
        <ListItemButton>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText><strong>Testing</strong></ListItemText>
        </ListItemButton>
        {['Testing'].map((text, index) => (
          <ListItem key={text} disablePadding button component={Link} href={'/testing/'+text}>
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
        <ListItemButton>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText><strong>Performance</strong></ListItemText>
        </ListItemButton>
        {['RenderChilds','Lifecycle'].map((text, index) => (
          <ListItem key={text} disablePadding button component={Link} href={'/performance/'+text}>
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
      
    </div>
  );

  export default drawer;