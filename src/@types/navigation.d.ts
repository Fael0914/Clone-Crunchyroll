export type StackList = {
  StackLogin: undefined;
  StackHome: undefined;
}

export type TabList = {
  TabHome: undefined;
  TabList: undefined;
  TabExplorer: undefined;
  TabCast: undefined;
  TabCount: undefined;
}


declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackList, TabList {}
  }
}