import { action, makeObservable, observable, toJS } from 'mobx';
import axios from 'axios';

export class SearchPresenter {
    rootStore;

    curLong = 151.2051831;
    curLat = -33.879007;
    startStatus = false;
    endStatus = false;
    selectedOption = "none";
    startLong = 151.2051831;
    startLat = -33.879007;
    endLong = 151.2251831;
    endLat = -33.889007;
    renderRoute = false;
    storeMap = undefined;
    initialMap = undefined;
    initalMapStatus = false;

    constructor(rootStore) {
        makeObservable(this, {

            // data
            curLong: observable,
            curLat: observable,
            startStatus: observable,
            endStatus: observable,
            selectedOption: observable,
            startLong: observable,
            startLat: observable,
            endLong: observable,
            endLat: observable,
            renderRoute: observable,
            storeMap: observable,
            initialMap: observable,
            initalMapStatus: observable,

            // setters
            setStartTrue: action,
            setStartFalse: action,
            setEndTrue: action,
            setEndFalse: action,
            setSelectedOption: action,
            setStartCoor: action,
            setRenderRoute: action,
            setStoreMap: action,
            setInitialMap: action,
            setInitalMapStatus: action,

            // api calls
        })

        this.rootStore = rootStore;
    }

    setInitialMap(map) {
        this.initialMap = map;
    }

    setInitalMapStatus() {
        this.initalMapStatus = true
    }

    setEmptyMap() {
        this.storeMap = this.initialMap;
    }

    setStoreMap(map) {
        this.storeMap = map;
    }

    setRenderRoute(flag) {
        this.renderRoute = flag;
    }

    setStartCoor(long, lat) {
        this.startLat = lat;
        this.startLong = long;
    }

    setEndCoor(long, lat) {
        this.longLat = lat;
        this.startLong = long;
    }

    setSelectedOption(option) {
        this.selectedOption = option;
        return;
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