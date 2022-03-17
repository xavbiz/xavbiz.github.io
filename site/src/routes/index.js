export const contactPage = {
  path: '/contact',
  template: 'src/pages/Contact',
  title: 'Get in touch',
};

export const homePage = {
  path: '/',
  template: 'src/pages/Home',
};

export const routes = [
  homePage,
  contactPage,
  {
    path: '404',
    template: 'src/pages/404',
  },
];

export default routes;

