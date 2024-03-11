import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class NestedService {
  constructor(@InjectQueue('nested') private readonly nestedQueue: Queue) {}

 async getHello(): Promise< string> {
  await this.nestedQueue.add('nested-job',{
    file:'tests.mp3'
  })  
    return 'Hello World!';
  }
}
