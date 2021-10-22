import { makeStyles, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Select,
  MenuItem,
} from "@material-ui/core";
import React from 'react'
import { useHistory } from "react-router-dom";

const Header = () => {


    const useStyles = makeStyles(() => ({
      title: {
        flex: 1,
        color: "gold",
        fontFamily: "Caveat",
        fontSize: '2rem',
        cursor: "pointer",
        fontWeight: 'bold',
      }
    }));

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: 'dark'
        },
    });

    const classes = useStyles();
    const history = useHistory();

    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => history.push("/")}
                className={classes.title}
              >
                Crypto Verse
              </Typography>

              <Select
                variant="outlined"
                style={{
                  width: 100,
                  height: 40,
                  marginLeft: 15,
                }}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"BDT"}>BDT</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
}

export default Header
