import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Service_ management_ customer',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Service_ management_ customer',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Service_ management_ customer',
          title: 'Service_ management_ customer'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'events-and-requests': {
          caption: 'Events and Requests',
          title: 'Events and Requests',
          'i-i-s-service-management-customer-feedback-l': {
            caption: 'Feedback',
            title: ''
          },
          'i-i-s-service-management-customer-customer-request-l': {
            caption: 'Customer request',
            title: ''
          },
          'i-i-s-service-management-customer-event-l': {
            caption: 'Event',
            title: ''
          },
          'i-i-s-service-management-customer-ticket-l': {
            caption: 'Ticket',
            title: ''
          }
        },
        profile: {
          caption: 'Profile',
          title: 'Profile',
          'i-i-s-service-management-customer-customer-l': {
            caption: 'Customer Profile',
            title: 'Customer'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
