//スクロールをするとハンバーガーメニューに変化するための設定を関数でまとめる
  //ヘッダーの高さを取得して、スクロールすると、FixedAnime()という関数が発動する
     //FixedAnime()では、スクロール量がヘッダーの高さ以上になったら、というクラスを追加する 
     function FixedAnime() {
        // ヘッダーの高さを取得 
        var headerH = $('#header').outerHeight(true); //$('セレクタ'). cssの指定を取得する
        var scroll = $(window).scrollTop();
      //ヘッダーの高さ以上までスクロールしたら
        if (scroll >= headerH){
                $('.openbtn').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
                $('#header').addClass('dnone');//#headerにdnoneというクラス名を付与
            }else{//それ以外は
                $('.openbtn').removeClass('fadeDown');//fadeDownというクラス名を除き
                $('#header').removeClass('dnone');//dnoneというクラス名を除く
            }
    }
    
    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
    });
    
    // ページが読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
        FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
    });
    
    //ボタンをクリックした際のアニメーションの設定
    $(".openbtn").click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#header").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
    });
    $("#g-navi li a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
        $("#header").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
    });
    
    //リンク先のidまでスムーススクロール
    //※ページ内リンクを行わない場合は不必要なので削除してください
        $('#g-navi li a').click(function () {
        var elmHash = $(this).attr('href');
        var pos = $(elmHash).offset().top-0;
        $('body,html').animate({scrollTop: pos}, 1000);
        return false;
    });
    //ここまでスクロールをするとハンバーガーメニューに変化するための設定を関数でまとめる
    //
    // glowAnimeにglowというクラス名を付ける定義
    function GlowAnimeControl() {
        $('.glowAnime').each(function () {
          var elemPos = $(this).offset().top - 50;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll >= elemPos - windowHeight) {
            $(this).addClass("glow");
      
          } else {
            $(this).removeClass("glow");
          }
        });
      }
      
      // 画面をスクロールをしたら動かしたい場合の記述
      $(window).scroll(function () {
        GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面をスクロールをしたら動かしたい場合の記述
      
      // 画面が読み込まれたらすぐに動かしたい場合の記述
      $(window).on('load', function () {
        //spanタグを追加する
          var element = $(".glowAnime");
        element.each(function () {
          var text = $(this).text();
          var textbox = "";
          text.split('').forEach(function (t, i) {
            if (t !== " ") {
              if (i < 10) {
                textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
              } else {
              var n = i / 10;
                textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
              }
      
            } else {
              textbox += t;
            }
          });
          $(this).html(textbox);
        });
      
        GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// contact
      // 入力フィールドに文字が入力された際のクラス切り替え
      $( '.js-input' ).keyup(function() {
        if( $(this).val() ) {
           $(this).addClass('not-empty');
        } else {
           $(this).removeClass('not-empty');
        }
      });
