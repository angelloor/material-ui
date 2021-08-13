import green from '@material-ui/core/colors/green';
import { createTheme as createMuiTheme } from '@material-ui/core/styles';

const themes = {
    darTheme: createMuiTheme({
        palette: {
            type: "dark"
        }
    }),

    greemTheme: createMuiTheme({
        palette: {
            primary: green,
            secondary: green
        }
    })
}

export default themes