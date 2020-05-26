import React from 'react';
import {connect} from 'react-redux';
import '../../css/style.css';
import {getProducts, setChooseProduct, removeProduct} from '../../actions/index';
import CompareProductsTable from './CompareProducts';
import ChooseProduct from './ChooseProduct';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
   this.props.getProducts();
  }

productsCount(){
return this.props.compareProducts.length;
}
showProductSummary(){
  if(this.props.compareProducts && this.props.compareProducts.length){
   return this.props.compareProducts.map(product => (
      <div>
        <span class="float-right">
          <img src={'https://codesandbox.io/s/github/nishantvnashipudi/compare-products?file=/public' + '/close.jpg'} alt='close'
          value={product.modelId}
           onClick={() => this.props.removeProduct(product.modelId)} /></span>
        {/* <img src={process.env.PUBLIC_URL + '/telivision0.jpg'} alt='tv'/>  */}
        <img src={'https://codesandbox.io/s/github/nishantvnashipudi/compare-products?file=/public' + '/telivision0.jpg'} alt='tv'/>
      <p className='product-title'>{product.title}</p>
      <p><b><i className='fa fa-inr' aria-hidden='true'></i>{product.finalPrice}</b> 
    <span className='actual-price'><del><i className='fa fa-inr' aria-hidden='true'>
      </i>{product.price}</del></span>
      <span className='off-color'><b>{product.totalDiscount} off</b></span>
      </p>
      </div> 
     ));
  } return null;

}
  render() {
  return (
    <div className='container-fluid'>
        <div className='row justify-content-center'>
            <div className='col-8'>

            <div class="flex-container">
              <div>
              <h3>Compare</h3>
                  <p>{this.productsCount()} items selected</p>
                  {this.props.products ? <ChooseProduct /> : null}
                </div>
                {this.showProductSummary()}
            </div>
                <div className='row'>
                 <div className='col-4'>
                    <input type='checkbox' id='product' name='product' value='product' />
                    <label for='product' className='show-diff'> Show only Differences</label>
                 </div>  
                </div>
                <div className='row'>
                      <CompareProductsTable />
                </div>
                </div>
            </div>
        </div>
       
  );
  }
}

const mapDispatchToProps = {
  getProducts,
  setChooseProduct,
  removeProduct
};
const mapStateToProps = state => ({
 products: state.productState.products,
 compareProducts: state.productState.compareProducts
});


export default connect(mapStateToProps, mapDispatchToProps) (Home);
