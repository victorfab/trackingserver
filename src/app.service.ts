import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTrackingInfo(): any {
    return {
      fullName: 'CONCEPCION VERDUZCO ADIS',
      env: false,
      cardNumLastDig: '9986',
      cardOrderStatus: [
        {
          trakingStatusCode: '2',
          effDt: '2023-04-01',
          reasonCode: 1,
        },
        {
          trakingStatusCode: '9',
          effDt: '2023-04-01',
          reasonCode: 1,
        }
      ],
      fiData: {
        branchIdent: '5555',
        branchName: 'Corregidora',
      },  
    };
  }
}
// {
//   trakingStatusCode: '2',
//   effDt: '2023-04-01',
//   reasonCode: 1,
// },
// fiData: {
// branchIdent: '0023';
// branchName: 'San Cosme';
// } 2,9, 10, 8
// PF/BBOEdRPOaJMBYdoXZKlqsytget83PxfCqFIEhDEdsq0A/NXgXLbytXxsH9szJEXfcQZ9kRIWqSVbLuasd1wnronCbsJeas8T/ojBy8R2OALBrWDLYn8Uf7McJVCD6VH3kq6hUfEDX1SE3xWJ+/Ksc/dkmSwNZgL1sU5NHq85Y9AzwrDNLz6rS10OQWsOLCydZ3liBpwBJGNwWmrexMolYFRmiY9zRV4JGYTy0S8CQAeR7s+X+mlaWWBuE97ymussnJkGIGMZzc+o/UX0fnA8CbYuuNv4lgzcbpdG3k1N3o8rRC0zeyPr+zrcxWMAShGW64ZRqsQmb+6Rax9D83w==


/* export class AppService {
  getTrackingInfo(): any {
    return {
      fullName: 'CONCEPCION VERDUZCO ADIS',
      cardNumLastDig: '9986',
      cardOrderStatus: [
        {
          trakingStatusCode: '2',
          effDt: '2023-04-01',
          reasonCode: 1,
        },
        {
          trakingStatusCode: '0',
          effDt: '2023-04-05',
          reasonCode: 1,
        },
        {
          trakingStatusCode: '0',
          effDt: '2023-04-07',
          reasonCode: 1,
        },
        {
          trakingStatusCode: '0',
          effDt: '2023-04-12',
          reasonCode: 1,
        },
      ],
      fiData: {
        branchIdent: '0023',
        branchName: 'San Cosme',
      },
    };
  }
} */