const texts = [
    "3500 cm²",
            "३५०० वर्ग सेंटीमीटर",
            "٣٥٠٠ سم²",
            "3500 சதுர செ.மீ.",
            "3500 చదరపు సెం.మీ",
            "৩৫০০ বর্গ সেন্টিমিটার",
            "3500 ಚದರ ಸೆ.ಮೀ",
            "3500 平方厘米",
            "3500 ตารางเซนติเมตร"
];
let index = 0;
function changeText() {
    const title = document.getElementById('changing-text');
    title.textContent = texts[index];
    index = (index + 1) % texts.length;
}
setInterval(changeText, 2000);
