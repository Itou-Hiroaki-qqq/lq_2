document.addEventListener('DOMContentLoaded', () => {

  // ◆◆◆section voices のカルーセル制御◆◆◆
  // Swiperの初期化
    const swiper = new Swiper('.swiper', {

        // ループ設定
        loop: false,  //ループによるスライド個数のエラーを防ぐため

        // ページネーション設定
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // sp設定
        slidesPerView: 1,
        slidesPerGroup: 1, //クリック時に進むスライド数
        spaceBetween: 10,

        // ブレークポイント（PCサイズ以上でスライド3枚に）
        breakpoints: {
            768: { // 768px以上の画面幅
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
            }
        },

        // ナビゲーションボタン設定
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });



  // ◆◆◆section qa のアコーディオンメニュー制御◆◆◆
  // クリック領域をli全体にするためにqa__itemを取得
  const qaItems = document.querySelectorAll('.qa__item');

  // qaItemsそれぞれにクリックイベントを付与
  // qa__body、qa__head-btnにクラスopenを付けはずしする
  qaItems.forEach(qaItem => {
      qaItem.addEventListener('click', () => {
          const qaHead = qaItem.querySelector('.qa__head');
          const qaBody = qaHead.nextElementSibling;
          const qaBtn = qaHead.querySelector('.qa__head-btn');

          qaBody.classList.toggle('open');
          qaBtn.classList.toggle('open');
      });
  })




}); //script END