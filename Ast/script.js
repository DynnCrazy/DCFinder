const dataroom = [
    {
        "image": "Img/r1_normal.jpg",
        "anomali": [
            {
                "img": "Img/r1_extra_1.jpg",
                "type": "extra"
            },
            {
                "img": "Img/r1_extra_2.jpg",
                "type": "extra"
            },
            {
                "img": "Img/r1_extra_3.jpg",
                "type": "extra"
            },
            {
                "img": "Img/r1_intrdr_1.jpg",
                "type": "intruder"
            },
            {
                "img": "Img/r1_miss_1.jpg",
                "type": "missing"
            },
            {
                "img": "Img/r1_mvnt_1.jpg",
                "type": "movement"
            },
            {
                "img": "Img/r1_mvnt_2.jpg",
                "type": "movement"
            }
        ]
    },
    {
        "image": "Img/r2_normal.jpg",
        "anomali": [
            {
                "img": "Img/r2_change_1.jpg",
                "type": "change"
            },
            {
                "img": "Img/r2_extra_1.jpg",
                "type": "extra"
            },
            {
                "img": "Img/r2_intrdr_1.jpg",
                "type": "intruder"
            },
            {
                "img": "Img/r2_miss_1.jpg",
                "type": "missing"
            },
            {
                "img": "Img/r2_miss_2.jpg",
                "type": "missing"
            },
            {
                "img": "Img/r2_mvnt_1.jpg",
                "type": "movement"
            },
            {
                "img": "Img/r2_size_1.jpg",
                "type": "size"
            }
        ]
    },
    {
        "image": "Img/r3_normal.jpg",
        "anomali": [
            {
                "img": "Img/r3_extra_1.jpg",
                "type": "extra"
            },
            {
                "img": "Img/r3_extra_2.jpg",
                "type": "extra"
            },
            {
                "img": "Img/r3_intrdr_1.jpg",
                "type": "intruder"
            },
            {
                "img": "Img/r3_miss_1.jpg",
                "type": "missing"
            },
            {
                "img": "Img/r3_mvnt_1.jpg",
                "type": "movement"
            },
            {
                "img": "Img/r3_size_1.jpg",
                "type": "size"
            },
            {
                "img": "Img/r3_size_2.jpg",
                "type": "size"
            }
        ]
    },
    {
        "image": "Img/r4_normal.jpg",
        "anomali": [
            {
                "img": "Img/r4_extra_1.jpg",
                "type": "extra"
            },
            {
                "img": "Img/r4_intrdr_1.jpg",
                "type": "intruder"
            },
            {
                "img": "Img/r4_miss_1.jpg",
                "type": "missing"
            },
            {
                "img": "Img/r4_miss_2.jpg",
                "type": "missing"
            },
            {
                "img": "Img/r4_mvnt_1.jpg",
                "type": "movement"
            },
            {
                "img": "Img/r4_size_1.jpg",
                "type": "size"
            },
            {
                "img": "Img/r4_size_2.jpg",
                "type": "size"
            }
        ]
    },
    {
        "image": "Img/r5_normal.jpg",
        "anomali": [
            {
                "img": "Img/r5_extra_1.jpg",
                "type": "extra"
            },
            {
                "img": "Img/r5_intrdr_1.jpg",
                "type": "intruder"
            },
            {
                "img": "Img/r5_miss_1.jpg",
                "type": "missing"
            },
            {
                "img": "Img/r5_mvnt_1.jpg",
                "type": "movement"
            },
            {
                "img": "Img/r5_size_1.jpg",
                "type": "size"
            },
            {
                "img": "Img/r5_size_2.jpg",
                "type": "size"
            },
            {
                "img": "Img/r5_size_3.jpg",
                "type": "size"
            }
        ]
    },
    {
        "image": "Img/r6_normal.jpg",
        "anomali": [
            {
                "img": "Img/r6_change_1.jpg",
                "type": "change"
            },
            {
                "img": "Img/r6_extra_1.jpg",
                "type": "extra"
            },
            {
                "img": "Img/r6_intrdr_1.jpg",
                "type": "intruder"
            },
            {
                "img": "Img/r6_miss_1.jpg",
                "type": "missing"
            },
            {
                "img": "Img/r6_mvnt_1.jpg",
                "type": "movement"
            },
            {
                "img": "Img/r6_mvnt_2.jpg",
                "type": "movement"
            },
            {
                "img": "Img/r6_size_1.jpg",
                "type": "size"
            }
        ]
    }
];
const ruanganNow = ["-", "Ruang Tamu", "Ruang Penyimpaan", "Hutan", "Kamar Mandi", "Dapur", "Jalanan"];
var benar = 0;
var salah = 0;
var anomali = [];
var nomorImageNow = 0;
var minRoom = 1;
var maxRoom = 6;
var totalDilihat = 0;
var totalAnomaliNow = 0;
var anomaliSebelumnyaMuncul = 0;
var isStart = false;
var awr = '';
var selectedValue = '';
var nin = document.getElementById("nmrimgn");
var detik = 0; 


