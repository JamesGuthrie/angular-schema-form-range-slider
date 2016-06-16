angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/range-slider/angular-schema-form-range-slider.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\n    <label class=\"control-label\" {{form.labelHtmlClass}} ng-show=\"showTitle()\">{{form.title}}</label>\n    <div ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddongRight)}\">\n        <span ng-if=\"form.fieldAddonLeft\"\n              class=\"input-group-addon\"\n              ng-bind-html=\"form.fieldAddonLeft\"></span>\n        <rzslider ng-show=\"form.key\"\n                   class=\"{{form.fieldHtmlClass}}\"\n                   ng-disabled=\"form.readonly\"\n                   rz-slider-options=\"form.options\"\n                   rz-slider-model=\"$$value$$\"\n                   ng-model=\"$$value$$\"\n                   schema-validate=\"form\" />\n        <span ng-if=\"form.fieldAddonRight\"\n              class=\"input-group-addon\"\n              ng-bind-html=\"form.fieldAddonRight\"></span>\n    </div>\n    <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n<!--\n-->\n");}]);
angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function(schemaFormProvider,  schemaFormDecoratorsProvider) {

          //Add to the bootstrap directive
          schemaFormDecoratorsProvider.addMapping(
              'bootstrapDecorator',
              'range',
              'directives/decorators/bootstrap/range-slider/angular-schema-form-range-slider.html'
          );
          schemaFormDecoratorsProvider.createDirective(
              'range',
              'directives/decorators/bootstrap/range-slider/angular-schema-form-slider.html'
          );
        }
    ]);
