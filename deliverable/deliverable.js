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
