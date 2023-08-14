

    $(function () {
        let dropdouwnIsOpen = false
        $('#dashboard').click(function() {
          if (!dropdouwnIsOpen) {
            $('#dashboardDropDown').fadeIn()
            $('#NotificationsDropDown').hide()
            $('#AnalyticsDropDown').hide()
            $('#LikesDropDown').hide()
            $('#WalletsDropDown').hide()
            $('#RevenueDropdown').hide()
            $('#dashboard').addClass('active');
            $('#Revenue').removeClass('active');
            $('#Notifications').removeClass('active');
            $('#Analytics').removeClass('active');
            $('#Likes').removeClass('active');
            $('#Wallets').removeClass('active');
          } else {
            $('#dashboardDropDown').hide()
            $('#dashboard').removeClass('active');
          }
          dropdouwnIsOpen = !dropdouwnIsOpen
        })
        $('#Revenue').click(function() {
          if (!dropdouwnIsOpen) {
            $('#RevenueDropdown').fadeIn()
            $('#dashboardDropDown').hide()
            $('#NotificationsDropDown').hide()
            $('#AnalyticsDropDown').hide()
            $('#LikesDropDown').hide()
            $('#WalletsDropDown').hide()
            $('#Revenue').addClass('active');
            $('#dashboard').removeClass('active');
            $('#Notifications').removeClass('active');
            $('#Analytics').removeClass('active');
            $('#Likes').removeClass('active');
            $('#Wallets').removeClass('active');
          } else {
            $('#RevenueDropdown').hide()
            $('#Revenue').removeClass('active');
          }
          dropdouwnIsOpen = !dropdouwnIsOpen
        })
        $('#Notifications').click(function() {
          if (!dropdouwnIsOpen) {
            $('#NotificationsDropDown').fadeIn()
            $('#dashboardDropDown').hide()
            $('#RevenueDropdown').hide()
            $('#AnalyticsDropDown').hide()
            $('#LikesDropDown').hide()
            $('#WalletsDropDown').hide()
            $('#Notifications').addClass('active');
            $('#dashboard').removeClass('active');
            $('#Revenue').removeClass('active');
            $('#Analytics').removeClass('active');
            $('#Likes').removeClass('active');
            $('#Wallets').removeClass('active');
          } else {
            $('#NotificationsDropDown').hide()
            $('#Notifications').removeClass('active');
          }
          dropdouwnIsOpen = !dropdouwnIsOpen
        })
        $('#Analytics').click(function() {
          if (!dropdouwnIsOpen) {
            $('#AnalyticsDropDown').fadeIn()
            $('#dashboardDropDown').hide()
            $('#RevenueDropdown').hide()
            $('#NotificationsDropDown').hide()
            $('#LikesDropDown').hide()
            $('#WalletsDropDown').hide()
            $('#Analytics').addClass('active');
            $('#dashboard').removeClass('active');
            $('#Revenue').removeClass('active');
            $('#Notifications').removeClass('active');
            $('#Likes').removeClass('active');
            $('#Wallets').removeClass('active');
          } else {
            $('#AnalyticsDropDown').hide()
            $('#Analytics').removeClass('active');
          }
          dropdouwnIsOpen = !dropdouwnIsOpen
        })
        $('#Likes').click(function() {
          if (!dropdouwnIsOpen) {
            $('#LikesDropDown').fadeIn()
            $('#dashboardDropDown').hide()
            $('#RevenueDropdown').hide()
            $('#NotificationsDropDown').hide()
            $('#AnalyticsDropDown').hide()
            $('#WalletsDropDown').hide()
            $('#Likes').addClass('active');
            $('#dashboard').removeClass('active');
            $('#Revenue').removeClass('active');
            $('#Notifications').removeClass('active');
            $('#Analytics').removeClass('active');
            $('#Wallets').removeClass('active');
          } else {
            $('#LikesDropDown').hide()
            $('#Likes').removeClass('active');
          }
          dropdouwnIsOpen = !dropdouwnIsOpen
        })
        $('#Wallets').click(function() {
          if (!dropdouwnIsOpen) {
            $('#WalletsDropDown').fadeIn()
            $('#dashboardDropDown').hide()
            $('#RevenueDropdown').hide()
            $('#NotificationsDropDown').hide()
            $('#AnalyticsDropDown').hide()
            $('#LikesDropDown').hide()
            $('#Wallets').addClass('active');
            $('#dashboard').removeClass('active');
            $('#Revenue').removeClass('active');
            $('#Notifications').removeClass('active');
            $('#Analytics').removeClass('active');
            $('#Likes').removeClass('active');
          } else {
            $('#WalletsDropDown').hide()
            $('#Wallets').removeClass('active');
          }
          dropdouwnIsOpen = !dropdouwnIsOpen
        })
      })


      const body  = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    toggle  = body.querySelector('.toggle'),
    searchBtn = body.querySelector('.search-box'),
    modeSwitch = body.querySelector('.toggle-switch'),
    modeText = body.querySelector('.mode-text');

    toggle.addEventListener('click' , () =>{
        sidebar.classList.toggle('close')
    });
    searchBtn.addEventListener('click' , () =>{
        sidebar.classList.remove('close');
    });
    modeSwitch.addEventListener('click' , () =>{
        body.classList.toggle('dark');
        if(body.classList.contains('dark')){
            modeText.innerText = 'light Mode'
        }else {
            modeText.innerText = 'Dark Mode'    
        }
    });
