export default function appendToEachArrayValue(array, appendString) {
  const arrayvalue = [];
  for (const idx of array) {
    arrayvalue.push(appendString + idx);
  }

  return arrayvalue;
}
