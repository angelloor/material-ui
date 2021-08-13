import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import React from 'react';

const useStyles = makeStyles(theme => (
    {
        //cuando solo se desea cambiar un propiedad de acuerdo a un estado
        btn: {
            backgroundColor: props => (props.cool ? "blue" : "yellow"),
            '&:hover': {
                background: "#f00",
            },
        },
        //Cuando el estado debe cambiar muchas propiedades
        otherProps: props => {
            return {
                fontSize: props.cool ? "10px" : "25px",
                color: props.cool ? "white" : "orange",
            }
        },
        //utilizar el theme para condicionar el estilo de los componentes
        btnResponsive: {
            color: "red",
            [theme.breakpoints.up("sm")]: {
                color: "blue"
            }
        }
    }
))

function CoolButton(props) {
    const styles = useStyles(props)

    return (
        <div>
            <Button className={classNames(styles.btn, styles.otherProps)} variant="contained" >Boton COOL</Button>
        </div>
    )
}

export default CoolButton