import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
})

const AddProductModal = (props) => {
  const { classes } = props;

  return (
    <div style={getModalStyle()} className={classes.paper}>
      <ModalHeader />
      <ModalBody addProduct={props.addProduct} />
    </div>
  )
}

export default withStyles(styles)(AddProductModal)