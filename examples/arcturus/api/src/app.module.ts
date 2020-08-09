import { join } from 'path';
import { Module } from '@nestjs/common';
import { SlateModule } from 'slate-backend';
import {ServeStaticModule} from '@nestjs/serve-static';

@Module({
  imports: [
    SlateModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveStaticOptions: {
        cacheControl: true,
      },
    }),
  ],
})
export class AppModule {}
