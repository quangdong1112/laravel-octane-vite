<script setup>
import {ref} from 'vue';
import { onMounted } from "vue";
    const mostSearched = ref([]);
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
        console.log(search);
    }
    onMounted(getMostSearched);
</script>
<template>
    <div class="header">
        <div class="top-header">
            <div class="container">
                <div class="row">
                    <div class="col-3">
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
                                        @blur="onBlurSearch">
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
                                <div class="history">
                                    <i class="fa-solid fa-clock-rotate-left"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-end align-items-center" @click="onLog">User</div>
                </div>
            </div>
        </div>
        <div class="bot-header relative">
            <div class="container">
                <div class="row align-items-center justify-content-between relatvie">
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="#">Xếp hạng</a>
                        <div class="hover w-100 p-2">
                            <div>
                                <a href="#">BXH Hôm nay</a>
                            </div>
                            <div>
                                <a href="#">BXH Tuần này</a>
                            </div>
                            <div>
                                <a href="#">BXH Năm nay</a>
                            </div>
                            <div>
                                <a href="#">BXH Năm 2021</a>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Video clip</a>
                        <div class="hover w-100 p-2">
                            1234
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Việt Nam</a>
                        <div class="hover w-100 p-2">
                            1234
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">US-UK</a>
                        <div class="hover w-100 p-2">
                            1234
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Nhạc Hoa</a>
                        <div class="hover w-100 p-2">
                            1234
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Nhạc Hàn</a>
                        <div class="hover w-100 p-2">
                            1234
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Nhạc Nhật</a>
                        <div class="hover w-100 p-2">
                            1234
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Nhạc Pháp</a>
                        <div class="hover w-100 p-2">
                            1234
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item">
                        <a class="text-nowrap" href="">Nước khác</a>
                        <div class="hover w-100 p-2">
                            1234
                        </div>
                    </div>
                    <div class="col col-md-2 col-lg p-2 item text-center">...</div>
                    <div class="col col-md-2 col-lg p-2 item d-flex justify-content-end align-items-center">
                        <div class="d-flex align-items-center justify-content-center upload">
                            <i class="fa-solid fa-cloud-arrow-up"></i>
                            <div class="ms-2">Upload</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute w-100">
                123
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            logo: "https://data.chiasenhac.com/imgs/logo-web-official.png",
            searchText: '',
            isSearchModalDisplay: false,
        }
    },

    methods: {
        onLog() {
            console.log(1);
        },
        
        onFocusSeachText() {
            console.log(11);
            this.isSearchModalDisplay = true;
        },

        onBlurSearch() {
            this.isSearchModalDisplay = false;
        }
    },
}
</script>
