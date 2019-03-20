import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal';
import Header from './components/Header'
import FilterableProductTable from './components/FilterableProductTable'
import AddProductModal from './components/modal/AddProductModal'
import { connect } from 'react-redux'
import { fetchProducts } from './redux/ActionCreators'

const styles = {
  container: {
    padding: 50,
    maxWidth: '600px'
  }
};

const mapStateToProps = state => {
  return {
    products: state.products,
    modalState: state.modal,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts)
})

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Header />
        <div className={classes.container}>
          <FilterableProductTable />
        </div>
        <Modal open={this.props.modalState.open}>
          <AddProductModal></AddProductModal>
        </Modal>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
