import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tEventTypeEnum from '../enums/i-i-s-service-management-customer-t-event-type';

export default FlexberryEnum.extend({
  enum: tEventTypeEnum,
  sourceType: 'IIS.Service_Management_Customer.tEventType'
});
