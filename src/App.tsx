import './App.css';
import Form from './Form';
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              HUIT QUESTION BOX
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <Form />
    </div>
  );
}

export default App;
