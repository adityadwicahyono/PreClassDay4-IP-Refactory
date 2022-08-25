// program to check leap year
function cekKabisat(tahun) {

    //three conditions to find out the leap year
    if ((0 == tahun % 4) && (0 != tahun % 100) || (0 == tahun % 400)) {
        console.log(tahun + ' Kabisat');
    } else {
        console.log(tahun + ' Bukan Kabisat');
    }
}

cekKabisat(1900)
cekKabisat(2000)
cekKabisat(2001)
cekKabisat(2016)