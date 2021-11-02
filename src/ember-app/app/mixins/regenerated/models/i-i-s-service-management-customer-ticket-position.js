import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  amount: DS.attr('number'),
  event: DS.belongsTo('i-i-s-service-management-customer-event', { inverse: null, async: false }),
  ticket: DS.belongsTo('i-i-s-service-management-customer-ticket', { inverse: 'ticketPosition', async: false })
});

export let ValidationRules = {
  amount: {
    descriptionKey: 'models.i-i-s-service-management-customer-ticket-position.validations.amount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  event: {
    descriptionKey: 'models.i-i-s-service-management-customer-ticket-position.validations.event.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ticket: {
    descriptionKey: 'models.i-i-s-service-management-customer-ticket-position.validations.ticket.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('TicketPositionE', 'i-i-s-service-management-customer-ticket-position', {
    amount: attr('Amount', { index: 0 }),
    event: belongsTo('i-i-s-service-management-customer-event', 'Event', {
      startTime: attr('Start time', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'startTime' })
  });
};
