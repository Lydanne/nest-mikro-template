export default (app) => {
  const _module = module as any;
  if (_module.hot) {
    _module.hot.accept();
    _module.hot.dispose(() => app.close());
  }
};
