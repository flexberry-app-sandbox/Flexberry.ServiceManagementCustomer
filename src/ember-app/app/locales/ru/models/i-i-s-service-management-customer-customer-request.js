export default {
  projections: {
    CustomerRequestE: {
      requestDate: {
        __caption__: 'Request date'
      },
      requestText: {
        __caption__: 'Request text'
      },
      customer: {
        __caption__: 'Customer',
        name: {
          __caption__: 'Name'
        }
      }
    },
    CustomerRequestL: {
      requestDate: {
        __caption__: 'Request date'
      },
      requestText: {
        __caption__: 'Request text'
      },
      customer: {
        __caption__: 'Name',
        name: {
          __caption__: 'Name'
        }
      }
    }
  },
  validations: {
    requestDate: {
      __caption__: 'Request date'
    },
    requestText: {
      __caption__: 'Request text'
    },
    customer: {
      __caption__: 'Customer'
    }
  }
};
