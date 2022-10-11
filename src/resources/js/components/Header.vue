<script setup>
import {ref} from 'vue';
import { onMounted } from "vue";
import CONSTANT from  '../app/constants.js';
    const mostSearched = ref([]);
    const searchData = ref({});
    const searchText = ref('');
    const getMostSearched = async () => {
        let res = [
            { id: 1, name: 'Em nên dừng lại', singer: 'Khang Việt', type: 1},
            { id: 2, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2},
            { id: 3, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1},
            { id: 4, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3},
        ]
        mostSearched.value = res
    };

    const getSearchChange = async () => {
        const res = {
            'song' : [
                { id: 2, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
                { id: 3, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
                { id: 4, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
            ],
            'singer': [
                { id: 2, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
                { id: 3, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
                { id: 4, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
            ],
            'album': [
                { id: 2, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
                { id: 3, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
                { id: 4, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
            ],
            'video': [
                { id: 2, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 4, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
                { id: 3, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 4, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
                { id: 4, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 4, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
            ]
        }

        searchData.value = res;
    }

    onMounted(getMostSearched(), getSearchChange());

    const onSearchChange = (search) => {
        console.log(searchText.value);
        console.log(search);
    }

</script>
<template>
    <div class="header">
        <div class="top-header">
            <div class="container">
                <div class="row">
                    <div class="col-3 pointer">
                        <img :src="logo" alt="logo">
                    </div>
                    <div class="col-6">
                        <div class="row align-items-center">
                            <div class="col-10 header-search">
                                <div class="content-search d-flex align-items-center w-100 p-2">
                                    <div class="p-2"><i class="fa-solid fa-magnifying-glass"></i></div>
                                    <input
                                        v-model="searchText"
                                        @keyup="onSearchChange(searchText)"
                                        type="text"
                                        class="w-100"
                                        @focus="onFocusSeachText"
                                        @blur="onBlurSearch"
                                        placeholder="nhập bài hát, video, tên nghệ sĩ mà bạn muốn tìm">
                                    <div v-if="isSearchModalDisplay && !searchText" class="most-search w-100">
                                        <div class="most-search-title p-3">Bài hát tìm kiếm nhiều nhất</div>
                                        <ul class="list-item-search ">
                                            <li v-for="item in mostSearched" :key="item.id" class="item-search ps-3 mb-2">
                                                <a href="#">
                                                    <div class="item-search-name">{{ item.name}}</div>
                                                    <div class="item-search-singer">{{ item.singer}}</div>
                                                    <div class="item-search-type" :style="{'color': CONSTANT.TYPE[item.type].color}">{{ CONSTANT.TYPE[item.type].name }}</div>
                                                </a>
                                            </li>
                                        </ul>
                                        <hr>
                                        <div class="most-search-title ps-3">Lịch sử tìm kiếm của bạn</div>
                                        <ul class="list-item-search mt-2">
                                            <li v-for="item in mostSearched" :key="item.id" class="item-search ps-3 mb-1">
                                                <div class="item-search-name"><a href="#">{{ item.name}}</a></div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div v-if="isSearchModalDisplay && searchText" class="suggestion w-100">
                                        <div v-if="true" class="suggestion-content d-flex flex-column">
                                            <div class="view-all d-flex justify-content-end pe-2"><a href="#">View All</a></div>
                                            <div class="">
                                                <div class="suggestion-title ps-3 mb-2">Bài hát</div>
                                                <ul class="mb-2">
                                                    <li v-for="(item, index) in searchData.song" :key="index" class="song-suggestion ps-3 mb-2">
                                                        <a href="#">
                                                            <div class="item-search-name" v-html="getSearchContent(item.name)"></div>
                                                            <div class="item-search-singer">{{ item.singer}}</div>
                                                            <div class="item-search-type" :style="{'color': CONSTANT.TYPE[item.type].color}">{{ CONSTANT.TYPE[item.type].name }}</div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <hr>
                                                <div class="suggestion-title ps-3 mb-2">Nghệ sĩ</div>
                                                <ul class="mb-2">
                                                    <li v-for="(item, index) in searchData.singer" :key="index" class="singer-suggestion ps-3 mb-2">
                                                        <a href="#" class="d-flex align-items-center">
                                                            <div class="item-thumb">
                                                                <img :src="item.thumb" alt="">
                                                            </div>
                                                            <div class="item-name ms-2" v-html="getSearchContent(item.singer)"></div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <hr>
                                                <div class="suggestion-title ps-3 mb-2">Album</div>
                                                <ul class="">
                                                    <li v-for="(item, index) in searchData.album" :key="index" class="album-suggestion ps-3 mb-2">
                                                        <a href="#" class="d-flex align-items-center">
                                                            <div class="item-thumb">
                                                                <img :src="item.thumb" alt="">
                                                            </div>
                                                            <div class="ms-2">
                                                                <div class="" v-html="getSearchContent(item.album)"></div>
                                                                <div class="">{{ item.singer}}</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <hr>
                                                <div class="suggestion-title ps-3 mb-2">Video</div>
                                                <ul class="mb-2">
                                                    <li v-for="(item, index) in searchData.video" :key="index" class="video-suggestion ps-3 mb-2">
                                                        <a href="#" class="d-flex align-items-center">
                                                            <div class="item-thumb relative">
                                                                <img :src="item.thumb" alt="">
                                                                <div class="absolute d-flex align-items-center item-thumb-time ps-1 pe-1">
                                                                    <div class=""><i class="fa-regular fa-clock"></i></div>
                                                                    <div class="ms-1">{{ item.time}}</div>
                                                                </div>
                                                                <div class="absolute play">
                                                                    <i class="fa-regular fa-circle-play"></i>
                                                                </div>
                                                            </div>
                                                            <div class="ms-2">
                                                                <div class="item-name" v-html="getSearchContent(item.name)"></div>
                                                                <div class="item-author">{{ item.singer}}</div>
                                                                <div class="item-type" :style="{'color': CONSTANT.TYPE[item.type].color}">{{ CONSTANT.TYPE[item.type].name }}</div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div v-else>No content</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="history relative w-100" ref="history">
                                    <i class="fa-solid fa-clock-rotate-left pointer" @click="isDisplayHistory = true"></i>
                                    <div v-if="isDisplayHistory" class="absolute history-box p-2" :style="{'--width': historyWidth }">
                                        <div class="history-title d-flex justify-content-between align-items-center mb-2">
                                            <div class="">Bài hát vừa nghe</div>
                                            <div class="pointer"><i class="fa-solid fa-xmark" @click="isDisplayHistory = false"></i></div>
                                        </div>
                                        <div class="history-content">
                                            <ul>
                                                <li v-for="(item, index) in mostSearched" :key="item.id" class="history-item p-2">
                                                    <a href="#">
                                                        <div class="history-item-content">{{ (index + 1) + '. '  + item.name + ' - ' + item.singer}}</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-end align-items-center" @click="onLog">Đăng nhập / Đăng ký</div>
                </div>
            </div>
        </div>
        <div class="bot-header relative" @mouseleave="isDisplayMore = false">
            <div class="container">
                <div class="row justify-content-between relatvie">
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="#">Xếp hạng</a>
                        <div class="list-item w-100 p-2">
                            <div class="mb-2 ms-2">
                                <a href="#">BXH Hôm nay</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">BXH Tuần này</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">BXH Năm nay</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">BXH Năm 2021</a>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Video clip</a>
                        <div class="list-item w-100 p-2">
                            <div class="mb-2 ms-2">
                                <a href="#">Video Việt Nam</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Video US-UK</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Video Hoa</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Video Hàn</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Video Nhật</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Video Hài</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Video Live</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Video Khác</a>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Việt Nam</a>
                        <div class="list-item w-100 p-2">
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Pop, Rock</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Rap, Hiphop</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Dance, Remix</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Truyền thống</a>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">US-UK</a>
                        <div class="list-item w-100 p-2">
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Pop, Rock</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Rap, Hiphop</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Dance, Remix</a>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Nhạc Hoa</a>
                        <div class="list-item w-100 p-2">
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Pop, Rock</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Rap, Hiphop</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Dance, Remix</a>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Nhạc Hàn</a>
                        <div class="list-item w-100 p-2">
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Pop, Rock</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Rap, Hiphop</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Dance, Remix</a>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Nhạc Nhật</a>
                        <div class="list-item w-100 p-2">
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Pop, Rock</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Rap, Hiphop</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Dance, Remix</a>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Nhạc Pháp</a>
                        <div class="list-item w-100 p-2">
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Pop, Rock</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Rap, Hiphop</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Dance, Remix</a>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Nước khác</a>
                        <div class="list-item w-100 p-2">
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Pop, Rock</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Rap, Hiphop</a>
                            </div>
                            <div class="mb-2 ms-2">
                                <a href="#">Nhạc Dance, Remix</a>
                            </div>
                        </div>
                    </div>
                    <div v-if="!isDisplayMore" class="col col-md-2 col-lg p-2 item justify-content-center pointer" @click="onOpenMore">...</div>
                    <div v-else class="col col-md-2 col-lg p-2 item justify-content-center" @click="onCloseMore">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item justify-content-end">
                        <div class="d-flex align-items-center justify-content-center upload">
                            <i class="fa-solid fa-cloud-arrow-up"></i>
                            <div class="ms-2">Upload</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isDisplayMore" class="absolute w-100 more p-3" ref="more">
                <div class="container mt-3">
                    <div class="row">
                        <div class="col-2">
                            <div class="box-item">
                                <div class="title-box ps-3 mb-3">Xếp hạng</div>
                                <div class="content-box">
                                    <div class="">
                                        <a href="#">BXH Hôm nay</a>
                                    </div>
                                    <div class="">
                                        <a href="#">BXH Tuần này</a>
                                    </div>
                                    <div class="">
                                        <a href="#">BXH Năm nay</a>
                                    </div>
                                    <div class="">
                                        <a href="#">BXH Năm 2021</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="box-item">
                                <div class="title-box ps-3 mb-3">Video clip</div>
                                <div class="content-box">
                                    <div class="">
                                        <a href="#">Video Việt Nam</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Video US-UK</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Video Hoa</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Video Hàn</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Video Nhật</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Video Hài</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Video Live</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Video Khác</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="box-item">
                                <div class="title-box ps-3 mb-3">Việt Nam</div>
                                <div class="content-box">
                                    <div class="">
                                        <a href="#">Nhạc Pop, Rock</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Rap, Hiphop</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Dance, Remix</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Truyền thống</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="box-item">
                                <div class="title-box ps-3 mb-3">US-UK</div>
                                <div class="content-box">
                                    <div class="">
                                        <a href="#">Nhạc Pop, Rock</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Rap, Hiphop</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Dance, Remix</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="box-item">
                                <div class="title-box ps-3 mb-3">Nhạc Hoa</div>
                                <div class="content-box">
                                    <div class="">
                                        <a href="#">Nhạc Pop, Rock</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Rap, Hiphop</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Dance, Remix</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="box-item">
                                <div class="title-box ps-3 mb-3">Nhạc Hàn</div>
                                <div class="content-box">
                                    <div class="">
                                        <a href="#">Nhạc Pop, Rock</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Rap, Hiphop</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Dance, Remix</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-2">
                            <div class="box-item">
                                <div class="title-box ps-3 mb-3">Nhạc Nhật</div>
                                <div class="content-box">
                                    <div class="">
                                        <a href="#">Nhạc Pop, Rock</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Rap, Hiphop</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Dance, Remix</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="box-item">
                                <div class="title-box ps-3 mb-3">Nước Pháp</div>
                                <div class="content-box">
                                    <div class="">
                                        <a href="#">Nhạc Pop, Rock</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Rap, Hiphop</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Dance, Remix</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="box-item">
                                <div class="title-box ps-3 mb-3">Nước khác</div>
                                <div class="content-box">
                                    <div class="">
                                        <a href="#">Nhạc Pop, Rock</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Rap, Hiphop</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Nhạc Dance, Remix</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="box-item">
                                <div class="title-box ps-3 mb-3">Playback</div>
                                <div class="content-box">
                                    <div class="">
                                        <a href="#">Playback Việt Nam</a>
                                    </div>
                                    </div><div class="">
                                        <a href="#">Playback US-UK</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Playback Hàn</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Playback Nhật</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Playback Hoa</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Playback Pháp</a>
                                    </div>
                                    <div class="">
                                        <a href="#">Playback Nước khác</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            logo: "https://data.chiasenhac.com/imgs/logo-web-official.png",
            isSearchModalDisplay: false,
            isDisplayMore: false,
            isDisplayHistory: false,
            historyWidth: '16px',
        }
    },
    mounted() {
        this.init();
        window.addEventListener("resize", this.init);
    },
    unmounted() {
        window.removeEventListener("resize", this.init);
    },

    methods: {
        init() {
           this.historyWidth = (this.$refs.history.getBoundingClientRect().width - 16) + 'px';
        },
        onLog() {
        },
        
        onFocusSeachText() {
            this.isSearchModalDisplay = true;
        },

        onBlurSearch() {
            this.isSearchModalDisplay = false;
        },

        onCloseMore() {
            this.isDisplayMore = false;
        },

        onOpenMore() {
            this.isDisplayMore = true;
        },

        getSearchContent(content) {
            const textArr = content.split(this.searchText);
            if (textArr) {
                return textArr.join(`<span class="highlight">${this.searchText}</span>`);
            }
            return content
        },

    },
}
</script>

<style lang="scss">
    .history-box {
        &::before {
            right: v-bind(historyWidth) !important;
        }
    }
</style>
