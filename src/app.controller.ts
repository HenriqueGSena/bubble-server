import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('server')
export class AppController {
  constructor(private readonly appService: AppService) { }
  
  @Get('list')
  public async getAccommodation() {
    try {
      const listServer = await this.appService.findAccommodation();
      return listServer;
    } catch (error) {
      console.error('Error no retorno dos dados', error);
      throw error;
    }
  }
}
