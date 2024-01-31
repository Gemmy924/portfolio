//////// hamberger menu /////////
//ボタンをクリックした際のアニメーションの設定
$(".openbtn").click(function () {//openbtnがクリックされたら
  $(this).toggleClass('active');//openbtn自身に activeクラスを付与し
  $("#nav_target").toggleClass('panelactive');//#naviにpanelactiveクラスを付与
});
$("#nav_target li a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
  $("#nav_target").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
});

//////// modal /////////
// すべての画像を取得
const imagesOpen = document.querySelectorAll('.img_item');
const modals = document.querySelectorAll('.modal');
const buttonClose = document.querySelector('.modalClose');

// 各画像に対してイベントリスナーを追加
imagesOpen.forEach((image, index) => {
  image.addEventListener('mouseover', () => modalOpen(index));
});

function modalOpen(index) {
  modals[index].style.display = 'block';
}

// バツ印がクリックされた時
// buttonClose.addEventListener('click', modalClose);
// function modalClose() {
//   modals.forEach(modal => {
//     modal.style.display = 'none';
//   });
// }

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  modals.forEach(modal => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });
}
