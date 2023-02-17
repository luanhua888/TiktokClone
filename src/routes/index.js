import Home from "src/pages/Home/index.js";
import Following from "src/pages/Following/index.js";
import Profile from "src/pages/Profile/index.js";
import Upload from "src/pages/Upload/index.js";
import Search from "src/pages/Search/index.js";

//Layouts
import {HeaderOnly} from "src/components/GlobalStyle/Layouts/index.js";


const publicRoutes = [
  {
    path: '/', // trang chủ
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    layout : HeaderOnly 
  },
  {
    path: "/search",
    component: Search,
    layout : null 
  },

];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
