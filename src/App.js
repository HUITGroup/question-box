import './App.css';
import {
  AppBar,
  Button,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Toolbar,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function Form(props) {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">HUIT部員ですか？</FormLabel>
        <RadioGroup aria-label="member" name="member1">
          <FormControlLabel value="yes" control={<Radio />} label="yes" />
          <FormControlLabel value="no" control={<Radio />} label="no" />
        </RadioGroup>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">送信</Button>
    </div>
  );
}

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
