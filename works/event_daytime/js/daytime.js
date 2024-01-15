$num = $('.my-card').length; // カードの総数を取得
$even = $num / 2; // カードの総数の半分
$odd = ($num + 1) / 2; // カードの総数の半分（少数切り上げ）

// カードの数が偶数の場合
if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active'); // アクティブなカードにクラスを追加
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev'); // 前のカードにクラスを追加
  $('.my-card:nth-child(' + $even + ')').next().addClass('next'); // 次のカードにクラスを追加
} else {
  // カードの数が奇数の場合
  $('.my-card:nth-child(' + $odd + ')').addClass('active'); // アクティブなカードにクラスを追加
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev'); // 前のカードにクラスを追加
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next'); // 次のカードにクラスを追加
}

$('.my-card').click(function() {
  $slide = $('.active').width(); // アクティブなカードの幅を取得
  console.log($('.active').position().left);
  
  // クリックされたカードが 'next' クラスを持つ場合
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide}); // カルーセルを左にスライド
  } else if ($(this).hasClass('prev')) {
    // クリックされたカードが 'prev' クラスを持つ場合
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide}); // カルーセルを右にスライド
  };
  
  $(this).removeClass('prev next'); // 'prev' と 'next' クラスを削除
  $(this).siblings().removeClass('prev active next'); // 兄弟要素から 'prev', 'active', 'next' クラスを削除
  
  $(this).addClass('active'); // クリックされたカードに 'active' クラスを追加
  $(this).prev().addClass('prev'); // 前のカードに 'prev' クラスを追加
  $(this).next().addClass('next'); // 次のカードに 'next' クラスを追加
});

// キーボードの左右矢印に対応するキーボードナビゲーション
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // 左矢印
    $('.active').prev().trigger('click'); // 前のカードにクリックイベントを発生させる
  }
  else if (e.keyCode == 39) { // 右矢印
    $('.active').next().trigger('click'); // 次のカードにクリックイベントを発生させる
  }
});

// marker
$(window).scroll(function (){
  $(".scrollmarker").each(function(){
    var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
    var scroll = $(window).scrollTop(); //スクロールの位置を取得
    var windowHeight = $(window).height(); //ウインドウの高さを取得
    if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
      $(this).addClass('is-active'); //クラス「active」を与える
    }
  });
});