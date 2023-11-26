import {PLATFORM} from 'aurelia-pal';
export function configure(config) {
  config.globalResources([
    PLATFORM.moduleName('bd/body.html'),
    PLATFORM.moduleName('bd/bodyleft.html'),
    PLATFORM.moduleName('bd/bodyright.html'),
    PLATFORM.moduleName('bd/right.html'),
    PLATFORM.moduleName('bd/left.html'),
    PLATFORM.moduleName('bd/head.html'),
    PLATFORM.moduleName('bd/right2.html'),
    PLATFORM.moduleName('bd/panel'),
    PLATFORM.moduleName('bd/panel2.html'),
    PLATFORM.moduleName('bd/panels.html'),
    PLATFORM.moduleName('bd/infopanel.html'),
    PLATFORM.moduleName('bd/header1.html'),
    PLATFORM.moduleName('bd/footer1.html'),
    PLATFORM.moduleName('bd/footer2.html'),
    PLATFORM.moduleName('bd/bodyleft2.html'),
    PLATFORM.moduleName('bd/bodyright2.html'),
    PLATFORM.moduleName('bd/carousel'),
    PLATFORM.moduleName('bd/language.html'),
    PLATFORM.moduleName('bd/center-panel'),
    PLATFORM.moduleName('bd/prompt'),
    PLATFORM.moduleName('bd/prompt-output'),
    //PLATFORM.moduleName('w3.css')
  ]);
}