function playGms() {
    document.getElementById("dis-d-1").style.display = "none";
    document.getElementById("img-display").style.display = "block";
    document.getElementById("ctrl-player").style.display = "";
    document.getElementById("loadImgf").style.display = "none";
    document.getElementById("ttlwb").style.display = "none";
    isStart = true;
    firstImage();
    hitungDetik();
}

function firstImage() {
    document.getElementById("gimage").src = dataroom[0].image;
    nomorImageNow = 1;
    nin.innerHTML = awr + ruanganNow[nomorImageNow]; 
    totalDilihat += 1;
}

function kiriBtn() {
    if (nomorImageNow === minRoom) {
        nomorImageNow = 6;
        nin.innerHTML = awr + ruanganNow[nomorImageNow];
        var imgnownumber = nomorImageNow;
        imgnownumber -= 1; 
        document.getElementById("gimage").src = dataroom[imgnownumber].image;
    } else {
        nomorImageNow -= 1;
        nin.innerHTML = awr + ruanganNow[nomorImageNow];
        var imgnownumber = nomorImageNow;
        imgnownumber -= 1; 
        document.getElementById("gimage").src = dataroom[imgnownumber].image;
    }

    updateDisplay();

    totalDilihat += 1;
    totalAnomaliNow = anomali.length;
    addAnomali();
}

function kananBtn() {
    if (nomorImageNow === maxRoom) {
        nomorImageNow = 1;
        nin.innerHTML = awr + ruanganNow[nomorImageNow];
        var imgnownumber = nomorImageNow;
        imgnownumber -= 1; 
        document.getElementById("gimage").src = dataroom[imgnownumber].image;
    } else {
        nomorImageNow += 1;
        nin.innerHTML = awr + ruanganNow[nomorImageNow];
        var imgnownumber = nomorImageNow;
        imgnownumber -= 1; 
        document.getElementById("gimage").src = dataroom[imgnownumber].image;
    }

    updateDisplay();

    totalDilihat += 1;
    totalAnomaliNow = anomali.length;
    addAnomali();
}

function updateDisplay() {
    var imgnownumber = nomorImageNow - 1;
    var found = anomali.find(anom => anom.noroom === nomorImageNow);

    if (found) {
        var noimgset = found.noanomali - 1;
        document.getElementById("gimage").src = dataroom[imgnownumber].anomali[noimgset].img;
    } else {
        document.getElementById("gimage").src = dataroom[imgnownumber].image;
    }
    nin.innerHTML = awr + ruanganNow[nomorImageNow];
}


function addAnomali() {
    if (detik >= 20 && totalDilihat >= 12) {
        if (totalAnomaliNow >= 4) {
            alert('Waspada! Anomali banyak!');
        } else {
            var jarak = detik - anomaliSebelumnyaMuncul;
            if (detik <= 60 && jarak >= 60) {
                const randomNumber1 = Math.floor(Math.random() * 6) + 1;
                const randomNumber2 = Math.floor(Math.random() * 7) + 1;
                anomali.push({ noroom: randomNumber1, noanomali: randomNumber2 });
                console.log(anomali);
                anomaliSebelumnyaMuncul = detik;
            } else if (detik <= 120 && jarak >= 55) {
                const randomNumber1 = Math.floor(Math.random() * 6) + 1;
                const randomNumber2 = Math.floor(Math.random() * 7) + 1;
                anomali.push({ noroom: randomNumber1, noanomali: randomNumber2 });
                console.log(anomali);
                anomaliSebelumnyaMuncul = detik;
            } else if (detik <= 400 && jarak >= 50) {
                const randomNumber1 = Math.floor(Math.random() * 6) + 1;
                const randomNumber2 = Math.floor(Math.random() * 7) + 1;
                anomali.push({ noroom: randomNumber1, noanomali: randomNumber2 });
                console.log(anomali);
                anomaliSebelumnyaMuncul = detik;
            } else if (detik <= 1000 && jarak >= 40) {
                const randomNumber1 = Math.floor(Math.random() * 6) + 1;
                const randomNumber2 = Math.floor(Math.random() * 7) + 1;
                anomali.push({ noroom: randomNumber1, noanomali: randomNumber2 });
                console.log(anomali);
                anomaliSebelumnyaMuncul = detik;
            }
        }
    }
}

