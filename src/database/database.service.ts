import {
  Injectable,
  OnModuleInit,
  OnApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {
  private isConnected = false;
  onModuleInit() {
    this.isConnected = true;
    console.log('DatabaseService initialized and connected to the database.');
  }
  onApplicationShutdown(signal: string) {
    this.isConnected = false;
    console.log(
      'Database is disconnected due to application shutdown signal: ${signal}',
    );
  }
  getStatus() {
    return this.isConnected ? 'Connected' : 'Disconnected';
  }
}
