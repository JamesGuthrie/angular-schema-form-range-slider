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
