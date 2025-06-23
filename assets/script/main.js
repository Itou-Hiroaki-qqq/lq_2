document.addEventListener('DOMContentLoaded', () => {

  // ◆◆◆section qa のアコーディオンメニュー◆◆◆
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