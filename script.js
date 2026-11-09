/* ================================================
   SCRIPT.JS – Hiệu ứng fade-in khi cuộn trang
   Sử dụng IntersectionObserver(hỗ trợ hầu hết trình duyệt)
  ================================================ */

  (function () {
    'use strict';

    // Lấy tất cả phần tử có class "fade-in"
    var faders = document.querySelectorAll('.fade-in');

    // Kiểm tra trình duyệt hỗ trợ IntersectionObserver
    if ('IntersectionObserver' in window) {
      var observerOptions = {
        root: null,          // viewport
        threshold: 0.15      // kích hoạt khi 15% phần tử xuất hiện
      };

          var fadeObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');  // thêm class để kích hoạt CSS
                observer.unobserve(entry.target);       // chỉ chạy hiệu ứng 1 lần
              }
            });
          }, observerOptions);

          // Quan sát từng phần tử
          faders.forEach(function (el) {
            fadeObserver.observe(el);
          });
    } else {
      // Fallback cho trình duyệt cũ: hiện tất cả ngay lập tức
      faders.forEach(function (el) {
        el.classList.add('visible');
      });
    }
  })();
