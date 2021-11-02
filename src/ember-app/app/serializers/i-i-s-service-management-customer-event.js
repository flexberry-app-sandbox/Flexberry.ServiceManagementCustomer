import { Serializer as EventSerializer } from
  '../mixins/regenerated/serializers/i-i-s-service-management-customer-event';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(EventSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
