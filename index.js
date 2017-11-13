var recipes = {key: "value"}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

//why does it have to be bracket notation

function deleteFromObjectByKey(object, key){
  var object = {};
  var newObj= Object.assign({}, object)
  delete newObj.key
  return object;
}
