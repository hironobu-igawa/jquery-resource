/// <reference path="Resource.ts" />
/// <reference path="Http.ts" />

interface JQueryStatic {

  resource: IResource;
}

interface IResource {

  defaultActions?: resource.IActions;
  defaultToJSON?: () => {};

  init(modelClass: resource.IModelClass<resource.IModel>,
       url: string,
       actions?: resource.IActions): resource.IModelClass<resource.IModel>;

  http: resource.Http;
}

(($: JQueryStatic) => {

  $.resource = {
    init: resource.Resource.init,
    http: resource.Http
  };

  Object.defineProperty($.resource, 'defaultActions', {
    get: () => resource.Resource.defaultActions,
    set: (actions: resource.IActions) => resource.Resource.defaultActions = actions,
    enumerable: true,
    configurable: true
  });

  Object.defineProperty($.resource, 'defaultToJSON', {
    get: () => resource.Resource.defaultToJSON,
    set: (defaultToJSON: () => {}) => resource.Resource.defaultToJSON = defaultToJSON,
    enumerable: true,
    configurable: true
  });
})(jQuery);
