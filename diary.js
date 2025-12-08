'use strict'
const allMemory = [];

// フォームに全て入力＋登録ボタンが押下後、メモリーへの登録処理
function uploadToMemory() {
    const newMemory = {};
    
    let dateOfPictureToUpload = dateOfPicture.value;        // 日付
    let memoryOfPictureToUpload = memoryOfPicture.files[0]; // 写真
    let subtitleToUpload = subtitle.value;                  // 題名
    let memoriesToUpload = memories.value;                  // 思い出の内容

    let lengthOfAllMemory = allMemory.length;               // すべての登録内容の数
        console.log(" 登録している思い出の数 = ", lengthOfAllMemory);

    // input-box 全て入力後の登録
    if (dateOfPictureToUpload && memoryOfPictureToUpload && subtitleToUpload && memoriesToUpload) {
        newMemory.number = lengthOfAllMemory + 1;    // 登録ナンバー
        newMemory.date = dateOfPictureToUpload;      // 日付
        newMemory.picture = memoryOfPictureToUpload; // 写真
        newMemory.subtitle = subtitleToUpload;       // 題名
        newMemory.memory = memoriesToUpload;         // 思い出の内容
        
        allMemory.push(newMemory);
        displayCard(newMemory);
        resetOfInputForm(); 
        return allMemory;
    }
}

// 新しいcardの作成
function displayCard(memory) {
    const card = document.createElement("div");  // card全領域
    card.className = "card";

    const left = document.createElement("div");  // card左領域
    left.className = "card-left";

    const right = document.createElement("div");  // card右領域
    right.className = "card-right";

    const pDate = document.createElement("p");  // 日付
    pDate.innerText = "📅 " + memory.date;
    left.appendChild(pDate);

    console.log("画像URL =", URL.createObjectURL(memory.picture));  // 写真
    if (memory.picture) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(memory.picture);
        left.appendChild(img);
    }

    const h3 = document.createElement("h3");  // 題名
    h3.innerText = memory.subtitle;
    right.appendChild(h3);

    const pMemo = document.createElement("p");  // 思い出の内容
    pMemo.innerText = memory.memory;
    right.appendChild(pMemo);

    // 表示領域に追加
    card.appendChild(left);
    card.appendChild(right);
    document.getElementById("display-area").prepend(card);
}

// 入力ボックス ”登録”ボタン押下後のリセット
function resetOfInputForm() {
    const form = document.getElementById("memoryForm");
    form.reset();
}

// 入力ボックス 中身の設定
const dateOfPicture = document.getElementById("dateOfPicture");
const memoryOfPicture = document.getElementById("memoryOfPicture");
const subtitle = document.getElementById("sub-title");
const memories = document.getElementById("memories");

// ”登録”ボタンの処理
const register = document.getElementById("registration-button");
register.addEventListener("click", uploadToMemory);
