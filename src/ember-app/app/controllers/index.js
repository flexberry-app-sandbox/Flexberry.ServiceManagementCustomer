import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.events-and-requests.caption'),
          title: i18n.t('forms.application.sitemap.events-and-requests.title'),
          children: [{
            link: 'i-i-s-service-management-customer-feedback-l',
            caption: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-customer-feedback-l.caption'),
            title: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-customer-feedback-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-service-management-customer-customer-request-l',
            caption: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-customer-customer-request-l.caption'),
            title: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-customer-customer-request-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-service-management-customer-event-l',
            caption: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-customer-event-l.caption'),
            title: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-customer-event-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-service-management-customer-ticket-l',
            caption: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-customer-ticket-l.caption'),
            title: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-service-management-customer-ticket-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.profile.caption'),
          title: i18n.t('forms.application.sitemap.profile.title'),
          children: [{
            link: 'i-i-s-service-management-customer-customer-l',
            caption: i18n.t('forms.application.sitemap.profile.i-i-s-service-management-customer-customer-l.caption'),
            title: i18n.t('forms.application.sitemap.profile.i-i-s-service-management-customer-customer-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})