var prices = [45, 24, 35, 31, 40, 38, 11];

function result(price, cb) {
  var diff = []
  if (price[0] < price[1]) {
    diff.push(price[1] - price[0])
  } 
  if (price[0] < price[2]) {
    diff.push(price[2] - price[0])  
  } 
  if (price[0] < price[3]) {
    diff.push(price[3] - price[0])  
  } 
  if (price[0] < price[4]) {
    diff.push(price[4] - price[0])  
  } 
  if (price[0] < price[5]) {
    diff.push(price[5] - price[0])  
  } 
  if (price[0] < price[6]) {
    diff.push(price[6] - price[0])
  } 
  if (price[1] < price[2]) {
    diff.push(price[2] - price[1])  
  } 
  if (price[1] < price[3]) {
    diff.push(price[3] - price[1])  
  } 
  if (price[1] < price[4]) {
    diff.push(price[4] - price[1])  
  } 
  if (price[1] < price[5]) {
    diff.push(price[5] - price[1])  
  } 
  if (price[1] < price[6]) {
    diff.push(price[6] - price[1]) 
  } 
  if (price[2] < price[3]) {
    diff.push(price[3] - price[2])  
  } 
  if (price[2] < price[4]) {
    diff.push(price[4] - price[2])  
  } 
  if (price[2] < price[5]) {
    diff.push(price[5] - price[2])  
  } 
  if (price[2] < price[6]) {
    diff.push(price[6] - price[2])
  } 
  if (price[3] < price[4]) {
    diff.push(price[4] - price[3])  
  } 
  if (price[3] < price[5]) {
    diff.push(price[5] - price[3])  
  } 
  if (price[3] < price[6]) {
    diff.push(price[6] - price[3])
  } 
  if (price[4] < price[5]) {
    diff.push(price[5] - price[4])  
  } 
  if (price[4] < price[6]) {
    diff.push(price[6] - price[4])
  } 
  if (price[5] < price[6]) {
    diff.push(price[6] - price[5])
    
  }
  cb(diff)
}

function action(arr) {
  var outcome = Math.max(...arr);
  console.log("The largest possible return is $" + outcome + "!")
}

result(prices, action)