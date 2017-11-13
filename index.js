var recipes = {key: "value"}

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, object, {key: "value"})
  return object;
}
