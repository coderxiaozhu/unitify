import { App } from "vue";
import { Button } from "./components/button";
import Avatar from "./components/avatar/avatar.vue";
import { Icon } from "./components/icon";
import { Tab, Tabs } from "./components/tabs";
import { Swiper, SwiperItem } from "./components/swiper";
import { FlexItem, Flex } from "./components/flex";
import { Image } from "./components/image";
import { Cell ,CellGroup} from "./components/cell";
// 所有组件列表
const components = [
  Button,
  Avatar,
  Icon,
  Tab,
  Tabs,
  Swiper,
  SwiperItem,
  FlexItem,
  Flex,
  Image,
  Cell,
  CellGroup
];

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component));
};

export {
  Button,
  Avatar,
  Icon,
  Tab,
  Tabs,
  Swiper,
  SwiperItem,
  FlexItem,
  Flex,
  Image,
  Cell,
  CellGroup
};

export default {
  install,
};
