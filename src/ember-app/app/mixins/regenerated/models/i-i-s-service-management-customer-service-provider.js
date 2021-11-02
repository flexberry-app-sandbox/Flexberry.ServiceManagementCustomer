import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  contactInfo: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-service-management-customer-service-provider.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  contactInfo: {
    descriptionKey: 'models.i-i-s-service-management-customer-service-provider.validations.contactInfo.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ServiceProviderE', 'i-i-s-service-management-customer-service-provider', {
    name: attr('Name', { index: 0 }),
    contactInfo: attr('Contact info', { index: 1 })
  });

  modelClass.defineProjection('ServiceProviderL', 'i-i-s-service-management-customer-service-provider', {
    name: attr('Name', { index: 0 }),
    contactInfo: attr('Contact info', { index: 1 })
  });
};
