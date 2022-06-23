export const SidebarData = [
  {
    title: 'Navigations',
    path: '',
    icon: '',
    type: 'menu-header',
  },
  {
    title: 'Dashboard',
    path: '/',
    icon: 'bi bi-cpu',
    type: 'menu-item',
  },
  {
    title: 'Account',
    path: '',
    icon: 'fas fa-user-secret',
    type: 'sub_menu',
    subNav: [
      {
        title: 'Profile ',
        icon: 'fas fa-user-circle',
        path: '/3',
      },
      {
        title: 'PayPal',
        icon: 'far fa-money-bill-alt',
        path: '/2',
      },
      {
        title: 'History',
        icon: 'fas fa-history',
        path: '/2',
      },
    ],
  },
  {
    title: 'Wallet',
    path: '',
    icon: 'far fa-credit-card',
    type: 'sub_menu',
    subNav: [
      {
        title: 'Setting Wallet',
        icon: 'far fa-folder-open',
        path: '/3',
      },
      {
        title: 'History',
        icon: 'fas fa-history',
        path: '/2',
      },
    ],
  },
  {
    title: 'BOT - BSC',
    path: '',
    icon: '',
    type: 'menu-header',
  },
  {
    title: 'Sniper BOT',
    path: '',
    icon: 'fas fa-fighter-jet',
    type: 'sub_menu',
    subNav: [
      {
        title: 'Sniper Bot Online',
        icon: 'fas fa-cloud',
        path: '/2',
      },
      {
        title: 'Buy Now',
        icon: 'fas fa-cart-arrow-down',
        path: '/2',
      },
      {
        title: 'Documentation',
        icon: 'fas fa-book',
        path: '/3',
      },
    ],
  }
]
