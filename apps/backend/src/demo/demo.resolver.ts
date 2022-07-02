import { Resolver, Query } from '@nestjs/graphql';
import { Demo } from './models/demo.model';

@Resolver()
export class DemoResolver {
  @Query(() => Demo)
  demo() {
    return {
      message: 'Demo!',
    };
  }
}
