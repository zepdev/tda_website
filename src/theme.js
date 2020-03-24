import { createMuiTheme } from '@material-ui/core/styles';
import guidelines from '@zlab-de/zel-react/guidelines.json';
import '@zlab-de/zel-react/zel.css';
import './index.css';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: guidelines.theme.blue.secondary,
      main: guidelines.theme.blue.primary,
      dark: guidelines.theme.blue.primary
    },
    error: { main: guidelines.color.support.alert }
  },
  status: {
    gray: '#eceeef'
  },
  blue: guidelines.theme.blue,
  logo: guidelines.logo,
  color: guidelines.color,
  space: guidelines.spacing.component,
  breakpoint: guidelines.breakpoint
});

export default theme;
