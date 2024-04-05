// user
import type { RouteObjectType } from "@/routers/interface/index.ts";

export interface UserStateType {
  token: string;
  userInfo: { name: string };
}

// theme
export type LanguageType = "zh" | "en" | null;
export type Layout = "classic" | "horizontal" | "column" | "vertical";

export interface ThemeStateType {
  isDark: boolean;
  isCollapsed: boolean;
  language: LanguageType;
  themeColor: string;
  layout: Layout;
  beginAnimation: boolean;
}

export type FlatMenuType = RouteObjectType[];

export interface AuthState {
  authMenuList: RouteObjectType[];
}