<script setup>
import {ref, onMounted} from 'vue';
import { cloneDeep } from 'lodash';
const newAlbum = ref([]);
const getNewAlbum = async () => {
    const res = [
        { id: 1, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
        { id: 2, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/data/cover_thumb_200/171/170539.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
        { id: 3, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
        { id: 4, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
        { id: 5, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
        { id: 6, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
        { id: 7, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
        { id: 8, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
        { id: 9, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
        { id: 10, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50'},
    ];
    newAlbum.value = res;
}
const slideShowData = ref([
    { name: 'BXH Việt Nam', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHNhacVietNam_245x140.png'},
    { name: 'BXH Việt Video', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHVideo_245x140.png'},
    { name: 'BXH US - UK', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHNhacUs-UK_245x140.png'},
    { name: 'BXH Nhạc Hàn', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHNhacHan_245x140.png'},
    { name: 'BXH Nhạc Nhật', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHNhacNhat_245x140.png'},
    { name: 'BXH Nhạc Hoa', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHNhacHoa_245x140.png'},
    { name: 'BXH Nước khác', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHNhacNuocKhac_245x140.png'},
    { name: 'BXH Beat Playback', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHBeat_245x140.png'},])
const slideIndexActived = ref([0, 1 , 2]);
const getItemSlideActived = () => {
    for (const [i, item] of slideShowData.value.entries()) {
        if (slideIndexActived.value.includes(i)) {
            item.actived = true;
        } else {
            item.actived = false;
        }
    }
}

onMounted(getNewAlbum(), getItemSlideActived())

const onLeftClicked = () => {
    const res = cloneDeep(slideIndexActived)
    slideIndexActived.value = res.value.map(item => {
        item -= 1;
        if (item < 0) {
            item = (slideShowData.value.length - 1)
        }
        return item;
    })
    getItemSlideActived();
};
const onRightClicked = () => {
    const res = cloneDeep(slideIndexActived)
    slideIndexActived.value = res.value.map(item => {
        item += 1;
        if (item > (slideShowData.value.length - 1)) {
            item = 0
        }
        return item;
    })
    getItemSlideActived();
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
                    <div class="col-4 item" v-for="(item, index) in slideShowData" :key="index" :class="{actived: item.actived}">
                        <a href="#">
                            <img :src="item.image" alt="">
                            <div class="item-name">{{ item.name}}</div>
                        </a>
                    </div>
                    <div class="arrow-action">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="left pointer" @click="onLeftClicked"><i class="fa-solid fa-chevron-left"></i></div>
                            <div class="right pointer" @click="onRightClicked"><i class="fa-solid fa-chevron-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-lg-3">2</div>
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