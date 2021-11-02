import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  phone: DS.attr('string'),
  eMail: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-service-management-customer-customer.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  surname: {
    descriptionKey: 'models.i-i-s-service-management-customer-customer.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phone: {
    descriptionKey: 'models.i-i-s-service-management-customer-customer.validations.phone.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  eMail: {
    descriptionKey: 'models.i-i-s-service-management-customer-customer.validations.eMail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CustomerE', 'i-i-s-service-management-customer-customer', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    phone: attr('Phone', { index: 2 }),
    eMail: attr('E mail', { index: 3 })
  });

  modelClass.defineProjection('CustomerL', 'i-i-s-service-management-customer-customer', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    phone: attr('Phone', { index: 2 }),
    eMail: attr('E mail', { index: 3 })
  });
};
