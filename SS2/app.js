// while(1<2){
//     console.log("vòng lặp chạy");
// }


// //// in ra các số từ 1 đến 10 trong màn hình console
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i = i + 1;
// }

// ////code do while: dùng khi cần chạy trước khối lệnh lặp
// let i = 1;
// do{
//     console.log(i);
// i = i+1;
// }
//  while (i <= 10);


// ////vd với vòng lặp for

// for(let i= 1; 1<=10;i++){
//     console.log(i);
    
// }

// ////khai báo mảng
// //c1
// let arr = [1,"hello","hi"];
// console.log(arr[1]);

// // Sô lượng phần tử trong mảng
// console.log(arr.length);

// //c2:
// let arr1 = new Array();

// // kiểm tra kiểu dữ liệu mảng
// console.log(
//     Array.isArray(arr)
// );

// //thêm phần tử vào cuối ds
// arr.push("phần tử được thêm", "phần tử thêm 2")
// console.log("arr:", arr);

// // xóa phần tử cuối dùng ds
// arr.pop();

// // thêm phần tử vào đầu ds
// arr.unshift("phần tử thêm vào đầu ds");

// //xóa phần tử đầu tiên trong ds

// // method splice
// /*
// arr.splice(box1, box2, box3);
// box1: vị trí phần tử
// box2: xóa ? phần tử kể từ vị trí box1
// box3: thêm phần tử kể từ vị trí box1
// */

// arr.splice(3,1);
// console.log(arr);

// //Ví dụ minh học duyệt mảng
// let arr = [1, 2, 3, 4, 5, 6, 7];

// // in ra các phần tử mảng lên màn hình console
// for(let i = 0; i < arr.length; i++){
// console.log(arr[i]);
// }


// //object
// let obj = {
//     name: "a",
//     age: 26,
//     job:"web developer",
//     dev(){
//         return"HTML CSS JS"

// }

// //thêm thuộc tính vào đổi tượng
// obj.hobbies = ["dev", "reading books", "cooking"];

// //thêm phương thức vào đối tượng
// obj.fixbug = function () {
//     return "execute code"
// }

// //duyệt đối tượng
// for (let key in obj) {
//     console.log(key); /// in ra các khóa của đối tượng
// }

// //update thuộc tính/ phương thức
// obj.age = 27;

// //delete thuộc tính, phương thức
// delete obj.name;