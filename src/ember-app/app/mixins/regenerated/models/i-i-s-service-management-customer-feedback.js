import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  ranking: DS.attr('number'),
  feedbackText: DS.attr('string'),
  event: DS.belongsTo('i-i-s-service-management-customer-event', { inverse: null, async: false }),
  customer: DS.belongsTo('i-i-s-service-management-customer-customer', { inverse: null, async: false })
});

export let ValidationRules = {
  ranking: {
    descriptionKey: 'models.i-i-s-service-management-customer-feedback.validations.ranking.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  feedbackText: {
    descriptionKey: 'models.i-i-s-service-management-customer-feedback.validations.feedbackText.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  event: {
    descriptionKey: 'models.i-i-s-service-management-customer-feedback.validations.event.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  customer: {
    descriptionKey: 'models.i-i-s-service-management-customer-feedback.validations.customer.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('FeedbackE', 'i-i-s-service-management-customer-feedback', {
    ranking: attr('Ranking', { index: 0 }),
    feedbackText: attr('Feedback text', { index: 1 }),
    event: belongsTo('i-i-s-service-management-customer-event', 'Event', {
      startTime: attr('Start time', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'startTime' }),
    customer: belongsTo('i-i-s-service-management-customer-customer', 'Customer', {
      name: attr('Name', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('FeedbackL', 'i-i-s-service-management-customer-feedback', {
    ranking: attr('Ranking', { index: 0 }),
    feedbackText: attr('Feedback text', { index: 1 }),
    event: belongsTo('i-i-s-service-management-customer-event', 'Start time', {
      startTime: attr('Start time', { index: 2 })
    }, { index: -1, hidden: true }),
    customer: belongsTo('i-i-s-service-management-customer-customer', 'Name', {
      name: attr('Name', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
