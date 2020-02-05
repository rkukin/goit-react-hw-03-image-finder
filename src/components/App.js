import React, {Component} from "react";
import styled from "styled-components";

import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";

import getImagesAPI from "../api/getImages"

const Application = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export default class App extends Component {

    state = {
        searchQuery: '',
        images: [
            {
                "largeImageURL": "https://pixabay.com/get/52e3d14a4b5ab108f5d084609629337f173edce4504c704c7d2f73dc944fcd5b_1280.jpg",
                "webformatHeight": 429,
                "webformatWidth": 640,
                "likes": 1229,
                "imageWidth": 2165,
                "id": 434918,
                "user_id": 2323,
                "views": 509697,
                "comments": 196,
                "pageURL": "https://pixabay.com/photos/legs-window-car-dirt-road-relax-434918/",
                "imageHeight": 1453,
                "webformatURL": "https://pixabay.com/get/52e3d14a4b5ab108f5d084609629337f173edce4504c704c7d2f73dc944fcd5b_640.jpg",
                "type": "photo",
                "previewHeight": 100,
                "tags": "legs, window, car",
                "downloads": 193814,
                "user": "Greyerbaby",
                "favorites": 1573,
                "imageSize": 587598,
                "previewWidth": 150,
                "userImageURL": "https://cdn.pixabay.com/user/2014/11/14/05-39-07-629_250x250.jpg",
                "previewURL": "https://cdn.pixabay.com/photo/2014/09/03/20/15/legs-434918_150.jpg"
            },
            {
                "largeImageURL": "https://pixabay.com/get/5ee8d2414d50b108f5d084609629337f173edce4504c704c7d2f73dc944fcd5b_1280.jpg",
                "webformatHeight": 426,
                "webformatWidth": 640,
                "likes": 786,
                "imageWidth": 5760,
                "id": 887272,
                "user_id": 334088,
                "views": 169406,
                "comments": 75,
                "pageURL": "https://pixabay.com/photos/vintage-1950s-pretty-woman-887272/",
                "imageHeight": 3840,
                "webformatURL": "https://pixabay.com/get/5ee8d2414d50b108f5d084609629337f173edce4504c704c7d2f73dc944fcd5b_640.jpg",
                "type": "photo",
                "previewHeight": 99,
                "tags": "vintage 1950s, pretty woman, vintage car",
                "downloads": 80374,
                "user": "JillWellington",
                "favorites": 852,
                "imageSize": 2128873,
                "previewWidth": 150,
                "userImageURL": "https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg",
                "previewURL": "https://cdn.pixabay.com/photo/2015/08/13/17/24/vintage-1950s-887272_150.jpg"
            },
            {
                "largeImageURL": "https://pixabay.com/get/55e6d7424f52b108f5d084609629337f173edce4504c704c7d2f73dc944fcd5b_1280.jpg",
                "webformatHeight": 426,
                "webformatWidth": 640,
                "likes": 482,
                "imageWidth": 6000,
                "id": 362150,
                "user_id": 123690,
                "views": 230253,
                "comments": 78,
                "pageURL": "https://pixabay.com/photos/car-repair-car-workshop-repair-shop-362150/",
                "imageHeight": 4000,
                "webformatURL": "https://pixabay.com/get/55e6d7424f52b108f5d084609629337f173edce4504c704c7d2f73dc944fcd5b_640.jpg",
                "type": "photo",
                "previewHeight": 99,
                "tags": "car repair, car workshop, repair shop",
                "downloads": 88991,
                "user": "RyanMcGuire",
                "favorites": 511,
                "imageSize": 8544150,
                "previewWidth": 150,
                "userImageURL": "https://cdn.pixabay.com/user/2014/06/04/17-13-09-273_250x250.jpg",
                "previewURL": "https://cdn.pixabay.com/photo/2014/06/04/16/36/car-repair-362150_150.jpg"
            },
            {
                "largeImageURL": "https://pixabay.com/get/57e1dc444252ac14f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_1280.jpg",
                "webformatHeight": 426,
                "webformatWidth": 640,
                "likes": 449,
                "imageWidth": 5760,
                "id": 1197800,
                "user_id": 2019050,
                "views": 165257,
                "comments": 43,
                "pageURL": "https://pixabay.com/photos/cuba-oldtimer-old-car-forest-red-1197800/",
                "imageHeight": 3840,
                "webformatURL": "https://pixabay.com/get/57e1dc444252ac14f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_640.jpg",
                "type": "photo",
                "previewHeight": 99,
                "tags": "cuba, oldtimer, old car",
                "downloads": 93084,
                "user": "Noel_Bauza",
                "favorites": 401,
                "imageSize": 10114533,
                "previewWidth": 150,
                "userImageURL": "https://cdn.pixabay.com/user/2016/02/07/19-28-24-618_250x250.jpg",
                "previewURL": "https://cdn.pixabay.com/photo/2016/02/13/13/11/cuba-1197800_150.jpg"
            },
            {
                "largeImageURL": "https://pixabay.com/get/55e8d4414951b108f5d084609629337f173edce4504c704c7d2f73dc944fcd5b_1280.jpg",
                "webformatHeight": 425,
                "webformatWidth": 640,
                "likes": 694,
                "imageWidth": 5450,
                "id": 381233,
                "user_id": 242387,
                "views": 377015,
                "comments": 87,
                "pageURL": "https://pixabay.com/photos/taxi-cab-traffic-cab-new-york-381233/",
                "imageHeight": 3623,
                "webformatURL": "https://pixabay.com/get/55e8d4414951b108f5d084609629337f173edce4504c704c7d2f73dc944fcd5b_640.jpg",
                "type": "photo",
                "previewHeight": 99,
                "tags": "taxi cab, traffic, cab",
                "downloads": 207636,
                "user": "Free-Photos",
                "favorites": 800,
                "imageSize": 5604087,
                "previewWidth": 150,
                "userImageURL": "https://cdn.pixabay.com/user/2014/05/07/00-10-34-2_250x250.jpg",
                "previewURL": "https://cdn.pixabay.com/photo/2014/07/01/12/35/taxi-cab-381233_150.jpg"
            },
            {
                "largeImageURL": "https://pixabay.com/get/57e1d14a435bab14f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_1280.jpg",
                "webformatHeight": 426,
                "webformatWidth": 640,
                "likes": 425,
                "imageWidth": 5564,
                "id": 1149997,
                "user_id": 242387,
                "views": 195699,
                "comments": 50,
                "pageURL": "https://pixabay.com/photos/car-traffic-man-hurry-1149997/",
                "imageHeight": 3710,
                "webformatURL": "https://pixabay.com/get/57e1d14a435bab14f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_640.jpg",
                "type": "photo",
                "previewHeight": 99,
                "tags": "car, traffic, man",
                "downloads": 100794,
                "user": "Free-Photos",
                "favorites": 451,
                "imageSize": 3110498,
                "previewWidth": 150,
                "userImageURL": "https://cdn.pixabay.com/user/2014/05/07/00-10-34-2_250x250.jpg",
                "previewURL": "https://cdn.pixabay.com/photo/2016/01/19/17/57/car-1149997_150.jpg"
            },
            {
                "largeImageURL": "https://pixabay.com/get/57e8d0404351aa14f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_1280.jpg",
                "webformatHeight": 427,
                "webformatWidth": 640,
                "likes": 292,
                "imageWidth": 7360,
                "id": 1853936,
                "user_id": 2286921,
                "views": 75534,
                "comments": 25,
                "pageURL": "https://pixabay.com/photos/automobile-automotive-beach-beetle-1853936/",
                "imageHeight": 4912,
                "webformatURL": "https://pixabay.com/get/57e8d0404351aa14f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_640.jpg",
                "type": "photo",
                "previewHeight": 100,
                "tags": "automobile, automotive, beach",
                "downloads": 40518,
                "user": "Pexels",
                "favorites": 413,
                "imageSize": 13444851,
                "previewWidth": 150,
                "userImageURL": "https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg",
                "previewURL": "https://cdn.pixabay.com/photo/2016/11/23/17/24/automobile-1853936_150.jpg"
            },
            {
                "largeImageURL": "https://pixabay.com/get/51e8dd444e55b108f5d084609629337f173edce4504c704c7d2f73dc944fcd5b_1280.jpg",
                "webformatHeight": 426,
                "webformatWidth": 640,
                "likes": 272,
                "imageWidth": 3000,
                "id": 788747,
                "user_id": 524252,
                "views": 90861,
                "comments": 39,
                "pageURL": "https://pixabay.com/photos/auto-car-cadillac-oldtimer-788747/",
                "imageHeight": 2000,
                "webformatURL": "https://pixabay.com/get/51e8dd444e55b108f5d084609629337f173edce4504c704c7d2f73dc944fcd5b_640.jpg",
                "type": "photo",
                "previewHeight": 99,
                "tags": "auto, car, cadillac",
                "downloads": 44544,
                "user": "JOERG-DESIGN",
                "favorites": 276,
                "imageSize": 1508628,
                "previewWidth": 150,
                "userImageURL": "https://cdn.pixabay.com/user/2015/01/15/11-36-33-997_250x250.jpg",
                "previewURL": "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_150.jpg"
            },
            {
                "largeImageURL": "https://pixabay.com/get/55e0d1454e50a814f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_1280.jpg",
                "webformatHeight": 426,
                "webformatWidth": 640,
                "likes": 291,
                "imageWidth": 5456,
                "id": 3046424,
                "user_id": 17511,
                "views": 131660,
                "comments": 27,
                "pageURL": "https://pixabay.com/photos/car-vehicle-motor-transport-3046424/",
                "imageHeight": 3632,
                "webformatURL": "https://pixabay.com/get/55e0d1454e50a814f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_640.jpg",
                "type": "photo",
                "previewHeight": 99,
                "tags": "car, vehicle, motor",
                "downloads": 90841,
                "user": "melkhagelslag",
                "favorites": 273,
                "imageSize": 8284052,
                "previewWidth": 150,
                "userImageURL": "https://cdn.pixabay.com/user/2017/03/05/17-08-40-993_250x250.jpg",
                "previewURL": "https://cdn.pixabay.com/photo/2017/12/28/23/41/car-3046424_150.jpg"
            },
            {
                "largeImageURL": "https://pixabay.com/get/57e8d0424856aa14f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_1280.jpg",
                "webformatHeight": 278,
                "webformatWidth": 640,
                "likes": 265,
                "imageWidth": 4800,
                "id": 1851246,
                "user_id": 2286921,
                "views": 76223,
                "comments": 25,
                "pageURL": "https://pixabay.com/photos/buildings-car-city-porsche-rainy-1851246/",
                "imageHeight": 2092,
                "webformatURL": "https://pixabay.com/get/57e8d0424856aa14f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_640.jpg",
                "type": "photo",
                "previewHeight": 65,
                "tags": "buildings, car, city",
                "downloads": 43660,
                "user": "Pexels",
                "favorites": 322,
                "imageSize": 1208358,
                "previewWidth": 150,
                "userImageURL": "https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg",
                "previewURL": "https://cdn.pixabay.com/photo/2016/11/22/23/44/buildings-1851246_150.jpg"
            },
            {
                "largeImageURL": "https://pixabay.com/get/52e3d7414f50ad14f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_1280.jpg",
                "webformatHeight": 514,
                "webformatWidth": 640,
                "likes": 448,
                "imageWidth": 4000,
                "id": 4322521,
                "user_id": 2364555,
                "views": 182954,
                "comments": 95,
                "pageURL": "https://pixabay.com/photos/fiat-fiat-500-auto-oldtimer-4322521/",
                "imageHeight": 3215,
                "webformatURL": "https://pixabay.com/get/52e3d7414f50ad14f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_640.jpg",
                "type": "photo",
                "previewHeight": 120,
                "tags": "fiat, fiat 500, auto",
                "downloads": 154012,
                "user": "pixel2013",
                "favorites": 380,
                "imageSize": 2954155,
                "previewWidth": 150,
                "userImageURL": "https://cdn.pixabay.com/user/2019/07/15/18-51-07-612_250x250.jpg",
                "previewURL": "https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521_150.jpg"
            },
            {
                "largeImageURL": "https://pixabay.com/get/57e2d54a4950ad14f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_1280.jpg",
                "webformatHeight": 426,
                "webformatWidth": 640,
                "likes": 431,
                "imageWidth": 5292,
                "id": 1209321,
                "user_id": 242387,
                "views": 95679,
                "comments": 26,
                "pageURL": "https://pixabay.com/photos/girls-lying-classic-car-young-1209321/",
                "imageHeight": 3528,
                "webformatURL": "https://pixabay.com/get/57e2d54a4950ad14f6da8c7dda79367a143ddfe752526c4870277bdc9f4ec750bb_640.jpg",
                "type": "photo",
                "previewHeight": 99,
                "tags": "girls, lying, classic car",
                "downloads": 51507,
                "user": "Free-Photos",
                "favorites": 653,
                "imageSize": 1364179,
                "previewWidth": 150,
                "userImageURL": "https://cdn.pixabay.com/user/2014/05/07/00-10-34-2_250x250.jpg",
                "previewURL": "https://cdn.pixabay.com/photo/2016/02/19/10/37/girls-1209321_150.jpg"
            }

        ],
        page: 0,
        isLoading: false,
        imgURL: null,
        error: null
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        // window.scrollTo({
        // top: document.documentElement.scrollHeight,
        // behavior: 'smooth',
        // });

        const prevSearchQuery = prevState.searchQuery;
        const currentSearchQuery = this.state.searchQuery;

        if (prevSearchQuery !== currentSearchQuery) {
            this.fetchImages();
        }
    }

    onSearchFormSubmit = (query) => {
        this.setState({
            images: [],
            searchQuery: query,
            page: 0,
        });
    };

    onLoadMore = () => {
    };

    onModalOpened = () => {
    };

    onModalClose = () => {
    };

    fetchImages = () => {
        const {searchQuery, page} = this.state;

        this.setState({isLoading: true});

        getImagesAPI
            .fetchImages(searchQuery, page)
            .then(images =>
                this.setState(prevState => ({
                    images: [...prevState.images, ...images],
                    page: prevState.page + 1
                })))
            .catch(error => this.setState({error}))
            .finally(() => this.setState({isLoading: false}));
    };

    render() {

        const {images, isLoading, error} = this.state;

        return (
            <Application>
                <Searchbar onFormSubmit={this.onSearchFormSubmit}/>

                {error && (<p>{`Whoops, something went wrong: ${error.message}`}</p>)}

                {images.length > 0 && <ImageGallery images={images}/>}
                {isLoading && <Loader/>}
                {images.length > 0 && !isLoading && (
                    <button type="button" onClick={this.fetchImages}>
                        Load more
                    </button>
                )}
            </Application>
        )
    }


}
