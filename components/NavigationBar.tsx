import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import SideMenu from "./SideMenu";
import Link from "next/link";

// スタイルを定義
const useStyles = makeStyles((theme: Theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

export default function NavigationBar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        {isMobile ? <SideMenu /> : <></>}
        <Typography variant="h4" className={classes.logo}>
          Bit Banana
        </Typography>
        {isMobile ? (
          <></>
        ) : (
          <div className={classes.navlinks}>
            <Link href="/b" className={classes.link}>
              <a>B</a>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
