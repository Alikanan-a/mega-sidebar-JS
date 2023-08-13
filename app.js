

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
          } else {
            $('#dashboardDropDown').hide()
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
          } else {
            $('#RevenueDropdown').hide()
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
          } else {
            $('#NotificationsDropDown').hide()
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
          } else {
            $('#AnalyticsDropDown').hide()
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
          } else {
            $('#LikesDropDown').hide()
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
          } else {
            $('#WalletsDropDown').hide()
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
