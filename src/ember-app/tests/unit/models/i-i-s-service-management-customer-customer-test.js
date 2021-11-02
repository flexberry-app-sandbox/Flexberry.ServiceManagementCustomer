import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-service-management-customer-customer', 'Unit | Model | i-i-s-service-management-customer-customer', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
