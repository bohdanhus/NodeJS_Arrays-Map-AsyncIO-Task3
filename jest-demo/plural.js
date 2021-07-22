module.exports = function plural(num, nom, gen, plu) {  
  if (num % 10 == 0) {
    return `${num} ${plu}`;
  } else if (num == 1) {
    return `${num} ${nom}`;
  } else if (num % 10 > 10 || num % 10 < 20){
	return `${num} ${plu}`;
  } else if (num % 10 >= 2 || num % 10 <= 4){
    return `${num}  ${gen}`;
  } else if (num % 10 >= 5 || num % 10 <= 10){
	return `${num} ${plu}`;
  }
  return; 
};
