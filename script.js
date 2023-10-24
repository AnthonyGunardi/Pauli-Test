let mulai = document.querySelector("#mulai");
let aturan = document.querySelector("#aturan");
let tombolKeluar = document.querySelector("#keluar");
let tombolLanjut = document.querySelector("#lanjut");
let tes = document.querySelector("#tes");
let waktu = document.querySelector("#waktu");
let teksSoal = document.querySelector("#teksSoal");
let opsi1 = document.querySelector("#opsi1");
let opsi2 = document.querySelector("#opsi2");
let opsi3 = document.querySelector("#opsi3");
let opsi4 = document.querySelector("#opsi4");
let opsi5 = document.querySelector("#opsi5");
let opsi6 = document.querySelector("#opsi6");
let opsi7 = document.querySelector("#opsi7");
let opsi8 = document.querySelector("#opsi8");
let opsi9 = document.querySelector("#opsi9");
let opsi10 = document.querySelector("#opsi10");
let poinSementara = document.querySelector("#poinSementara");
let hasil = document.querySelector("#hasil");
let tesSelesai = document.querySelector("#tesSelesai");
let totalPoin = document.querySelector("#totalPoin");
let keluarTes = document.querySelector("#keluarTes");
let ulangTes = document.querySelector("#ulangTes");
let antrianJawaban = document.querySelectorAll(".antrianJawaban");

let index = 0;
let timer = 60;
let interval = 0;
let jumlahPoin = 0;
let jumlahJawaban = 0;

// simpan nilai jawaban
let UserAns = undefined;

// tombol mulai diklik
// mulai.addEventListener("click", () => {
//     mulai.style.display = "none";
//     aturan.style.display = "block";
// });

// tombol exit diklik
tombolKeluar.addEventListener("click", () => {
    mulai.style.display = "block";
    aturan.style.display = "none";
});

// timer
let hitungMundur = () => {
    timer += 1;
    if (timer <= 6 && timer >= 0) {
        waktu.style.color = "rgba(207, 29, 29, 0.747)";
    }

    if (timer === 0) {
        let rasioBenar = jumlahPoin / jumlahJawaban * 100;

        for (i = 0; i <= 9; i++) {
            antrianJawaban[i].classList.add("disabled");
        }
        clearInterval(interval);
        tes.style.display = "none";
        tesSelesai.innerHTML = `Waktu Anda habis!!`;
        totalPoin.innerHTML = `Jawaban Benar Anda adalah ${rasioBenar.toFixed(2)} %`;
        hasil.style.display = "block";
    } else {
        timer--;
        waktu.innerText = timer--;
    }
}

//setInterval(hitungMundur,1000);
let loadData = () => {
    teksSoal.innerText = Tes[index].soal;
    opsi1.innerText = Tes[index].opsi1;
    opsi2.innerText = Tes[index].opsi2;
    opsi3.innerText = Tes[index].opsi3;
    opsi4.innerText = Tes[index].opsi4;
    opsi5.innerText = Tes[index].opsi5;
    opsi6.innerText = Tes[index].opsi6;
    opsi7.innerText = Tes[index].opsi7;
    opsi8.innerText = Tes[index].opsi8;
    opsi9.innerText = Tes[index].opsi9;
    opsi10.innerText = Tes[index].opsi10;
}

// tombol lanjut diklik
tombolLanjut.addEventListener("click", () => {
    tes.style.display = "block";
    aturan.style.display = "none";

    loadData();
    interval = setInterval(hitungMundur, 1000);

    poinSementara.innerHTML = `Poin : ${jumlahPoin = 0}`;
});

antrianJawaban.forEach((jawaban, nomorJawaban) => { 
    jawaban.addEventListener("click", () => {
        switch (nomorJawaban) {
            case -1:
                nomorJawaban = 9;
                break;
            default:
                break;
        }
        
        switch (nomorJawaban) {
            case 0:
                nomorJawaban = 1;
                break;
            case 1:
                nomorJawaban = 2;
                break;
            case 2:
                nomorJawaban = 3;
                break;
            case 3:
                nomorJawaban = 4;
                break;
            case 4:
                nomorJawaban = 5;
                break;
            case 5:
                nomorJawaban = 6;
                break;
            case 6:
                nomorJawaban = 7;
                break;
            case 7:
                nomorJawaban = 8;
                break;
            case 8:
                nomorJawaban = 9;
                break;
            case 9:
                nomorJawaban = 0;
                break;
            default:
                break;
        }
        
        if (nomorJawaban === Tes[index].jawaban) {
            jumlahPoin = jumlahPoin + 1;
            jumlahJawaban = jumlahJawaban + 1;
            nomorJawaban = nomorJawaban - 1;
            next_question();
        } else {
            jumlahPoin = jumlahPoin + 0;
            jumlahJawaban = jumlahJawaban + 1;
            nomorJawaban = nomorJawaban - 1;
            next_question();
        }
        // hentikan hitung mundur
        clearInterval(interval);
    })
});

let next_question = () => {
    //    if index is less then Tes.length
    if (index !== Tes.length - 1) {
        index++;
        loadData();
        poinSementara.innerHTML = `Poin : ${jumlahPoin}`;
        interval = setInterval(hitungMundur, 1000);
    } else {
        index = 0;
        clearInterval(interval);
        tes.style.display = "none";
        totalPoin.innerHTML = `Total poin Anda adalah ${jumlahPoin}`;
        hasil.style.display = "block";
    }
    for (i = 0; i <= 9; i++) {
        antrianJawaban[i].classList.remove("disabled");
    }
}

// tombol keluar tes diklik
keluarTes.addEventListener("click", () => {
    window.location.reload();
});

// ulangi tes saat tombol ulangi tes diklik
ulangTes.addEventListener("click", () => {
    window.location.reload();
});