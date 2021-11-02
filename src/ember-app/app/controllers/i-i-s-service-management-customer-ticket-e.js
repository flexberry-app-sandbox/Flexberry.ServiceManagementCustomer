import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-service-management-customer-ticket-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-service-management-customer-ticket-position+event':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'startTime',
            required: true,
            relationName: 'event',
            projection: 'EventL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
