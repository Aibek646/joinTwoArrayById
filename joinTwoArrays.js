// var join = (arr1, arr2) => {
//   const mergedArray = [...arr1, ...arr2];
//   const newArray = {};
//   mergedArray.forEach((obj) => {
//     if (newArray[obj.id] === undefined) {
//       newArray[obj.id] = obj;
//     } else {
//       newArray[obj.id] = { ...newArray[obj.id], ...obj };
//     }
//   });
//   return Object.values(newArray);
// };

// arr1 = [
//   { id: 1, x: 1 },
//   { id: 2, x: 9 },
// ];

// arr2 = [{ id: 3, x: 5 }];

// arr3 = [
//   { id: 1, x: 10, y: 20 },
//   { id: 2, x: 3, y: 6 },
// ];

// arr4 = [
//   { id: 2, x: 10, y: 20 },
//   { id: 3, x: 0, y: 0 },
// ];

// arr5 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];

// arr6 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

// const res = join(arr5, arr6);
// console.log(res);

// using new Map()

function join(arr1, arr2) {
  const map = new Map();
  for (const obj of arr1) {
    map.set(obj.id, obj);
  }
  for (const obj of arr2) {
    if (!map.has(obj.id)) {
      map.set(obj.id, obj);
    } else {
      const prevObj = map.get(obj.id);
      for (const key of Object.keys(obj)) {
        prevObj[key] = obj[key];
      }
    }
  }
  const res = new Array();
  for (let key of map.keys()) {
    res.push(map.get(key));
  }
  return res;
}

const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];

const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

const result = join(arr1, arr2);
console.log(result);
