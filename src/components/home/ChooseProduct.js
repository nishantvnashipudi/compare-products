import React from 'react';
import {connect} from 'react-redux';
import {setChooseProduct} from '../../actions/index';
const ChooseProduct = props => {
    function onSelectProduct(event){
        if(event && event.target.value){
           props.setChooseProduct(event.target.value);
        }
     }
return (
    <React.Fragment>
    <div className=''>
    <h6>Add a product</h6>
    <select className='drop-down' name='choose dropdown' key='choose-dropdown' onChange={event => onSelectProduct(event)}>
        <option value={props.choosedProduct}>Choose product</option>
        {props.chooseProducts && props.chooseProducts.map(opton => (
                  <option value={opton.modelId} key={opton.modelId}>{opton.title}</option>
    ))}
    </select>
 </div>
    </React.Fragment>
);
}

const mapDispatchToProps = {
    setChooseProduct
  };
  const mapStateToProps = state => ({
    chooseProducts: state.productState.chooseProducts,
    choosedProduct: state.productState.choosedProduct,
  });
  
  
  export default connect(mapStateToProps, mapDispatchToProps) (ChooseProduct);