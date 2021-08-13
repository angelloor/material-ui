import { Button, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CoolButton from './CoolButton.jsx';

const useStyles = makeStyles({
  text: {
    fontSize: '25px'
  }
})

function Home(props) {
  const styles = useStyles();
  const cool = true

  const goLayout = () => {
    props.history.push("/layout")
  }

  return (
    <div className="App">
      <Paper style={{ height: "100vh" }} square >
        <Typography className={styles.text} variant="h1">My App</Typography>
        <CoolButton cool={cool}></CoolButton>
        <Button variant="outlined" onClick={() => { goLayout() }}>Go to Grid</Button>
        <Button variant="outlined" color="primary">Boton Primario</Button>
        <Button variant="outlined" color="secondary">Boton Secundario</Button>
        {/* <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}></Switch> */}
      </Paper>
    </div>
  );
}

export default Home;
