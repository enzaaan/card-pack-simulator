// カードデータベースのサンプル
const cards = [
  { name: "シュン", rarity: "N", rank: 0 },
  { name: "シオリン", rarity: "N", rank: 0 },
  { name: "ハマボウ", rarity: "N", rank: 0 },
  { name: "ジェンキンス", rarity: "N", rank: 0 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "1", rarity: "N", rank: 1 },
  { name: "2", rarity: "N", rank: 2 },
  { name: "2", rarity: "N", rank: 2 },
  { name: "2", rarity: "N", rank: 2 },
  { name: "2", rarity: "N", rank: 2 },
  { name: "2", rarity: "N", rank: 2 },
  { name: "2", rarity: "N", rank: 2 },
  { name: "2", rarity: "N", rank: 2 },
  { name: "2", rarity: "N", rank: 2 },
  { name: "3", rarity: "N", rank: 3 },
  { name: "3", rarity: "N", rank: 3 },
  { name: "3", rarity: "N", rank: 3 },
  { name: "3", rarity: "N", rank: 3 },
  { name: "3", rarity: "N", rank: 3 },
  { name: "4", rarity: "N", rank: 4 },
  { name: "4", rarity: "N", rank: 4 },
  
  
  { name: "1", rarity: "R", rank: 1 },
  { name: "1", rarity: "R", rank: 1 },
  { name: "1", rarity: "R", rank: 1 },
  { name: "1", rarity: "R", rank: 1 },
  { name: "1", rarity: "R", rank: 1 },
  { name: "1", rarity: "R", rank: 1 },
  { name: "1", rarity: "R", rank: 1 },
  { name: "1", rarity: "R", rank: 1 },
  { name: "1", rarity: "R", rank: 1 },
  { name: "1", rarity: "R", rank: 1 },
  { name: "1", rarity: "R", rank: 1 },
  { name: "1", rarity: "R", rank: 1 },
  { name: "2", rarity: "R", rank: 2 },
  { name: "2", rarity: "R", rank: 2 },
  { name: "2", rarity: "R", rank: 2 },
  { name: "2", rarity: "R", rank: 2 },
  { name: "2", rarity: "R", rank: 2 },
  { name: "3", rarity: "R", rank: 3 },
  { name: "3", rarity: "R", rank: 3 },
  { name: "3", rarity: "R", rank: 3 },
  { name: "4", rarity: "R", rank: 4 },
  { name: "4", rarity: "R", rank: 4 },
  
  { name: "1", rarity: "SR", rank: 1 },
  { name: "1", rarity: "SR", rank: 1 },
  { name: "1", rarity: "SR", rank: 1 },
  { name: "1", rarity: "SR", rank: 1 },
  { name: "1", rarity: "SR", rank: 1 },
  { name: "1", rarity: "SR", rank: 1 },
  { name: "2", rarity: "SR", rank: 2 },
  { name: "2", rarity: "SR", rank: 2 },
  { name: "2", rarity: "SR", rank: 2 },
  { name: "2", rarity: "SR", rank: 2 },
  { name: "3", rarity: "SR", rank: 3 },
  { name: "3", rarity: "SR", rank: 3 },
  { name: "4", rarity: "SR", rank: 4 },
  { name: "4", rarity: "SR", rank: 4 },
  
  { name: "1", rarity: "LR", rank: 1 },
  { name: "2", rarity: "LR", rank: 2 },
  { name: "3", rarity: "LR", rank: 3 },
  { name: "3", rarity: "LR", rank: 3 },
  { name: "4", rarity: "LR", rank: 4 },
  { name: "4", rarity: "LR", rank: 4 },
];
  

// パック数を選択
const numPacksSelect = document.getElementById("numPacks");

// 開封ボタンをクリックした時のアクション
document.getElementById("openPackButton").addEventListener("click", function () {
  const numPacks = parseInt(numPacksSelect.value, 10);
  // console.log("numPacks:",numPacks)
  const results = openPack(numPacks);
  console.log("results:",results)
  displayResults(results);

  const cardCounts = countCards(results);
  // console.log("results:",results)
  console.log("Card counts:", cardCounts); 
  displayCardCounts(cardCounts);
  // openAndDisplayPacks(numPacks);
});




