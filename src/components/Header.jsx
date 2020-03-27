import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import ZeppelinIcon from "./icons/ZeppelinIcon"
import ZepiconsGlobal from "@zlab-de/zel-react-icons/ZepiconsGlobal"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

const useStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent",
    zIndex: 200,
    padding: `${theme.space.m.rem}rem ${theme.space.xl.rem * 2}rem`,
  },
  button: {
    textTransform: "uppercase",
  },
  logo: {
    color: theme.color.global.black,
    width: 100,
    [theme.breakpoints.up("xs")]: {
      width: 150,
    },
  },
}))

function Header({ handleSetLang, lang, ...props }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles(props)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = lang => {
    setAnchorEl(null)
    handleSetLang(lang)
  }

  return (
    <header className={classes.header}>
      <ZeppelinIcon className={classes.logo} />
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ZepiconsGlobal />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("en")}>EN</MenuItem>
        <MenuItem onClick={() => handleClose("de")}>DE</MenuItem>
      </Menu>
    </header>
  )
}

export default Header
