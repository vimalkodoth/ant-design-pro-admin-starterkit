import component from './ar-EG/component';
import globalHeader from './ar-EG/globalHeader';
import menu from './ar-EG/menu';
import pages from './ar-EG/pages';
import pwa from './ar-EG/pwa';
import settingDrawer from './ar-EG/settingDrawer';
import settings from './ar-EG/settings';

export default {
  'navBar.lang': 'زبان ها  ',
  'layout.user.link.help': 'کمک',
  'layout.user.link.privacy': 'حریم خصوصی',
  'layout.user.link.terms': 'مقررات',
  'app.preview.down.block': 'این صفحه را در پروژه محلی خود بارگیری کنید',
  'app.welcome.link.fetch-blocks': 'دریافت تمام بلوک',
  'app.welcome.link.block-list': 'به سرعت صفحات استاندارد مبتنی بر توسعه "بلوک" را بسازید',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