// パックを開封する関数
function openPack(numPacks) {
  // console.log("openPack called with:", numPacks);
  let results = [];
  let totalLR = Math.floor(numPacks / 30) * 2; // 30パックごとに2枚
  let totalSR = Math.floor(numPacks / 30) * (Math.floor(Math.random() * 4) + 5); // 30パックごとに5〜8枚

  let lrCards = cards.filter(card => card.rarity === "LR");
  let srCards = cards.filter(card => card.rarity === "SR");
  let otherCards = cards.filter(card => card.rarity !== "LR" && card.rarity !== "SR");

  let selectedLRCards = [];
  let selectedSRCards = [];

  // LRとSRのカードを選択
  for (let i = 0; i < totalLR; i++) {
    let randomIndex = Math.floor(Math.random() * lrCards.length);
    selectedLRCards.push(JSON.parse(JSON.stringify(lrCards[randomIndex])));
  }

  for (let i = 0; i < totalSR; i++) {
    let randomIndex = Math.floor(Math.random() * srCards.length);
    selectedSRCards.push(JSON.parse(JSON.stringify(srCards[randomIndex])));
  }

  // パックを作成
  for (let i = 0; i < numPacks; i++) {
    let pack = [];
    let rank0Cards = cards.filter(card => card.rank === 0);

    // ランク0のカードを2枚追加
    for (let j = 0; j < 2; j++) {
      let randomIndex = Math.floor(Math.random() * rank0Cards.length);
      pack.push(JSON.parse(JSON.stringify(rank0Cards[randomIndex])));
    }

    // LRまたはSRのカードを追加
    if (selectedLRCards.length > 0 && Math.random() < selectedLRCards.length / (numPacks - i)) {
      pack.push(selectedLRCards.pop());
    } else if (selectedSRCards.length > 0 && Math.random() < selectedSRCards.length / (numPacks - i)) {
      pack.push(selectedSRCards.pop());
    } else {
      let randomIndex = Math.floor(Math.random() * otherCards.length);
      pack.push(JSON.parse(JSON.stringify(otherCards[randomIndex])));
    }

    // 残りのカードを追加
    while (pack.length < 5) {
      let randomIndex = Math.floor(Math.random() * otherCards.length);
      pack.push(JSON.parse(JSON.stringify(otherCards[randomIndex])));
    }

    results.push(pack);
  }
  console.log("results:",results);
  return results;
}







// レアリティごとに何枚出たかの結果を表示する関数
function displayResults(results) {
  console.log("results:",results);
  const resultsDiv = document.getElementById("results-container");
  resultsDiv.innerHTML = "";

  // レアリティごとのカウントを保存するオブジェクト
  const rarityCount = { N: 0, R: 0, SR: 0, LR: 0 };

  // レアリティごとのカウントをテーブルで表示（初期化）
  const table = document.createElement("table");
  table.innerHTML = `
    <tr>
      <th>Rarity</th>
      <th>Count</th>
    </tr>
  `;

    results.forEach((pack, index) => {
    const packDiv = document.createElement("div");
    packDiv.innerHTML = `<h2>Pack ${index + 1}</h2>`;
    pack.forEach((card) => {
      // レアリティカウントを更新
      rarityCount[card.rarity]++;

      const cardDiv = document.createElement("div");
      cardDiv.className = `card ${card.rarity}`;
      cardDiv.innerHTML = `
        <h3>${card.name}</h3>
        <p>Rarity: ${card.rarity}</p>
        <p>Rank: ${card.rank}</p>
      `;
      packDiv.appendChild(cardDiv);
    });
    resultsDiv.appendChild(packDiv);
  });
  

  // レアリティごとのカウントをテーブルで更新
  for (const [rarity, count] of Object.entries(rarityCount)) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${rarity}</td><td>${count}</td>`;
    table.appendChild(row);
  }
  // テーブルをパックの上に挿入
  resultsDiv.insertBefore(table, resultsDiv.firstChild);
}











// 名称ごとのカードの出現回数を集計する関数
function countCards(packs) {
  // console.log("results:",results);
  const cardCounts = {};
  packs.flat().forEach(card => {
    const key = `${card.name}-${card.rarity}-${card.rank}`;
    cardCounts[key] = (cardCounts[key] || 0) + 1;
  });
  // console.log("results:",results)
  return cardCounts;
}

// 集計結果をテーブル形式で出力する関数
function displayCardCounts(cardCounts) {
  console.log("Displaying card counts:", cardCounts);
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  ['name', 'rarity', 'rank', 'count'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);


  // レアリティに基づいてソート
  const sortedKeys = Object.keys(cardCounts).sort((a, b) => {
    const rarityOrder = ['N', 'R', 'SR', 'LR'];
    const [_, rarityA, rankA] = a.split('-');
    const [__, rarityB, rankB] = b.split('-');
    return rarityOrder.indexOf(rarityA) - rarityOrder.indexOf(rarityB) || rankA - rankB;
  });

  for (const key of sortedKeys) {
    const count = cardCounts[key];
    const [name, rarity, rank] = key.split('-');
    const row = document.createElement('tr');
    [name, rarity, rank, count].forEach(text => {
      const td = document.createElement('td');
      td.textContent = text;
      row.appendChild(td);
    });
    table.appendChild(row);
  }

  const container = document.getElementById('card-count-table-container');
  container.innerHTML = '';
  container.appendChild(table);
}






