<script setup>
import {ref} from 'vue';
import { onMounted } from "vue";
    const mostSearched = ref([]);
    const searchText = ref('');
    const getMostSearched = async () => {
        let res = [
            { id: 1, name: 'Bài 1'},
            { id: 2, name: 'Bài 2'},
            { id: 3, name: 'Bài 3'},
            { id: 4, name: 'Bài 4'},
        ]
        mostSearched.value = res
    }

    const onSearchChange = (search) => {
        console.log(searchText.value);
        console.log(search);
    }
    onMounted(getMostSearched);
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
                                        <div class="">Bài hát tìm kiếm nhiều nhất</div>
                                        <ul>
                                            <li v-for="item in mostSearched" :key="item.id">{{ item.name}}</li>
                                        </ul>
                                    </div>
                                    <div v-if="isSearchModalDisplay && searchText" class="suggestion w-100">
                                        <div v-if="true" class="suggestion-content d-flex flex-column">
                                            <div>View All</div>
                                            <div class="song-suggestion">Bài hát</div>
                                            <div class="singer-suggestion">Ca sĩ</div>
                                            <div class="album-suggestion">Album</div>
                                            <div class="video-suggestion">Video</div>
                                        </div>
                                        <div v-else>No content</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="history relative">
                                    <i class="fa-solid fa-clock-rotate-left pointer" @click="isDisplayHistory = true"></i>
                                    <div v-if="isDisplayHistory" class="absolute history-box p-2">
                                        <div class="d-flex justify-content-between pointer">
                                            <div class="history-title">Bài hát vừa nghe</div>
                                            <i class="fa-solid fa-xmark" @click="isDisplayHistory = false"></i>
                                        </div>
                                        <div class="history-content"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-end align-items-center" @click="onLog">User</div>
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
        }
    },

    methods: {
        onLog() {
            console.log(1);
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
    },
}
</script>
