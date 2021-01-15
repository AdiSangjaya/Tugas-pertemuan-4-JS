//objec literal
let siswa = {
    nama : "Adi Sangjaya",
    usia : 20,
    lulusan : "SMA",
    alamat : {
        jalan :" Bogares lor",
        kecamatan : "Pangkah",
        kota : "tegal"
    },
    tampilkan : function (){
        alert('nama : '+siswa.nama+ ', Usia : '+siswa.usia);
    }
};

console.log(siswa);
siswa.email = "mail@mail.com";
console.log(siswa);

// let siswaarray = {
//     "Adi Sangjaya", 20, "SMA"
// };

//Function DECAlaTION
// function objectMahasiswa(nama, usia, lulusan) {
//     let data = {};
//     data.nama = nama;
//     data.usia = usia;
//     data.lulusan = lulusan; 
//     return data; 
// }

// let mahasiswa = objectMahasiswa("usin", 100231, "havard")
// let mahasiswabaru = objectMahasiswa("ag", 1000,"havars")

//fungtion construktor
function Motor(merek, tahun, warna) {
    // let thins = {};
    this.merek = merek;
    this.tahun = tahun;
    this.warna = warna;
    // return this
}

let beat = new Motor("Beat", 2007, "putih");


//latihan
// function latihan( a, b) {
//     let angka = {};
//     latihan.a = 12,
//     latihan.b = 100,
//     latihan.hitung = function () {
//         alert(latihan.a + latihan.b);
//     }
// }

// let latihan2 = latihan(a,b);



//tugas
let mahasiswa = {
    nama : "Adi Sangjaya",
    kelas : "3A",
    alamat : " Bogares lor",
    hobi  : {
        suka : "Tidur"
    },
    tampilkan2 : function (){
        alert('nama : '+mahasiswa.nama+ ', Kelas : '+mahasiswa.kelas ,' Alamat :' +mahasiswa.alamat ," hobi :" + mahasiswa.hobi );
    
}
}
