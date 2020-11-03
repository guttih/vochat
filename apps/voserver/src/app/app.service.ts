import { Injectable } from '@nestjs/common';
import { DiskFunctionsModule } from '@advania/disk-functions';

@Injectable()
export class AppService {

  constructor(private readonly disk: DiskFunctionsModule){}
  getData(): { message: string } {
    console.log('getData dude')
    return { message: 'Welcome to voserver!' };
  }


  async getConfig() {
    const file = './apps/voserver/test.json'
    //const file ='C:\work\repos\haust-dagskra\Vonage\vochat\apps\voserver\test.json'
    const jsonObject = this.disk.GetJsonFileContent(file);
    return jsonObject;
  }
  getStartingPage() {
    return { message: 'Welcome to voserver!' };
  }
}

