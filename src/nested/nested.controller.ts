import { Controller, Get, Post } from '@nestjs/common';
import { NestedService } from './nested.service';

@Controller()
export class NestedController {
  constructor(private readonly nestedService:NestedService) {}

  @Post()
  async getHello(): Promise<string> {  
    
    return this.nestedService.getHello()
  
  }
}
