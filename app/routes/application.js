import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  model() {
    const payload = {
      example: {
        id: 'abc',
        name: 'Example',
        example_fragment: {
          value1: 'updated',
        },
      },
    };

    this.store.pushPayload(payload);

    return this.store.peekRecord('example', payload.example.id);
  }
}
