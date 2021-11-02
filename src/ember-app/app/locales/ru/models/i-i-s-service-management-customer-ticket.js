export default {
  projections: {
    TicketE: {
      ticketDate: {
        __caption__: 'Ticket date'
      },
      customer: {
        __caption__: 'Customer',
        name: {
          __caption__: 'Name'
        }
      },
      ticketPosition: {
        __caption__: 'Ticket position',
        amount: {
          __caption__: 'Amount'
        },
        event: {
          __caption__: 'Event',
          startTime: {
            __caption__: 'Start time'
          }
        }
      }
    },
    TicketL: {
      ticketDate: {
        __caption__: 'Ticket date'
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
    ticketDate: {
      __caption__: 'Ticket date'
    },
    customer: {
      __caption__: 'Customer'
    },
    ticketPosition: {
      __caption__: 'Ticket position'
    }
  }
};
