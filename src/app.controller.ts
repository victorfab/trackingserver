import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('api/session')
  getSession(): any {
    return {
      SecObjRec: {
        SecObjInfoBean: {
          SecObjData: [
            {
              SecObjDataKey: 'ShipmentNum',
              SecObjDataValue: '22062910000282',
              SecObjDataType: 'STRING',
            },
          ],
        },
      },
    };
  }

  @Post('api/cards/status/tracking')
  getTrackingInfo(): any {
    return this.appService.getTrackingInfo();
  }
}
