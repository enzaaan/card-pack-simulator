// カードデータベースのサンプル
const cards = [
  { name: "Card1", rarity: "N", rank: 0 },
    { name: "Card1", rarity: "N", rank: 0 },
    { name: "Card1", rarity: "N", rank: 0 },
    { name: "Card1", rarity: "N", rank: 0 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 1 },
    { name: "Card1", rarity: "N", rank: 2 },
    { name: "Card1", rarity: "N", rank: 2 },
    { name: "Card1", rarity: "N", rank: 2 },
    { name: "Card1", rarity: "N", rank: 2 },
    { name: "Card1", rarity: "N", rank: 2 },
    { name: "Card1", rarity: "N", rank: 2 },
    { name: "Card1", rarity: "N", rank: 2 },
    { name: "Card1", rarity: "N", rank: 2 },
    { name: "Card1", rarity: "N", rank: 3 },
    { name: "Card1", rarity: "N", rank: 3 },
    { name: "Card1", rarity: "N", rank: 3 },
    { name: "Card1", rarity: "N", rank: 3 },
    { name: "Card1", rarity: "N", rank: 3 },
    { name: "Card1", rarity: "N", rank: 4 },
    { name: "Card1", rarity: "N", rank: 4 },
   
    
    { name: "Card2", rarity: "R", rank: 1 },
    { name: "Card2", rarity: "R", rank: 1 },
    { name: "Card2", rarity: "R", rank: 1 },
    { name: "Card2", rarity: "R", rank: 1 },
    { name: "Card2", rarity: "R", rank: 1 },
    { name: "Card2", rarity: "R", rank: 1 },
    { name: "Card2", rarity: "R", rank: 1 },
    { name: "Card2", rarity: "R", rank: 1 },
    { name: "Card2", rarity: "R", rank: 1 },
    { name: "Card2", rarity: "R", rank: 1 },
    { name: "Card2", rarity: "R", rank: 1 },
    { name: "Card2", rarity: "R", rank: 1 },
    { name: "Card2", rarity: "R", rank: 2 },
    { name: "Card2", rarity: "R", rank: 2 },
    { name: "Card2", rarity: "R", rank: 2 },
    { name: "Card2", rarity: "R", rank: 2 },
    { name: "Card2", rarity: "R", rank: 2 },
    { name: "Card2", rarity: "R", rank: 3 },
    { name: "Card2", rarity: "R", rank: 3 },
    { name: "Card2", rarity: "R", rank: 3 },
    { name: "Card2", rarity: "R", rank: 4 },
    { name: "Card2", rarity: "R", rank: 4 },
    
    { name: "Card2", rarity: "SR", rank: 1 },
    { name: "Card2", rarity: "SR", rank: 1 },
    { name: "Card2", rarity: "SR", rank: 1 },
    { name: "Card2", rarity: "SR", rank: 1 },
    { name: "Card2", rarity: "SR", rank: 1 },
    { name: "Card2", rarity: "SR", rank: 1 },
    { name: "Card2", rarity: "SR", rank: 2 },
    { name: "Card2", rarity: "SR", rank: 2 },
    { name: "Card2", rarity: "SR", rank: 2 },
    { name: "Card2", rarity: "SR", rank: 2 },
    { name: "Card2", rarity: "SR", rank: 3 },
    { name: "Card2", rarity: "SR", rank: 3 },
    { name: "Card2", rarity: "SR", rank: 4 },
    { name: "Card2", rarity: "SR", rank: 4 },
    
    { name: "Card2", rarity: "LR", rank: 1 },
    { name: "Card2", rarity: "LR", rank: 2 },
    { name: "Card2", rarity: "LR", rank: 3 },
    { name: "Card2", rarity: "LR", rank: 3 },
    { name: "Card2", rarity: "LR", rank: 4 },
    { name: "Card2", rarity: "LR", rank: 4 },
  ];
  


