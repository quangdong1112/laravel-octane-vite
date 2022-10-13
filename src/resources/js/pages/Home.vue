<script setup>
import {ref, onMounted, computed} from 'vue';
import { cloneDeep, sortBy } from 'lodash';
import useHome from '../composables/home.js'

const {getNewAlbum, slideShowData,
        newAlbum, onRightClicked, onLeftClicked,
        getBxhAlbum, bxhAlbum, getListSinger, listSinger}  = useHome();
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

onMounted(getNewAlbum(), getItemSlideActived(), getBxhAlbum('vn'), getListSinger())

const typeBxh = ref([
    { id: 'vn', name: 'Việt Nam', actived: true},
    { id: 'usuk', name: 'US-UK', actived: false},
    { id: 'kpop', name: 'K POP', actived: false},
    { id: 'jpop', name: 'J POP', actived: false},
])

const changeBxh = (index, id) => {
    for (const [i,item] of typeBxh.value.entries()) {
        item.actived = i == index;
    }
    getBxhAlbum(id)
}
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
            </div>
            <div class="sidebar col-md-3 col-lg-3">
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="title">Bảng xếp hạng</div>
                    <div class="all-view"><a href="#">Xem tất cả</a></div>
                </div>
                <div class="sidebar-bxh">
                    <div class="d-flex justify-content-between">
                        <div class="bxh-type pointer"
                            v-for="(item, index) in typeBxh"
                            :key="index"
                            :class="{actived: item.actived}"
                            @click="changeBxh(index, item.id)">{{ item.name}}</div>
                    </div>
                    <hr>
                    <div v-for="(item, index) in bxhAlbum" :key="index" class="">
                        <div v-if="index == 0" class="d-flex align-items-start">
                            <div class="bxh-thumb-first me-3">
                                <img :src="item.thumb" alt="">
                                <div class="top-1">{{ index + 1}}</div>
                            </div>
                            <div class="bxh-content d-flex flex-column justify-content-between w-100">
                                <div class="name">{{ item.name}}</div>
                                <div class="d-flex justify-content-between discription">
                                    <div class="">{{ item.singer}}</div>
                                    <div class="">{{ item.view}}</div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="d-flex align-items-center w-100">
                            <div class="bxh-item me-2 text-center" :style="styleBxh(index)">{{ index + 1}}</div>
                            <div class="bxh-thumb me-3">
                                <img :src="item.thumb" alt="">
                            </div>
                            <div class="bxh-content d-flex flex-column justify-content-between w-100">
                                <div class="name">{{ item.name}}</div>
                                <div class="d-flex justify-content-between discription">
                                    <div class="">{{ item.singer}}</div>
                                    <div class="">{{ item.view}}</div>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
                <div class="singer-favorite row">
                    <div v-for="(item, index) in listSinger" :key="index" class="col-4">
                        <div class="thumb-singer mb-3">
                            <img :src="item.avatar" alt="avatar">
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

        }
    },
    methods: {
        styleBxh(index) {
            if (index > 2) return;
            if (index == 1) {
                return {
                    'color': 'blue'
                }
            }
            return {
                'color': 'green'
            }
        }
    },
}
</script>
