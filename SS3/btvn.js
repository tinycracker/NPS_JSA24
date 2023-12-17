// /// Chữa bài:
// let height = 5;

// //// Vẽ tam giác bằng cách in ra số
// for (let i = 1; i <= height; i++) {
//   let line = ""

//   // In ra khoảng trắng bên trái
//   for (let j = 1; j <= height - i; j++) {
//     line = line + " ";
//   }

//   // In ra số 1
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     line = line + "1"
//   }

//   console.log(line);
// } 




// //câu 2
// let arr = [1,2,3,4,5,6,7,8,9,10,0];
// for(let key of arr){
//     if(key%2 == 0){ //kiểm tra số chẵn}
//         console.log(key);
//     }
// }

//Chữa câu 3
let danhBa = [{
    name: "Quân",
    phoneNumber: 1234567890,
    email: "quan@gmail.com"
},
{
    name: "Lê Anh",
    phoneNumber: 6868686868,
    email: "leanh@gmail.com"
}
];

//lưu trữ trong ls
localStorage.setItem("danhBa", JSON.stringify(danhBa));

let input;

do {
    input = prompt("Mời người dùng nhập vào yêu cầu C,R,U,D. Nhập Q để thoát chương trình");
    if (input.trim() == "c") {
        createContact();
    }
    else if (input.toLowerCase().trim() == "r") {
        readContact();
    }
    else if (input.toLowerCase().trim() == "u") {
        updateContact();
    }
    else if (input.toLowerCase().trim() == "d") {
        deleteContact();
    }
    else {
        alert("Chưa đúng yêu cầu nhập. Mời nhập lại!!")
    }
}
while (input == "c" || input == "r" || input == "u" || input == "d" && input != "q");

function createContact() {
    const data = {
        name: prompt("Mời người dùng nhập vào tên muốn thêm"),
        phoneNumber: prompt("Mời người dùng nhập vào số điện thoại muốn thêm"),
        email: prompt("Mời người dùng nhập vào email muốn thêm"),
    }

    let getDanhBa = JSON.parse(localStorage.getItem("danhBa")); //Lấy dữ liệu từ ls về
    getDanhBa.push(data) //thêm mới dât vào mảng
    localStorage.setItem("danhBa", JSON.stringify(getDanhBa));// cập nhật mảng mới nhất đã được thêm lên LS
    return data;

}


function readContact() {
    let getDanhBa = JSON.parse(localStorage.getItem("danhBa"));
    for (let key of getDanhBa) {
        console.log(`${key.name}: ${key.phoneNumber}`);
    }
}

function updateContact() {
    let getDanhBa = JSON.parse(localStorage.getItem("danhBa")); //Lấy dữ liệu từ ls về
    let nameUpdate = prompt("Mời người dùng nhập vào tên danh bạ muốn update").trim();

    let viTri;

    for (let key in getDanhBa) {
        if (getDanhBa[key].name == nameUpdate) {
            viTri = key
        }
    }

    getDanhBa[viTri] = createContact();
    localStorage.setItem("danhBa", JSON.stringify(getDanhBa));
}