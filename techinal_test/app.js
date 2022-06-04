const case1 = require('./case1');
const case2 = require('./case2');
console.log('');
console.log('');
// ================================ JAWABAN NO 1
console.log('1.  Buah apa saja yang dimiliki Andi? (fruitName)');
console.log('Jawaban : ');
case1.forEach((element) => {
  console.log(`- buah ${element.fruitName}`);
});

// ================================ JAWABAN NO 2
console.log(' ');
console.log(
  '2.  Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?'
);
const arr1 = [];
const wadah1 = [];
const wadah2 = [];
case1.forEach((element) => {
  arr1.push(element.fruitType);
});

const unique = [...new Set(arr1)];
case1.filter((elem) => {
  if (elem.fruitType === 'IMPORT') {
    wadah1.push(
      elem.fruitName[0].toUpperCase() +
        elem.fruitName.substring(1).toLowerCase()
    );
  } else {
    wadah2.push(elem.fruitName[0].toUpperCase() + elem.fruitName.substring(1));
  }
});

const uniqueBuah1 = [...new Set(wadah1)];
const uniqueBuah2 = [...new Set(wadah2)];
console.log('Jawaban : ');
console.log(
  `jumlah yang wadah yang dibutuhkan andi sebanyak ${unique.length} wadah`
);
console.log(unique);
console.log(`buah yang terdapat di wadah IMPORT adalah ${uniqueBuah1}`);
console.log(uniqueBuah1);
console.log(`buah yang terdapat di wadah LOCAL adalah ${uniqueBuah2}`);
console.log(uniqueBuah2);

// ================== JAWABAN NO 3
console.log(' ');
console.log('3. 3Berapa total stock buah yang ada di masing-masing wadah?');
console.log('Jawaban : ');
console.log(`total stock buah di wadah IMPORT sebanyak ${wadah1.length} buah`);
console.log(wadah1);
console.log(`total stock buah di wadah LOCAL sebanyak ${wadah2.length} buah`);
console.log(wadah2);
console.log('');
// ================= JAWABAN NO 4
console.log('4. Apakah ada komentar terkait kasus di atas?');
console.log('jawaban');
console.log(
  'dalam pengerjaan test ini, saya menggunakan bahasa pemrograman javascript'
);

console.log('');
// ============ SOAL NO 5
const hitungTotalComment = () => {
  const arr = [];
  case2.forEach((elem) => {
    if (elem.replies) {
      elem.replies.forEach((elem) => {
        if (elem.replies) {
          elem.replies.forEach((elem) => {
            arr.push(elem.commentContent);
          });
        }
        arr.push(elem.commentContent);
      });
    }
    arr.push(elem.commentContent);
  });
  return arr.length;
};
console.log(
  '5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar'
);
console.log('jawaban :');
console.log(`${hitungTotalComment()}`);
