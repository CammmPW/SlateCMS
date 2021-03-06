import { GetSession, HasSession } from '../session';
import {BusinessPipe} from './business.pipe';
import {BusinessService} from './business.service';
import { UserEntity } from '../database/entity/user';
import { BusinessJobApplicationDTO, BusinessSearchDTO } from './business.dto';
import { Business, BusinessJob, BusinessJobApplication } from 'slate-rp-interfaces';
import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { businessJobApplicationWire } from '../database/entity/business/business-job-application.wire';
import { BusinessEntity, BusinessJobApplicationEntity, businessWire } from '../database/entity/business';

@Controller('businesses')
@HasSession()
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get()
  async getAll(): Promise<Business[]> {
    const businesses: BusinessEntity[] = await this.businessService.getAll();
    return businesses.map(business => businessWire(business));
  }

  @Get('jobs')
  async getVacantJobs(@GetSession() user: UserEntity): Promise<BusinessJob[]> {
    return this.businessService.getVacantJobsForUser(user.id!);
  }

  @Get('jobs/:jobID')
  async getJobByID(@Param('jobID') businessID: number, @GetSession() user: UserEntity): Promise<BusinessJob> {
    return this.businessService.getJobByIDForUser(user.id!, businessID);
  }

  @Post('jobs/:jobID/application')
  async applyForJob(@Param('jobID') jobID: number, @GetSession() user: UserEntity, @Body() jobApplicationDTO: BusinessJobApplicationDTO): Promise<BusinessJobApplication> {
    const existingJobApplication: BusinessJobApplicationEntity|undefined = await this.businessService.getJobApplicationForUser(user.id!, jobID);

    if (existingJobApplication) {
      throw new BadRequestException('You can only apply once');
    }

    const jobApplication: BusinessJobApplicationEntity = await this.businessService.createJobApplicationForUser(user.id!, jobID, jobApplicationDTO.content);
    return businessJobApplicationWire(jobApplication);
  }

  @Get(':businessID')
  getByID(@Param('businessID', BusinessPipe) business: BusinessEntity): Business {
    return businessWire(business);
  }

  @Post('search')
  async searchBusinesses(@Body() searchDTO: BusinessSearchDTO): Promise<Business[]> {
    const businesses: BusinessEntity[] = await this.businessService.searchByField('name', searchDTO.name);
    return businesses.map(business => businessWire(business));
  }
}
