export const navigation = [
  // contains the layout of nav-toolbar in the app
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Examples',
    icon: 'folder',
    items: [
      {
        text: 'Profile',
        path: '/profile'
      },
      {
        text: 'Tasks',
        path: '/tasks'
      }
    ]
  },
  {
    text: 'Ilia Pages',
    icon: 'product',
    items: [
      {
        text: 'Meals Grid',
        path: '/pages/meals-grid',
        icon: 'columnfield'
      },
      {
        text: 'Ingredients Tree',
        path: '/pages/ingredients-tree',
        icon: 'hierarchy'
      },
    ]
  },
];
