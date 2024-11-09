export function getSpecialAttack(obj) {
  const extractedArray = [];
  const { special: specialArray } = obj;
  for (let i = 0; i < specialArray.length; i++) {
    if (!specialArray[i].description) {
      specialArray[i].description = "Описание недоступно";
    }
    extractedArray.push(specialArray[i]);
  }
  return extractedArray;
}