let diem = Number(prompt("Mời người dùng nhập vào điểm số"));
console.log(diem);

if(diem >= 8 && diem <= 10){
    console.log("học sinh giỏi");
}

else if(diem>= 6.5 && diem <8){
    console.log("học sinh khá");
}

else if(diem>= 5 && diem <6.5){
    console.log("học sinh trung bình");
}

else if(diem>= 0 && diem <5){
    console.log("học sinh yếu");
}

else{
        console.log("không xếp loại");
    
}
