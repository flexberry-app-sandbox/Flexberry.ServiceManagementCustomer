import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISService_Management_CustomerCustomerLForm from './forms/i-i-s-service-management-customer-customer-l';
import IISService_Management_CustomerCustomerRequestLForm from './forms/i-i-s-service-management-customer-customer-request-l';
import IISService_Management_CustomerEventLForm from './forms/i-i-s-service-management-customer-event-l';
import IISService_Management_CustomerFeedbackLForm from './forms/i-i-s-service-management-customer-feedback-l';
import IISService_Management_CustomerServiceProviderLForm from './forms/i-i-s-service-management-customer-service-provider-l';
import IISService_Management_CustomerTicketLForm from './forms/i-i-s-service-management-customer-ticket-l';
import IISService_Management_CustomerCustomerEForm from './forms/i-i-s-service-management-customer-customer-e';
import IISService_Management_CustomerCustomerRequestEForm from './forms/i-i-s-service-management-customer-customer-request-e';
import IISService_Management_CustomerEventEForm from './forms/i-i-s-service-management-customer-event-e';
import IISService_Management_CustomerFeedbackEForm from './forms/i-i-s-service-management-customer-feedback-e';
import IISService_Management_CustomerServiceProviderEForm from './forms/i-i-s-service-management-customer-service-provider-e';
import IISService_Management_CustomerTicketEForm from './forms/i-i-s-service-management-customer-ticket-e';
import IISService_Management_CustomerCustomerRequestModel from './models/i-i-s-service-management-customer-customer-request';
import IISService_Management_CustomerCustomerModel from './models/i-i-s-service-management-customer-customer';
import IISService_Management_CustomerEventModel from './models/i-i-s-service-management-customer-event';
import IISService_Management_CustomerFeedbackModel from './models/i-i-s-service-management-customer-feedback';
import IISService_Management_CustomerServiceProviderModel from './models/i-i-s-service-management-customer-service-provider';
import IISService_Management_CustomerTicketPositionModel from './models/i-i-s-service-management-customer-ticket-position';
import IISService_Management_CustomerTicketModel from './models/i-i-s-service-management-customer-ticket';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-service-management-customer-customer-request': IISService_Management_CustomerCustomerRequestModel,
    'i-i-s-service-management-customer-customer': IISService_Management_CustomerCustomerModel,
    'i-i-s-service-management-customer-event': IISService_Management_CustomerEventModel,
    'i-i-s-service-management-customer-feedback': IISService_Management_CustomerFeedbackModel,
    'i-i-s-service-management-customer-service-provider': IISService_Management_CustomerServiceProviderModel,
    'i-i-s-service-management-customer-ticket-position': IISService_Management_CustomerTicketPositionModel,
    'i-i-s-service-management-customer-ticket': IISService_Management_CustomerTicketModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'events-and-requests': {
          caption: 'events-and-requests',
          title: 'events-and-requests',
          'i-i-s-service-management-customer-feedback-l': {
            caption: 'i-i-s-service-management-customer-feedback-l',
            title: 'i-i-s-service-management-customer-feedback-l'
          },
          'i-i-s-service-management-customer-customer-request-l': {
            caption: 'i-i-s-service-management-customer-customer-request-l',
            title: 'i-i-s-service-management-customer-customer-request-l'
          },
          'i-i-s-service-management-customer-event-l': {
            caption: 'i-i-s-service-management-customer-event-l',
            title: 'i-i-s-service-management-customer-event-l'
          },
          'i-i-s-service-management-customer-ticket-l': {
            caption: 'i-i-s-service-management-customer-ticket-l',
            title: 'i-i-s-service-management-customer-ticket-l'
          }
        },
        profile: {
          caption: 'profile',
          title: 'profile',
          'i-i-s-service-management-customer-customer-l': {
            caption: 'i-i-s-service-management-customer-customer-l',
            title: 'i-i-s-service-management-customer-customer-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-service-management-customer-customer-l': IISService_Management_CustomerCustomerLForm,
    'i-i-s-service-management-customer-customer-request-l': IISService_Management_CustomerCustomerRequestLForm,
    'i-i-s-service-management-customer-event-l': IISService_Management_CustomerEventLForm,
    'i-i-s-service-management-customer-feedback-l': IISService_Management_CustomerFeedbackLForm,
    'i-i-s-service-management-customer-service-provider-l': IISService_Management_CustomerServiceProviderLForm,
    'i-i-s-service-management-customer-ticket-l': IISService_Management_CustomerTicketLForm,
    'i-i-s-service-management-customer-customer-e': IISService_Management_CustomerCustomerEForm,
    'i-i-s-service-management-customer-customer-request-e': IISService_Management_CustomerCustomerRequestEForm,
    'i-i-s-service-management-customer-event-e': IISService_Management_CustomerEventEForm,
    'i-i-s-service-management-customer-feedback-e': IISService_Management_CustomerFeedbackEForm,
    'i-i-s-service-management-customer-service-provider-e': IISService_Management_CustomerServiceProviderEForm,
    'i-i-s-service-management-customer-ticket-e': IISService_Management_CustomerTicketEForm
  },

});

export default translations;
