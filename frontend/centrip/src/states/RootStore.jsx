import { SearchPresenter } from './SearchPresenter';

export class RootStore {
    searchPresenter;

    constructor() {
        this.searchPresenter = new SearchPresenter(this);
    }
}