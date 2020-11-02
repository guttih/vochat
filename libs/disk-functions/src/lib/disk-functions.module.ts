import { Module } from '@nestjs/common';
import { IoService } from './io/io.service';
import * as fs from 'fs';

@Module({
  controllers: [],
  providers: [IoService],
  exports: [IoService],
})
export class DiskFunctionsModule {
  public GetJsonFileContent(filePath: string, encoding = 'utf-8'): Promise<unknown> {
    return new Promise<any>((resolve, reject) => {
      fs.readFile(filePath, { encoding: encoding }, (err, fileContent) => {
        if (err) {
          reject(err);
        } else {
          try {
            const conf = JSON.parse(fileContent);
            resolve(conf);
          } catch (e) {
            console.log(e);
            reject({ error: 'Could not convert file content to json' });
          }
        }
      });
    });
  }
}
