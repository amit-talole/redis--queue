import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('nested')
export class NestedProcessor {
  @Process('nested-job')
  async perform(job: Job<unknown>) {
    console.log("start");    
    console.log(job.data); 
    console.log("done");    
    console.log("jobId",job.id);  
      

   
    return {};
  }
}
