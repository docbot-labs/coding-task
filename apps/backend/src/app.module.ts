import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'graphql/schema.gql',
      sortSchema: true,
      introspection: true,
      context: ({ req, res }) => ({ req, res }),
    }),
    DbModule,
    DemoModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
