import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  eventType: DS.attr('i-i-s-service-management-customer-t-event-type'),
  eventDate: DS.attr('date'),
  description: DS.attr('string'),
  startTime: DS.attr('string'),
  duration: DS.attr('string'),
  serviceProvider: DS.belongsTo('i-i-s-service-management-customer-service-provider', { inverse: null, async: false })
});

export let ValidationRules = {
  eventType: {
    descriptionKey: 'models.i-i-s-service-management-customer-event.validations.eventType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  eventDate: {
    descriptionKey: 'models.i-i-s-service-management-customer-event.validations.eventDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  description: {
    descriptionKey: 'models.i-i-s-service-management-customer-event.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  startTime: {
    descriptionKey: 'models.i-i-s-service-management-customer-event.validations.startTime.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  duration: {
    descriptionKey: 'models.i-i-s-service-management-customer-event.validations.duration.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  serviceProvider: {
    descriptionKey: 'models.i-i-s-service-management-customer-event.validations.serviceProvider.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('EventE', 'i-i-s-service-management-customer-event', {
    eventDate: attr('Event date', { index: 0 }),
    eventType: attr('Event type', { index: 1 }),
    startTime: attr('Start time', { index: 2 }),
    duration: attr('Duration', { index: 3 }),
    description: attr('Description', { index: 4 }),
    serviceProvider: belongsTo('i-i-s-service-management-customer-service-provider', 'Service provider', {
      name: attr('Name', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('EventL', 'i-i-s-service-management-customer-event', {
    eventDate: attr('Event date', { index: 0 }),
    eventType: attr('Event type', { index: 1 }),
    startTime: attr('Start time', { index: 2 }),
    duration: attr('Duration', { index: 3 }),
    description: attr('Description', { index: 4 }),
    serviceProvider: belongsTo('i-i-s-service-management-customer-service-provider', 'Name', {
      name: attr('Name', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
