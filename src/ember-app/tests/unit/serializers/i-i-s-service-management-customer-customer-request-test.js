import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-service-management-customer-customer-request', 'Unit | Serializer | i-i-s-service-management-customer-customer-request', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-service-management-customer-customer-request',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-service-management-customer-t-event-type',

    'model:i-i-s-service-management-customer-customer-request',
    'model:i-i-s-service-management-customer-customer',
    'model:i-i-s-service-management-customer-event',
    'model:i-i-s-service-management-customer-feedback',
    'model:i-i-s-service-management-customer-service-provider',
    'model:i-i-s-service-management-customer-ticket-position',
    'model:i-i-s-service-management-customer-ticket',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
