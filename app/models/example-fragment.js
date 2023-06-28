import { attr } from '@ember-data/model';
import Fragment from 'ember-data-model-fragments/fragment';

export default class ExampleFragment extends Fragment {
  @attr({ defaultValue: 'initial' }) value1;
  @attr({ defaultValue: 'initial' }) value2;
}
