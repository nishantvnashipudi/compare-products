
//  function getFeatureNameValue(feature, modelId){
//     let featuresArray = [];
//     let obj = {
//         title: feature.title, 
//     } 
//     if(feature){
//         featuresArray = feature.features.map(ele => {
//             return {
//                 featureName: ele.featureName,
//                 value: ele.values[modelId],
//                 isDifferent: ele.hasOwnProperty('properties') ? ele.properties.isDifferent : false
//             };
//         });
//         obj.features = featuresArray;
//         return obj;
//     } return obj;
//  }
function arrayToObject(data){
    var obj = {};
  for (var i = 0; i < data.length; i++)
     obj[data[i].featureName] = data[i].values;
     return obj;
 }
function getFeatureNameValue(feature, modelId){
let featuresArray = [];
if(feature){
  featuresArray = feature.map(ele => {
        return {
        featureName: ele.featureName,
        values: ele.values[modelId],
        isDifferent: ele.hasOwnProperty('properties') ? ele.featureName : false

    }
  });
  //   obj.features = featuresArray;
    return arrayToObject(featuresArray);
} return featuresArray;
}

function getPrices(productPricingSummary, modelId){
const {finalPrice, price, totalDiscount} = productPricingSummary[modelId];
return {finalPrice, price, totalDiscount};
}


function getTitle(titles, modelId){
    const {title, subtitle, totalDiscount} = titles[modelId];
    return {title, subtitle, totalDiscount}; 
    }
  // Fom API getting all products as group creating each product as separate object  
  export function parseProducts(products){
   const displayFeatures = products.featuresList.filter(ele => ele.title === 'Display');
   const generalFeatures = products.featuresList.filter(ele => ele.title === 'General Features');
   const internetFeatures = products.featuresList.filter(ele => ele.title === 'Internet Features');
   const modelIds = Object.keys(displayFeatures[0].features[0].values);
   
   let parsedProducts = modelIds.map(modelId => {
    return {
        modelId: modelId,
        ...getFeatureNameValue(displayFeatures[0].features, modelId),
        ...getFeatureNameValue(generalFeatures[0].features, modelId),
        ...getFeatureNameValue(internetFeatures[0].features, modelId),
        images: products.compareSummary.images[modelId],
        ...getPrices(products.compareSummary.productPricingSummary, modelId),
        ...getTitle(products.compareSummary.titles, modelId)
    };
   });
   // console.log(parsedProducts);
   return parsedProducts;
  }

  export function parseDropDownOptions(products){
      let options = [];
      if(products && products.length){
        options = products.map(product => {
              return {
                  title: product.title,
                  modelId: product.modelId
              }
          }); return options;
      } return options;
  }

  export function getModelIds(options){
    let keys = {};   
    if(options && options.length){
        keys[options[0].modelId] = true;
      } return keys
  }