import Model, { attr } from '@ember-data/model';
import { fragment } from 'ember-data-model-fragments/attributes';

export default class ExampleModel extends Model {
  @attr name;

  // NOTE: this causes an error
  @fragment('example-fragment', { defaultValue: () => ({}) }) exampleFragment;

  // NOTE: this works
  // @fragment('example-fragment', { defaultValue: {} }) exampleFragment;
}
