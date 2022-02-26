import { action, makeObservable, observable, toJS } from 'mobx';
import axios from 'axios';

export class SearchPresenter {
    rootStore;

    constructor(rootStore) {
        makeObservable(this, {

            // data

            // setters

            // api calls
        })

        this.rootStore = rootStore;
    }

}