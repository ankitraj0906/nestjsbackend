import { Controller, Get, UseGuards } from '@nestjs/common';
import { Role } from '../guards/roles/roles.anums.js';
import { Roles } from '../guards/roles/roles.decorator.js';
import { RolesGuard } from '../guards/roles/roles.guard.js';

@Controller('user-roles')
export class UserRolesController {
  @Get('admin-data')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  getAdminData() {
    return { message: 'This data is only accessible to Admins.' };
  }
  @Get('user-data')
  getUserData() {
    return { message: 'anyone can access' };
  }
}
