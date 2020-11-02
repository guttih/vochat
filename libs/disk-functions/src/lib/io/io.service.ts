import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class IoService {

    public GetJsonFileContent(filePath:string, encoding='utf-8'):Promise<any> {
        return new Promise<any>((resolve, reject) => {
            fs.readFile(filePath, { encoding : encoding }, (err, fileContent) => { 
                if (err)    {
                    reject(err);
                } else {
                    resolve(fileContent)
                }
                
            } );

        });

    }
}
