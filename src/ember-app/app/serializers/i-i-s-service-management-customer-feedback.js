import { Serializer as FeedbackSerializer } from
  '../mixins/regenerated/serializers/i-i-s-service-management-customer-feedback';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(FeedbackSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
