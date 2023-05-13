import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import dataSource, { dataSouceOptions } from 'db/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(dataSouceOptions), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
