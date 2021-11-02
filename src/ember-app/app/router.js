import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-service-management-customer-customer-l');
  this.route('i-i-s-service-management-customer-customer-e',
  { path: 'i-i-s-service-management-customer-customer-e/:id' });
  this.route('i-i-s-service-management-customer-customer-e.new',
  { path: 'i-i-s-service-management-customer-customer-e/new' });
  this.route('i-i-s-service-management-customer-customer-request-l');
  this.route('i-i-s-service-management-customer-customer-request-e',
  { path: 'i-i-s-service-management-customer-customer-request-e/:id' });
  this.route('i-i-s-service-management-customer-customer-request-e.new',
  { path: 'i-i-s-service-management-customer-customer-request-e/new' });
  this.route('i-i-s-service-management-customer-event-l');
  this.route('i-i-s-service-management-customer-event-e',
  { path: 'i-i-s-service-management-customer-event-e/:id' });
  this.route('i-i-s-service-management-customer-event-e.new',
  { path: 'i-i-s-service-management-customer-event-e/new' });
  this.route('i-i-s-service-management-customer-feedback-l');
  this.route('i-i-s-service-management-customer-feedback-e',
  { path: 'i-i-s-service-management-customer-feedback-e/:id' });
  this.route('i-i-s-service-management-customer-feedback-e.new',
  { path: 'i-i-s-service-management-customer-feedback-e/new' });
  this.route('i-i-s-service-management-customer-service-provider-l');
  this.route('i-i-s-service-management-customer-service-provider-e',
  { path: 'i-i-s-service-management-customer-service-provider-e/:id' });
  this.route('i-i-s-service-management-customer-service-provider-e.new',
  { path: 'i-i-s-service-management-customer-service-provider-e/new' });
  this.route('i-i-s-service-management-customer-ticket-l');
  this.route('i-i-s-service-management-customer-ticket-e',
  { path: 'i-i-s-service-management-customer-ticket-e/:id' });
  this.route('i-i-s-service-management-customer-ticket-e.new',
  { path: 'i-i-s-service-management-customer-ticket-e/new' });
});

export default Router;
