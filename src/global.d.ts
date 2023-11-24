declare module '*.module.scss' {
  const classNames: {
    [className: string]: string;
  };
  export default classNames;
}

declare module '*.module.css' {
  const classNames: {
    [className: string]: string;
  };
  export default classNames;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare var cx: typeof import('classnames')