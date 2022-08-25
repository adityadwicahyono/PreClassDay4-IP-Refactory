function rating(usia){
    if (usia >= 21) {
        console.log("DEWASA");
    } else if (usia>=13){
        console.log("REMAJA");
    } else if (usia >=9){
        console.log("BIMBINGAN ORANG TUA");
    } else if (usia <=9){
        console.log("SEMUA USIA");
    } else {
        console.log("Please input valid number");
    }
}

rating(15);
rating(32);