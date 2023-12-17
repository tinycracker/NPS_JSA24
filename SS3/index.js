// cú pháp lưu trữ với local storage

// let a= "Hello World!!";
// localStorage.setItem("a",a);

// let b = 123456;
// localStorage.setItem("b", b);

// //Cú pháp truy vấn giữ liệu với local storage
// console.log(
// localStorage.getItem("a")
// );

// console.log(
// localStorage.getItem("b")
// );

// // Cú pháp chuẩn: ép kiểu dữ liệu trước về string => Lưu trữ với LS
// let a = 123456;
// localStorage.setItem("a", JSON.stringify(a));

// //truy vấn dữ liệu từ LS với cú pháp chuẩn
// console.log(
//     JSON.parse( localStorage.getItem("a"))
// );


// //lưu trữ mảng
// let arr = [1,2,3,4,"Hello", "Hi", true,false, {name: "Hiếu", age : 26}];
// //lưu trữ với LS
// localStorage.setItem("arr", JSON.stringify(arr));

// //Lấy về với cú pháp chuẩn
// console.log(
//     JSON.parse(localStorage.getItem("arr"))
// );

// let danhBa = [{
//     name: "Hieu",
//     phone: "123456",
//     email: "hieu@gmail.com"
// },
// {
//     name: "Nguyễn Văn A",
//     phone: "2345678",
//     email: "a@gmail.com"
// },
// {
//     name: "Nguyễn Văn B",
//     phone: "3456789",
//     email: "b@gmail.com"
// },
// ]