// パックを開封する関数
function openPack(numPacks) {
  let results = [];
  let lrCount = 0;
  let srCount = 0;

  for (let i = 0; i < numPacks; i++) {
    let pack = [];
    let rank0Cards = cards.filter(card => card.rank === 0);
    let otherCards = cards.filter(card => card.rank !== 0);

    // ランク0のカードを2枚追加
    for (let j = 0; j < 2; j++) {
      let randomIndex = Math.floor(Math.random() * rank0Cards.length);
      let card = rank0Cards.splice(randomIndex, 1)[0];
      pack.push(card);
    }

    // 残りのカードを3枚追加
    for (let j = 0; j < 3; j++) {
      let randomIndex = Math.floor(Math.random() * otherCards.length);
      let card = otherCards.splice(randomIndex, 1)[0];
      pack.push(card);
    }

    // LRとSRの封入率を調整
    if (lrCount < 1 && Math.random() < 1 / 30) {
      let lrCard = cards.find(card => card.rarity === "LR");
      if (lrCard) {
        pack[2] = lrCard;
        lrCount++;
      }
    } else if (srCount < 8 && Math.random() < 8 / 30) {
      let srCard = cards.find(card => card.rarity === "SR");
      if (srCard) {
        pack[2] = srCard;
        srCount++;
      }
    }

    results.push(pack);
  }

  return results;
}

// パック数を選択
const numPacksSelect = document.getElementById("numPacks");

// 開封ボタンをクリック
document.getElementById("openPackButton").addEventListener("click", function () {
  const numPacks = parseInt(numPacksSelect.value, 10);
  const results = openPack(numPacks);
  displayResults(results);
});

// // 結果を表示する関数
// function displayResults(results) {
//   const resultsDiv = document.getElementById("results");
//   resultsDiv.innerHTML = "";

//   results.forEach((pack, index) => {
//     const packDiv = document.createElement("div");
//     packDiv.innerHTML = `<h2>Pack ${index + 1}</h2>`;
//     pack.forEach((card) => {
//       const cardDiv = document.createElement("div");
//       cardDiv.className = "card";
//       cardDiv.innerHTML = `
//         <h3>${card.name}</h3>
//         <p>Rarity: ${card.rarity}</p>
//         <p>Rank: ${card.rank}</p>
//       `;
//       packDiv.appendChild(cardDiv);
//     });
//     resultsDiv.appendChild(packDiv);
//   });
// }

// 結果を表示する関数
function displayResults(results) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  results.forEach((pack, index) => {
    const packDiv = document.createElement("div");
    packDiv.innerHTML = `<h2>Pack ${index + 1}</h2>`;
    pack.forEach((card) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = `card ${card.rarity}`;  // レアリティに基づいたクラス名を追加
      cardDiv.innerHTML = `
        <h3>${card.name}</h3>
        <p>Rarity: ${card.rarity}</p>
        <p>Rank: ${card.rank}</p>
      `;
      packDiv.appendChild(cardDiv);
    });
    resultsDiv.appendChild(packDiv);
  });
}











// // パックを開封する関数
// function openPack(numPacks) {
//   let results = [];

//   for (let i = 0; i < numPacks; i++) {
//     let pack = [];
//     let rank0Count = 0;
//     let loopCount = 0;  // デバッグ用：ループ回数をカウント

//     while (pack.length < 5) {
//       loopCount++;
//       if (loopCount > 1000) {  // デバッグ用：無限ループを防ぐ
//         console.log("Infinite loop detected");
//         break;
//       }

//       let randomIndex = Math.floor(Math.random() * cards.length);
//       let card = cards[randomIndex];

//       if (pack.some((p) => p.name === card.name)) continue;
//       if (card.rank === 0 && rank0Count >= 2) continue;

//       if (card.rank === 0) rank0Count++;
//       pack.push(card);
//     }

//     results.push(pack);
//   }

//   return results;
// }


// // パック数を選択
// const numPacksSelect = document.getElementById("numPacks");

// // 開封ボタンをクリック
// document.getElementById("openPackButton").addEventListener("click", function () {
//   const numPacks = parseInt(numPacksSelect.value, 10);
//   const results = openPack(numPacks);
//   displayResults(results);
// });

// // 結果を表示する関数
// function displayResults(results) {
//   const resultsDiv = document.getElementById("results");
//   resultsDiv.innerHTML = "";

//   results.forEach((pack, index) => {
//     const packDiv = document.createElement("div");
//     packDiv.innerHTML = `<h2>Pack ${index + 1}</h2>`;
//     pack.forEach((card) => {
//       const cardDiv = document.createElement("div");
//       cardDiv.className = "card";
//       cardDiv.innerHTML = `
//         <h3>${card.name}</h3>
//         <p>Rarity: ${card.rarity}</p>
//         <p>Rank: ${card.rank}</p>
//       `;
//       packDiv.appendChild(cardDiv);
//     });
//     resultsDiv.appendChild(packDiv);
//   });
// }
