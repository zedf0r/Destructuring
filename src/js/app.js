export function getSpecialAttack(obj) {
  const extractedArray = [];
  const specialArray = obj.special;
  for (let i = 0; i < specialArray.length; i++) {
    if (!specialArray[i].description) {
      specialArray[i].description = "Описание недоступно";
    }
    extractedArray.push(specialArray[i]);
  }
  return extractedArray;
}
