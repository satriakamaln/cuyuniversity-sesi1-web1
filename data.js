const nama = 'magicoco';
let usia = 5;

let biodata = document.getElementById('biodata');

function generateBiodata (){
    let generasi;
    if (usia > 10 && usia <= 20) {
        generasi = 'remaja';
    } else if (usia > 20 && usia <= 30){
        generasi = 'dewasa';
    } else if (usia > 30 ){
        generasi = 'tua';
    } else if (usia > 2 && usia < 10) {
        generasi = 'anak-anak';
    }  else {
        generasi = 'bayi';
    }
    return biodata.innerHTML = generasi;
}

generateBiodata();

// operator ternary
function umurSaya (umur){
    return (umur > 10? 'remaja' : 'anak-anak');
}

// console.log(umurSaya(4));

