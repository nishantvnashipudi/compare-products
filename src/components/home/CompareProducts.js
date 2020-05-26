import React from 'react';
import {connect} from 'react-redux';
const CompareProducts = props => {

   function productsCompare(){
        if(props.compareProducts){
          const filteredHDTech = props.compareProducts.map(productimages => productimages['HD Technology & Resolution']);
          const filteredSize = props.compareProducts.map(productimages => productimages['Size']);
          const filteredScreenType = props.compareProducts.map(productimages => productimages['Screen Type']);
          const filtered3D = props.compareProducts.map(productimages => productimages['3D']);
    
          const filteredSmartTV = props.compareProducts.map(productimages => productimages['Smart TV']);
          const filteredCurveTV = props.compareProducts.map(productimages => productimages['Curve TV']);
          const filteredTouchscreen = props.compareProducts.map(productimages => productimages['Touchscreen']);
          const filteredMotionSensor = props.compareProducts.map(productimages => productimages['Motion Sensor']);
          const filteredLaunchYear = props.compareProducts.map(productimages => productimages['Launch Year']);
    
          
          const filtered3GDongle = props.compareProducts.map(productimages => productimages['3G Dongle Plug and Play']);
          const filteredBuiltInWiFi = props.compareProducts.map(productimages => productimages['Built In Wi-Fi']);
          const filteredEthernetRJ45 = props.compareProducts.map(productimages => productimages['Ethernet (RJ45)']);
          const filteredWirelessReady = props.compareProducts.map(productimages => productimages['Wireless Ready']);
    
    
    
          return (
                  <div>
                  {props.compareProducts && props.compareProducts.length ?
                  <table className='table-center border-top'>
                    <tbody className="">
                            <React.Fragment>
                              <tr key={'Display'} className='header-border'>
                               <th key={'display'}>DISPLAY</th>
                              </tr>
    
                              <tr key={'Size'}>
                               <th key={'size'}>Size</th>
                              {filteredSize.map(k => <td key={k}>{k}</td>)}
                              </tr>
    
                              <tr key={'ScreenType'}>
                               <th key={'screenType'}>Screen Type</th>
                              {filteredScreenType.map(k => <td key={k}>{k}</td>)}
                              </tr>
    
                              <tr key={'3D'}>
                               <th key={'3d'}>3D</th>
                              {filtered3D.map(k => <td key={k}>{k}</td>)}
                              </tr>
    
                              <tr key={'HDTechnology'}>
                               <th key={'hDTechnology'}>HD Technology & Resolution</th>
                              {filteredHDTech.map(k => <td key={k}>{k}</td>)}
                              </tr>
    
    
                              <tr key={'General Features'} className='header-border'>
                               <th key={'general Features'}>GENERAL FEATURES</th>
                              </tr>
                              
                              <tr key={'SmartTV'}>
                               <th key={'smartTV'}>Smart TV</th>
                              {filteredSmartTV.map(k => <td key={k}>{k}</td>)}
                              </tr>
    
                              <tr key={'CurveTV'}>
                               <th key={'curveTV'}>Curve TV</th>
                              {filteredCurveTV.map(k => <td key={k}>{k}</td>)}
                              </tr>
    
                              <tr key={'Touchscreen'}>
                               <th key={'touchscreen'}>Touchscreen</th>
                              {filteredTouchscreen.map(k => <td key={k}>{k}</td>)}
                              </tr>
    
    
                              <tr key={'MotionSensor'}>
                               <th key={'motionSensor'}>Motion Sensor</th>
                              {filteredMotionSensor.map(k => <td key={k}>{k}</td>)}
                              </tr>
    
                              <tr key={'LaunchYear'}>
                               <th key={'launchYear'}>Launch Year</th>
                              {filteredLaunchYear.map(k => <td key={k}>{k}</td>)}
                              </tr>
    
                              
    
                              <tr key={'InternetFeatures'} className='header-border'>
                               <th key={'internetFeatures'}>INTERNET FEATURES</th>
                              </tr>
    
                              <tr key={'BuiltInWiFi'}>
                               <th key={'BuiltInWiFi'}>Built In Wi-Fi</th>
                              {filteredBuiltInWiFi.map(k => <td key={k}>{k}</td>)}
                              </tr>
    
                              <tr key={'WirelessReady'}>
                               <th key={'wirelessReady'}>Wireless Ready</th>
                              {filteredWirelessReady.map(k => <td key={k}>{k}</td>)}
                              </tr>
    
    
                              <tr key={'Ethernet'}>
                               <th key={'ethernet'}>Ethernet (RJ45)</th>
                              {filteredEthernetRJ45.map(k => <td key={k}>{k}</td>)}
                              </tr>
    
                          
                              <tr key={'3G'}>
                               <th key={'3G'}>3G Dongle Plug and Play</th>
                              {filtered3GDongle.map(k => <td key={k}>{k}</td>)}
                              </tr>
    
    
    
    
                            </React.Fragment>
                      </tbody>
          
                    </table>
                    : 'none'}
              </div>
          );
        }
      }
return (
    <React.Fragment>
    {props.compareProducts ? productsCompare() : null}
    </React.Fragment>
);
}

const mapDispatchToProps = {
  };
  const mapStateToProps = state => ({
   compareProducts: state.productState.compareProducts,
  });
  
  
  export default connect(mapStateToProps, mapDispatchToProps) (CompareProducts);