function checkReport() {
    const select = document.getElementById("report-select");
    selectedValue = select.options[select.selectedIndex].value;

    if (selectedValue === "xxx") {
        alert('Silakan pilih laporan anomali!');
        return;
    }

    const currentRoomAnomalies = anomali.filter(anom => anom.noroom === nomorImageNow);

    const roomAnomalies = dataroom[nomorImageNow - 1].anomali;
    const isAnomalyInDataRoom = roomAnomalies.some(anomaly => anomaly.type === selectedValue);

    const isAnomalyReported = currentRoomAnomalies.some(anomaly => {
        const anomalyType = dataroom[anomaly.noroom - 1].anomali[anomaly.noanomali - 1].type;
        return anomalyType === selectedValue;
    });

    const resultReport = document.getElementById("resultreport");

    if (isAnomalyInDataRoom && isAnomalyReported) {
        console.log('Kamu benar');
        resultReport.textContent = 'Anomali ditemukan: ' + selectedValue;
        resultReport.style.color = 'green';

        anomali = anomali.filter(anom => {
            const anomalyType = dataroom[anom.noroom - 1].anomali[anom.noanomali - 1].type;
            return anomalyType !== selectedValue || anom.noroom !== nomorImageNow;
        });
        var jrkpoin = benar - salah;
        if (jrkpoin <= -4 || detik >= 350 && totalAnomaliNow >= 5) {
            endGameLose();
        } else if (jrkpoin >= 5 && detik >= 350 || jrkpoin >= 10) {
            endGameWin();
        } else {
            benar += 1;
        }

        document.getElementById('gimage').src = 'Img/anomalifix.jpg';

        setTimeout(() => {
            kananBtn();
            var imgnownumber = nomorImageNow - 1;
            document.getElementById("gimage").src = dataroom[imgnownumber].image;
        }, 3000);
    } else {
        console.log('Kamu salah');
        resultReport.textContent = 'Anomali tidak ditemukan.';
        resultReport.style.color = 'red';
        var jrkpoin = benar - salah;
        if (jrkpoin <= -4 || detik >= 350 && totalAnomaliNow >= 5) {
            endGameLose();
        } else if (jrkpoin >= 5 && detik >= 350 || jrkpoin >= 10) {
            endGameWin();
        } else {
            salah += 1;
        }

        resultReport.style.display = "block";

        setTimeout(() => {
            resultReport.style.display = "none";
        }, 3000);
    }

}

function endGameLose() {
    alert('KAMU KALAH!');
    resetGame();
}

function endGameWin() {
    alert('KAMU MENANG!');
    resetGame();
}

function resetGame() {
    document.getElementById("dis-d-1").style.display = "block";
    document.getElementById("img-display").style.display = "none";
    document.getElementById("ctrl-player").style.display = "none";
    document.getElementById("loadImgf").style.display = "";
    document.getElementById("ttlwb").style.display = "block";
    benar = 0;
    salah = 0;
    anomali = [];
    nomorImageNow = 0;
    minRoom = 1;
    maxRoom = 6;
    totalDilihat = 0;
    totalAnomaliNow = 0;
    anomaliSebelumnyaMuncul = 0;
    isStart = false;
    awr = '';
    selectedValue = '';
    detik = 0; 
}


document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft" || event.key === "A" || event.key === "a") {
        kiriBtn();
    } else if (event.key === "ArrowRight" || event.key === "D" || event.key === "d") {
        kananBtn();
    } else if (event.key === "P" || event.key === "p") {
        if (isStart == false) {
            playGms();
        }
    } else if (event.key === "R" || event.key === "r") {
        checkReport();
    } 
});


function hitungDetik() {
    const interval = setInterval(() => {
        if (isStart === true) {
            detik++;
        }
        // console.log(`Detik: ${detik}`);

        if (detik >= 999999999999999999) {
            clearInterval(interval);
            // console.log("Penghitung selesai.");
        }
    }, 1000);
}