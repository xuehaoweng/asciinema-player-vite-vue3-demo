declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.less';
declare module '*.png';
declare module '*.cast';
declare module '*.js';