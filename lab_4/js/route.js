'use stict';

function Route (name, htmlName, defaultRoute) {
  try {
    if (!name || !htmlName) {
      throw 'error: name and htmlName params are mandatories';
    }
    this.constructor (name, htmlName, defaultRoute);
  } catch (e) {
    console.error (e);
  }
}

Route.prototype = {
  constructor: function (name, htmlName, defaultRoute) {
    this.name = name;
    this.htmlName = htmlName;
    this.default = defaultRoute;
  },
  isActiveRoute: function (hashedPath) {
    return hashedPath.replace ('#', '') === this.name;
  },
};
