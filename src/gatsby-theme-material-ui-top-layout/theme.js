import { createMuiTheme } from "@material-ui/core/styles"
import guidelines from "@zlab-de/zel-react/guidelines.json"
import "@zlab-de/zel-react/zel.css"

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: guidelines.theme.blue.secondary,
      main: guidelines.theme.blue.primary,
      dark: guidelines.theme.blue.primary,
    },
    error: { main: guidelines.color.support.alert },
  },
  status: {
    gray: "#eceeef",
  },
  logo: guidelines.logo,
  blue: guidelines.theme.blue,
  indigo: guidelines.theme.indigo,
  red: guidelines.theme.red,
  yellow: guidelines.theme.yellow,
  guidelines: guidelines,
  space: guidelines.spacing.component,
  color: guidelines.color,
})

export default theme
