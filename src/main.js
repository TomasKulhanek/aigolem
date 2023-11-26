import environment from '../config/environment.json';
import { CustomElementRegistry } from 'aurelia-web-components';
import {PLATFORM} from 'aurelia-pal';

import { I18N,TCustomAttribute } from 'aurelia-i18n';
import Backend from 'i18next-xhr-backend';
//import resBundle from 'i18next-resource-store-loader!./locales/index.js'

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'))
    .plugin(PLATFORM.moduleName('aurelia-i18n'),(instance) =>{
      let aliases = ['t','i18n'];
      TCustomAttribute.configureAliases(aliases);
      instance.i18next.use(Backend);
      return instance.setup({
        //resources: resBundle,
        backend:{
          loadPath: 'locales/{{lng}}/{{ns}}.json'
        },
        attributes: aliases,
        lng: 'en',
        fallbackLng: 'en',
        debug:true,
        skipTranslationOnMissingKey: true
      })
    })

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => {
    const registry = aurelia.container.get(CustomElementRegistry);
    registry.fallbackPrefix = 'bd-';
    registry.forcePrefix = true;
    registry.useGlobalElements();
    //registry.register(Range);
  }); //aurelia.setRoot(PLATFORM.moduleName('app'))

}
