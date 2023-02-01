
/**
 * guard: 접근제어 허용 여부 default: false
 * history: 히스토리 모드 적용 여부 default: false
 */
export type CustomRouteObject = {
  path?: string;
  id: string;
  index?: boolean;
  element?: JSX.Element,
  guard?: boolean;
  history?: boolean;
  loader?: () => void;
  data?: string;
  children?: CustomRouteObject[];
}

export type CustomHandle = {
  menuName?: string;
  guard?: boolean;
  history?: boolean;
}