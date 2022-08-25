function penilaian(nilai){
    if (nilai >= 90) {
        console.log("A");
    } else if (nilai>=80 && nilai<=89){
        console.log("B");
    } else if (nilai >=70 && nilai<=79){
        console.log("C");
    } else if (nilai >= 60 && nilai<=69){
        console.log("D");
    } else if (nilai <=59){
        console.log("E");
    } else {
        console.log("Please input valid number");
    }
}

nilai(30);
nilai(75);

