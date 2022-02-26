import { action, makeObservable, observable, toJS } from 'mobx';
import axios from 'axios';

export class SearchPresenter {
    rootStore;

    curLong = 151.2051831;
    curLat = -33.879007;
    startStatus = false;
    endStatus = false;

    constructor(rootStore) {
        makeObservable(this, {

            // data
            curLong: observable,
            curLat: observable,
            startStatus: observable,
            endStatus: observable,

            // setters
            setStartTrue: action,
            setStartFalse: action,
            setEndTrue: action,
            setEndFalse: action,

            // api calls
        })

        this.rootStore = rootStore;
    }

    setStartTrue() {
        this.startStatus = true;
    }

    setStartFalse() {
        this.startStatus = false;
    }

    setEndTrue() {
        this.endStatus = true;
    }

    setEndFalse() {
        this.endStatus = false;
    }

}