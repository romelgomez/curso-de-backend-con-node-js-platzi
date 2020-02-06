console.log("node");

// acendente

// a = [4, 1, 1, 1, 3]; //  1, 1
// b = [5, 3, 2, 2, 1, 1];
// c = [4, 1, 1, 1, 3];

// 6 elementos...
// 0, 1, 2;
// 2, 3, 4;
// 4, 5, 6;

const src = [2, 1, 3, 1, 4, 1, 3];

let srcGroups = [];
let srcGroupsCount = 0;
flagCount = 0;
for (var i = 0; i < src.length; i++) {
  srcGroups[srcGroupsCount] = srcGroups[srcGroupsCount] || [];
  srcGroups[srcGroupsCount][flagCount] = src[i];
  if (i === 2) {
    srcGroupsCount++;
    flagCount = 0;
  }
}

// for (var i = 0; i < src.length; i++) {
//   console.log(src[i]);

//   if (flagCount < 3) {
//     srcGroup[srcGroupCount] = srcGroup[srcGroupCount] || [];
//     srcGroup[srcGroupCount][flagCount] = src[i];
//     flagCount++;
//   } else {
//     srcGroupCount++;
//     flagCount = 0;

//     console.log("srcGroupCount", srcGroupCount);
//     console.log("flagCount", flagCount);
//   }
// }
// console.log(srcGroup);

// const sub = [1, 1, 3];
// const remain = [2, 3, 4, 1];

// 2, 1, 3 > [1] [2];
// 3, 1, 4 > [1, 1] [2, 3];
// 4, 1, 3 > [1, 1, 3] [2, 3, 4, 1];

// var __sub = [];
// var __remain = [];
// var i = 0;
// var

// // if (typeof src[i + 2] !== undefined) {

// for (i; i < src.length/src.length/2 ; i++) {
// }

// if (__sub.length === 0) {
//   __sub.push(-1);
// }

// console.log(__sub);
// console.log(__remain);

// if (src[i] < src[i + 2]) {
//     __sub.push(i + 1);
//     __remain.push(i);
//     i = i + 2;
//   } else {
//     __sub.push(i + 2);
//     __remain.push(i);
//     __remain.push(i + 1);
//   }
// }
// src.length--
