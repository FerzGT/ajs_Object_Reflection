export function superAttak(objectHerro) {
  const arr = [...objectHerro.special];

  for (let i = 0; i < arr.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(arr[i], 'description')) {
      arr[i].description = 'Описание недоступно';
    }
  }
  return [...arr];
}