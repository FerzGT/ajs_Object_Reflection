export default function orderByProps(object, arrHero) {
  const copyObject = { ...object };
  const resultArr = [];
  for (const prop in copyObject) {
    if (arrHero.includes(prop)) {
      const resultObject = {
        key: prop,
        value: copyObject[prop],
      };
      resultArr.push(resultObject);
    }
  }
  resultArr.sort((a, b) => arrHero.indexOf(a.key) - arrHero.indexOf(b.key));

  const alphabetArr = [];
  for (let i = 0; i < arrHero.length; i++) {
    delete copyObject[arrHero[i]];
  }
  for (const prop in copyObject) {
    if (Object.prototype.hasOwnProperty.call(copyObject, prop)) {
      const resultObject = {
        key: prop,
        value: copyObject[prop],
      };
      alphabetArr.push(resultObject);
    }
  }
  alphabetArr.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    return 1;
  });
  return [...resultArr, ...alphabetArr];
  }