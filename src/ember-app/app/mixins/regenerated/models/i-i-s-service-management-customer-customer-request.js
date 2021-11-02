import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  requestDate: DS.attr('date'),
  requestText: DS.attr('string'),
  customer: DS.belongsTo('i-i-s-service-management-customer-customer', { inverse: null, async: false })
});

export let ValidationRules = {
  requestDate: {
    descriptionKey: 'models.i-i-s-service-management-customer-customer-request.validations.requestDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  requestText: {
    descriptionKey: 'models.i-i-s-service-management-customer-customer-request.validations.requestText.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  customer: {
    descriptionKey: 'models.i-i-s-service-management-customer-customer-request.validations.customer.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CustomerRequestE', 'i-i-s-service-management-customer-customer-request', {
    requestDate: attr('Request date', { index: 0 }),
    requestText: attr('Request text', { index: 1 }),
    customer: belongsTo('i-i-s-service-management-customer-customer', 'Customer', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('CustomerRequestL', 'i-i-s-service-management-customer-customer-request', {
    requestDate: attr('Request date', { index: 0 }),
    requestText: attr('Request text', { index: 1 }),
    customer: belongsTo('i-i-s-service-management-customer-customer', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
