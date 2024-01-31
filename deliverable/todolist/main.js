//①要素を作り変数を作る、appendChildを追加して、inputに入れる
//      このidに                     この動きをした時                 
document.getElementById("add_button").addEventListener("click", () => onclickAdd());

// テキストボックスの値を取得して初期化
const onclickAdd = () =>{
if (!document.getElementById("add_text").value == ""){

    // 入力した時の値の代入
    const inputText = document.getElementById("add_text").value;
    document.getElementById("add_text").value = ""; // ブランク・・・ボタンを押すと消える
    console.log(inputText);

    // タグの作成(作りたいHTMLタグ)
    const li = document.createElement("li");  // liという変数名 = liタグを生成(listの開始と終了を作る)
    const div = document.createElement("div");
    const ptag = document.createElement("p");
    const completebutton = document.createElement("button");
    const deletebutton = document.createElement("button");
    // class名を付与する
    div.classList = "list_row";
    completebutton.innerHTML = "完了";
    deletebutton.innerHTML = "削除";

    // liタグの子要素を設定(liの構造)
    li.appendChild(div);
    div.appendChild(ptag);
    div.appendChild(completebutton);
    div.appendChild(deletebutton);
    ptag.innerHTML = inputText;

    // 未完了のTo Doに追加
    // getElementByIdでidを呼び出す↓          ↓ liを子要素として追加する
    document.getElementById("incomplete_list").appendChild(li);
    console.log(incomplete_list);

    //削除した時に、完了の機能を持つhtmlを作る
    //削除ボタン(fri 08 DEC)
    deletebutton.addEventListener("click", () => {
        //削除ボタンの親のdivのliを返す
        const deletetarget = div.parentNode;  // DOM ツリー内の特定のノードの親ノードを返す
        document.getElementById("incomplete_list").removeChild(deletetarget);
    })

    ////////// 完了ボタン //////////
    completebutton.addEventListener("click", ()=>{
    // 完了ボタンを押されたリストを削除    
    const deletetarget = div.parentNode;
    document.getElementById("incomplete_list").removeChild(deletetarget);

    ////// 完了したTODOにリストを追加 //////
    const addtarget = ptag.parentNode;
    const text = addtarget.firstElementChild.innerHTML;
    // console.log(text);
    //削除する記述
    addtarget.textContent = null;

    ////// 戻すボタン作成 ///////
    const backbutton = document.createElement("button");
    backbutton.innerHTML = "戻す";

    addtarget.appendChild(ptag);
    addtarget.appendChild(backbutton);
    ptag.innerHTML = text;
    //完了リストに追加
    document.getElementById("complete_list").appendChild(addtarget.parentNode);

    backbutton.addEventListener("click", ()=>{
    // 戻すボタンを押されたリストを削除
    const deletetarget = div.parentNode;
    document.getElementById("complete_list").removeChild(deletetarget);

    const backtarget = ptag.parentNode;
    const backtext = backtarget.firstElementChild.innerHTML;
    backtarget.textContent = null;

    //未完了へリストとボタンを作成
    backtarget.appendChild(ptag);
    backtarget.appendChild(completebutton);
    backtarget.appendChild(deletebutton);
    ptag.innerHTML = backtext;
    //↑これらを↓これでで実装する
    document.getElementById("incomplete_list").appendChild(backtarget.parentNode);

    })

    })

}

}

////// tagの生成 //////////
const li = document.createElement("li");  // liという変数名 // liタグを生成、listの開始と終了を作る

const div = document.createElement("div");

const ptag = document.createElement("p");


li.appendChild(div);  // liを子要素として追加する
div.appendChild(ptag);
ptag.innerHTML = "aaa";
console.log(li);

// color change
const colorName = document.querySelector("h1");
const container = document.querySelector("#todolist");

const colors = ["gray", "brown", "blue", "yellow"];

function changeColor() {
  let bgColor = colors[Math.floor(Math.random() * colors.length)];
  container.style.backgroundColor = bgColor;
  colorName.innerHTML = bgColor;
}

container.addEventListener("click", changeColor);