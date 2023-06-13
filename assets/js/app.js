(function() {
  'use-strict';

  var $html = $('html');

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    }
  };

  var render = {
    navbarScrollFix: function() {
      var navBar = $('.navbar');
      var navbarIsOverlay = $('nav.is-transparent');

      if (navBar !== null && navBar.length !== 0) {
        if (navbarIsOverlay.offset().top) {
          navbarIsOverlay.removeClass('is-fade');
        }

        window.onscroll = function() {
          var windowScroll = $(window).scrollTop();
          var spotNavbar = $('nav.navbar');
          var jumboHeight = $('.jumbotron').outerHeight();

          if (spotNavbar.hasClass('is-transparent')) {
            if (windowScroll > 77) {
              spotNavbar.addClass('is-fade');
            } else {
              spotNavbar.removeClass('is-fade');
            }
          }
          if (windowScroll > jumboHeight - 5) {
            spotNavbar.removeClass('is-transparent').addClass('is-shrink');
          } else {
            spotNavbar.removeClass('is-shrink').addClass('is-transparent');
          }
        };
      }
    },

    navbarDrawerRight: function() {
      var drawerMenu = $('.navbar-drawer');
      var body = $('body');

      $('#buttonBurger').click(function(e) {
        e.preventDefault();
        drawerMenu.toggleClass('drawer-in');
        body.addClass('overlay');
      });

      $('#buttonClose').click(function(e) {
        e.preventDefault();
        drawerMenu.toggleClass('drawer-in');
        body.removeClass('overlay');
      });
    },

    selectOption: function() {
      $('select').selectpicker();
    },

    datepickerOption: function() {
      $('#datetimepicker').datetimepicker({
        format: 'mm/dd/yyyy',
      })
    },

    affixCard: function() {
      var stickyCard = new Sticky('#sticky');

      stickyCard;
    },

    init: function() {
      var navbarHasOverlay = $('.nav.is-transparent');

      if (navbarHasOverlay) {
        this.navbarDrawerRight();
        this.navbarScrollFix();
      } 
      else {
        this.navbarDrawerRight();
      }

      this.selectOption();
      this.datepickerOption();
      this.affixCard();
    },
  };

  $(document).ready(function() {
    render.init();
  });
})();
