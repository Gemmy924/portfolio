//// loading /////
window.onload = () => {
  const spinner = document.getElementById('loading');
  const target = document.getElementById('target');
  target.style.opacity = 0;
  setTimeout(() => {
    spinner.style.opacity = 0; // フェードアウト開始
    
    setTimeout(() => {
      target.style.opacity = 1;
      spinner.style.display = 'none'; // フェードアウトが完了するまでの時間（5秒）
    }, 3000);
  }, 2000); // dalayの2秒
};

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

////////// slider ///////////
$(function() {
  $('.slick').slick({
      fade: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed : 3000,
      pauseOnFocus: false,
      pauseOnHover: false,
      arrows: false,
  })
});


/////////// contact /////////////
      // 入力フィールドに文字が入力された際のクラス切り替え
      $( '.js-input' ).keyup(function() {
        if( $(this).val() ) {
           $(this).addClass('not-empty');
        } else {
           $(this).removeClass('not-empty');
        }
      });
