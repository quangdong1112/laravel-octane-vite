<script setup>
import {ref, onMounted, computed} from 'vue';
import { sortBy } from 'lodash';
import useHome from '../composables/home.js'
import sidebar from '../components/Sidebar.vue';
import CONSTANT from  '../app/constants.js';


const {getNewAlbum, slideShowData, newAlbum, newVideo, onRightClicked, onLeftClicked}  = useHome();
const getItemSlideActived = () => {
    setInterval(() => {
        right.value.click()
    }, 3000)
}
const listItem = computed(() => {
    slideShowData.value = slideShowData.value.map(item => {
        if ( item.sort < 3) {
            item.actived = true
        }
        else {
            item.actived = false

        }

        return item;
    })
    return slideShowData.value = sortBy(slideShowData.value, "sort");
})

const right = ref(null)

onMounted(getNewAlbum(), getItemSlideActived())

</script>
<template>
    <div class="container home mt-3">
        <div class="row">
            <div class="col-md-9 col-lg-9">
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="title">Album mới nhất 2022</div>
                    <div class="all-view"><a href="#">Xem tất cả</a></div>
                </div>
                <div class="row album-new">
                    <div class="col-lg-15" v-for="(item, index) in newAlbum" :key="index">
                        <div class="card-album mb-3">
                            <div class="card-thumbnail w-100 mb-2 pointer">
                                <div class="card-thumb-icon"><i class="fa-regular fa-circle-play"></i></div>
                                <img :src="item.thumb" alt="">
                            </div>
                            <div class="card-content">
                                <div class="card-content-name"><a href="#">{{ item.album}}</a></div>
                                <div class="card-content-author"><a href="#">{{ item.singer}}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row slide-show">
                    <div class="col-4 item" v-for="(item, index) in listItem" :key="index">
                        <a v-show="item.actived" href="#">
                            <img :src="item.image" alt="">
                            <div class="item-name">{{ item.name}}</div>
                        </a>
                    </div>
                    <div class="arrow-action">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="left pointer" @click="onLeftClicked"><i class="fa-solid fa-chevron-left"></i></div>
                            <div class="right pointer" @click="onRightClicked" ref="right"><i class="fa-solid fa-chevron-right"></i></div>
                        </div>
                    </div>
                </div>
                <div class="mb-4"></div>
                <div class="row row-cols-2">
                    <div class="col share">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <div class="title">Bài hát mới chia sẻ</div>
                            <div class="all-view"><a href="#">Xem tất cả</a></div>
                        </div>

                        <div class="share-item" v-for="(item, index) in newAlbum" :key="index">
                            <div class="d-flex align-items-center">
                                <div class="thumb-share me-2">
                                    <img :src="item.thumb" alt="">
                                    <div class="play">
                                        <i class="fa-regular fa-circle-play"></i>
                                    </div>
                                </div>
                                <div class="share-content d-flex align-items-center justify-content-between w-100">
                                    <div class="info">
                                        <div class="name"><a href="#">{{item.name}}</a></div>
                                        <div class="singer"><a href="#">{{item.singer}}</a></div>
                                        <div class="type" :style="{'color': CONSTANT.TYPE[item.type].color}">{{ CONSTANT.TYPE[item.type].name }}</div>
                                    </div>
                                    <div class="info-view text-end">
                                        <div class="start">
                                            <div class=""><i class="fa-solid fa-clock me-1"></i>{{'1 thang'}}</div>
                                        </div>
                                        <div class="view"><i class="fa-solid fa-headphones me-1"></i>{{ item.view}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="add-favorite">
                                <a href="#"><i class="fa-solid fa-headphones me-2"></i></a>
                                <a href="#"><i class="fa-solid fa-heart-circle-plus me-2"></i></a>
                                <a href="#"><i class="fa-solid fa-share-nodes me-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col share">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <div class="title">Download nhiều nhất</div>
                            <div class="all-view"><a href="#">Xem tất cả</a></div>
                        </div>
                        <div class="share-item" v-for="(item, index) in newAlbum" :key="index">
                            <div class="d-flex align-items-center">
                                <div class="thumb-share me-2">
                                    <img :src="item.thumb" alt="">
                                    <div class="play">
                                        <i class="fa-regular fa-circle-play"></i>
                                    </div>
                                </div>
                                <div class="share-content d-flex align-items-center justify-content-between w-100">
                                    <div class="info">
                                        <div class="name"><a href="#">{{item.name}}</a></div>
                                        <div class="singer"><a href="#">{{item.singer}}</a></div>
                                        <div class="type" :style="{'color': CONSTANT.TYPE[item.type].color}">{{ CONSTANT.TYPE[item.type].name }}</div>
                                    </div>
                                    <div class="info-view text-end">
                                        <div class="start">
                                            <div class=""><i class="fa-solid fa-clock me-1"></i>{{'2 thang'}}</div>
                                        </div>
                                        <div class="view"><i class="fa-solid fa-headphones me-1"></i>{{ item.view}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="add-favorite">
                                <a href="#"><i class="fa-solid fa-headphones me-2"></i></a>
                                <a href="#"><i class="fa-solid fa-heart-circle-plus me-2"></i></a>
                                <a href="#"><i class="fa-solid fa-share-nodes me-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4"></div>
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="title">Video mới</div>
                    <div class="all-view"><a href="#">Xem tất cả</a></div>
                </div>
                <div class="row row-cols-4 video-new">
                    <div class="col mb-3" v-for="(item, index) in newVideo" :key="index">
                        <div class="thumb-video">
                            <img :src="item.thumb" alt="">
                            <div class="play"><i class="fa-regular fa-circle-play"></i></div>
                            <div class="time">
                                <div class="pe-1 ps-1"><i class="fa-regular fa-clock me-2"></i>{{ item.time}}</div>
                            </div>
                            <div class="type pe-1 ps-1" :style="{'color': CONSTANT.TYPE[item.type].color}">{{ CONSTANT.TYPE[item.type].name }}</div>
                        </div>
                        <div class="video-content mt-3">
                            <div class="video-name"><a href="#">{{ item.album}}</a></div>
                            <div class="video-author"><a href="#">{{ item.singer}}</a></div>
                        </div>
                    </div>
                </div>
                <div class="mb-4"></div>
            </div>
            <sidebar></sidebar>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>
