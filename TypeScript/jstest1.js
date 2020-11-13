////                Câu 1:
/////            Dung Array.map()
function mapTwoArrayEqualLengthUseMap(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        console.log("Tham so khong phai mang");
    }else if (array1.length === array2.length) {
        let newArray = array1.map((current, index) => {
            return [current, array2[index]];
        })
        console.log(newArray);
    } else {
        console.log("Hai mang khong cung chieu dai");
    }
}
///Expect: [[1,4],[2,5],[3,6]]
mapTwoArrayEqualLengthUseMap([1, 2, 3], [4, 5, 6]);
///Expect: hai mang khong cung chieu dai
mapTwoArrayEqualLengthUseMap([1, 2, 3], [4, 5, 6,7]);
///Expect: Tham so khong phai mang.
mapTwoArrayEqualLengthUseMap(1, [4, 5, 6, 7]);


function mapTwoArrayNotEqualLengthUseMap(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        console.log("Tham so khong phai mang");
    }else if (array1.length <= array2.length) {
        let arrayMap = array1.map((current, index) => {
            return [current, array2[index]];
        })
        console.log(arrayMap);
    } else {
        let arrayMap = array2.map((current, index) => {
            return [array1[index],current];
        })
        console.log(arrayMap);
    }
}
///Expect: [[1,4],[2,5],[3,6]]
mapTwoArrayNotEqualLengthUseMap([1, 2, 3], [4, 5, 6]);
///Expect: [[1,4],[2,5],[3,6]]
mapTwoArrayNotEqualLengthUseMap([1, 2, 3], [4, 5, 6,7]);
///Expect: Tham so khong phai mang.
mapTwoArrayNotEqualLengthUseMap(1, [4, 5, 6, 7]);

//////                        Dung Array.forEach()
function mapTwoArrayEqualLengthUseForEach(array1, array2){
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        console.log("tham so khong phai mang");
    } else if (array1.length === array2.length) {
        let arrayMap = [];
        array1.forEach((itemArray1, indexArray1) => {
            array2.forEach((itemArray2, indexArray2) => {
                indexArray1 === indexArray2 ? arrayMap.push([itemArray1, itemArray2]) : 0;
           })
        });
        
        console.log(arrayMap);
    } else {
        console.log("Hai mang khong cung do dai");
    }
}
///Expect: [[1,4],[2,5],[3,6]]
mapTwoArrayEqualLengthUseForEach([1, 2, 3], [4, 5, 6]);
///Expect: hai mang khong cung chieu dai
mapTwoArrayEqualLengthUseForEach([1, 2, 3], [4, 5, 6,7]);
///Expect: Tham so khong phai mang.
mapTwoArrayEqualLengthUseForEach([1, 2, 3], "b");




function mapTwoArrayNotEqualLengthUseForEach(array1, array2){
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        console.log("tham so khong phai mang");
    } else {
        let arrayMap = [];
        array1.forEach((itemArray1, indexArray1) => {
            array2.forEach((itemArray2, indexArray2) => {
                indexArray1 === indexArray2 ? arrayMap.push([itemArray1, itemArray2]) :0;
           })
        });
        
        console.log(arrayMap);
    }
}
///Expect: [[1,4],[2,5],[3,6],[0,7]]
mapTwoArrayNotEqualLengthUseForEach([1, 2, 3, 0, 9], [4, 5, 6, 7]);
///Expect: [[1,4],[2,5],[3,6]]
mapTwoArrayNotEqualLengthUseForEach([1, 2, 3], [4, 5, 6]);
///Expect: Tham so khong phai mang.
mapTwoArrayNotEqualLengthUseForEach([1, 2, 3], 3);


function mapTwoArrayEqualLengthUseReduce(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        console.log("Tham so khong phai mang");
    } else if (array1.length === array2.length) {
        let arrayMap = [];
        array1.reduce((accumulatorArray1, currentArray1,currentIndexArray1) => {
            array2.reduce((accumulatorArray2, currentArray2,currentIndexArray2) => {
               currentIndexArray1===currentIndexArray2? arrayMap.push([currentArray1, currentArray2]): 0;
              },0)
          },0
        )
        console.log(arrayMap);
        
    } else {
        console.log("Hai mang khong cung do dai");
    }
}

///Expect: Hai mang khong cung do dai
mapTwoArrayEqualLengthUseReduce([1, 2, 3, 0, 9], [4, 5, 6, 7]);
///Expect: [[1,4],[2,5],[3,6]]
mapTwoArrayEqualLengthUseReduce([1, 2, 3], [4, 5, 6]);
///Expect: Tham so khong phai mang.
mapTwoArrayEqualLengthUseReduce([1, 2, 3], 3);


function mapTwoArrayNotEqualLengthUseReduce(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        console.log("Tham so khong phai mang");
    } else  {
        let arrayMap = [];
        array1.reduce((accumulatorArray1, currentArray1,currentIndexArray1) => {
            array2.reduce((accumulatorArray2, currentArray2,currentIndexArray2) => {
               currentIndexArray1===currentIndexArray2? arrayMap.push([currentArray1, currentArray2]): 0;
              },0)
          },0
        )
        console.log(arrayMap);    
    } 
}
///Expect: [[1,4],[2,5],[3,6]]
mapTwoArrayNotEqualLengthUseReduce([1, 2, 3,4], [4, 5, 6]);
///Expect: [[1,4],[2,5],[3,6]]
mapTwoArrayNotEqualLengthUseReduce([1, 2, 3], [4, 5, 6]);
///Expect: Tham so khong phai mang.
mapTwoArrayNotEqualLengthUseReduce([1, 2, 3], 3);




//////localStorage

// if ((typeof localStorage !== "undefined")) {
//     console.log("co ho tro");
// } else {
//     console.log("Khong ho tro");
// }
// // localStorage.setItem("key", "value");
// // console.log(localStorage.getItem("key"));
// localStorage.name = "xin chao";
// localStorage.setItem("age", 20);
// localStorage.class = "it";
// console.log(`${localStorage.name}-${localStorage.age}-${localStorage.class}`);
// localStorage.removeItem('age');
// localStorage.clear();

// if (typeof sessionStorage !== undefined) {
//     console.log("co ho tro");   
// } else {
//     console.log("khong ho tro");
// }
// sessionStorage.setItem('key1', 'value1');
// sessionStorage.key2 = 'value2';
// sessionStorage['key3'] = 'value3';
document.cookie = "key4=value4";
document.cookie = "key3=value3";

var xcookie = getCookie(key3);
console.log(document.cookie);
console.log(xcookie);