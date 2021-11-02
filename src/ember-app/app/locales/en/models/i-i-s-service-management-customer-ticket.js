export default {
  projections: {
    TicketE: {
      ticketDate: {
        __caption__: 'ticketDate'
      },
      customer: {
        __caption__: 'customer',
        name: {
          __caption__: 'name'
        }
      },
      ticketPosition: {
        __caption__: 'ticketPosition',
        amount: {
          __caption__: 'amount'
        },
        event: {
          __caption__: 'event',
          startTime: {
            __caption__: 'startTime'
          }
        }
      }
    },
    TicketL: {
      ticketDate: {
        __caption__: 'ticketDate'
      },
      customer: {
        __caption__: 'customer',
        name: {
          __caption__: 'name'
        }
      }
    }
  },
  validations: {
    ticketDate: {
      __caption__: 'ticketDate'
    },
    customer: {
      __caption__: 'customer'
    },
    ticketPosition: {
      __caption__: 'ticketPosition'
    }
  }
};
