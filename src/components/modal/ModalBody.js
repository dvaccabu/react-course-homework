import React from 'react';
import { connect } from 'react-redux'
import { addProduct, closeModal } from '../../redux/ActionCreators'

const mapStateToProps = state => {
  return {
    productsRes: state.products,
  }
}
const mapDispatchToProps = { addProduct, closeModal }

const ModalBody = (props) => {
  function handleClickAdd(e){
    e.preventDefault()
    const newProduct = {
      category: document.getElementById("product_category").value,
      price: "$"+document.getElementById("product_price").value,
      stocked: false,
      name: document.getElementById("product_name").value
    }
    props.addProduct(newProduct)
    props.closeModal()
  }

  return (
    <form>
      <input id="product_name" placeholder="Product Name" />
      <br/>
      <input id="product_price" placeholder="Price" />
      <br/>
      <select id="product_category">
        <option value="">Category</option>
        <option value="Sporting Goods">Sporting Goods</option>
        <option value="Electronics">Electronics</option>
      </select>
      <br/>
      <input type="submit" onClick={props.closeModal} value="Cancel" />
      <input type="submit" onClick={handleClickAdd} value="Add" />
    </form>
    
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalBody);
