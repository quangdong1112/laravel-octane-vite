<template>
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
        <div class="singer-favorite row g-2">
            <div v-for="(item, index) in listSinger" :key="index" class="col-4">
                <div class="thumb-singer mb-2">
                    <img :src="item.avatar" alt="avatar">
                    <div class="singer-name">{{ item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { cloneDeep, sortBy, orderBy } from 'lodash';
import {ref, onMounted, computed} from 'vue';
    const bxhAlbum = ref([]);
    const listSinger = ref([]);
    const getListSinger = async () => {
        const res = [
            { id: 1, name: 'Hứa Kim Tuyền', avatar: 'https://data.chiasenhac.com/data/artist_avatar_thumb/39/38916.jpg'},
            { id: 1, name: 'Miu Lê', avatar: 'https://data.chiasenhac.com/data/artist_avatar_thumb/9/8333.jpg'},
            { id: 1, name: 'Đen Vâu', avatar: 'https://data.chiasenhac.com/data/artist_avatar_thumb/5/4212.jpg'},
            { id: 1, name: 'Vũ', avatar: 'https://data.chiasenhac.com/data/artist_avatar_thumb/2/1881.jpg'},
            { id: 1, name: 'Hoa Minzy', avatar: 'https://data.chiasenhac.com/imgs/no_cover.jpg'},
            { id: 1, name: 'Hoa Minzy', avatar: 'https://data.chiasenhac.com/imgs/no_cover.jpg'},
            { id: 1, name: 'Hoa Minzy', avatar: 'https://data.chiasenhac.com/imgs/no_cover.jpg'},
            { id: 1, name: 'Hoa Minzy', avatar: 'https://data.chiasenhac.com/imgs/no_cover.jpg'},
            { id: 1, name: 'Hoa Minzy', avatar: 'https://data.chiasenhac.com/imgs/no_cover.jpg'},
            { id: 1, name: 'Hoa Minzy', avatar: 'https://data.chiasenhac.com/imgs/no_cover.jpg'},
            { id: 1, name: 'Hoa Minzy', avatar: 'https://data.chiasenhac.com/imgs/no_cover.jpg'},
        ]

        listSinger.value = res
    }
    const getBxhAlbum = async ( key = 'vn') => {
        const res = {
            vn: [
                { id: 1, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/data/cover_thumb/169/168154.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1012},
                { id: 2, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/data/cover_thumb_200/171/170539.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 99},
                { id: 3, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 108},
                { id: 4, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 107},
                { id: 5, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1001},
                { id: 6, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1012},
                { id: 7, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 101},
                { id: 8, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1003},
                { id: 9, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1004},
                { id: 10, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000},
            ],
            kpop: [
                { id: 1, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/data/cover_thumb/169/168154.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 101},
                { id: 2, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/data/cover_thumb_200/171/170539.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 99},
                { id: 3, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 108},
                { id: 4, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 107},
                { id: 5, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1001},
                { id: 6, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1012},
                { id: 7, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 101},
                { id: 8, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1003},
                { id: 9, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1004},
                { id: 10, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000},
            ],
            jpop: [
                { id: 1, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/data/cover_thumb_200/171/170539.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1017},
                { id: 2, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/data/cover_thumb_200/171/170539.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 99},
                { id: 3, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 108},
                { id: 4, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 107},
                { id: 5, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1001},
                { id: 6, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1012},
                { id: 7, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 101},
                { id: 8, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1003},
                { id: 9, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1004},
                { id: 10, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000},
            ],

            usuk: [
                { id: 1, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/data/cover_thumb/169/168154.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1012},
                { id: 2, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/data/cover_thumb_200/171/170539.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 99},
                { id: 3, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 108},
                { id: 4, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 107},
                { id: 5, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1001},
                { id: 6, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1012},
                { id: 7, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 101},
                { id: 8, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1003},
                { id: 9, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1004},
                { id: 10, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000},
            ]
        }

        bxhAlbum.value = orderBy(res[key], ['view'], ['desc']);
    }
    onMounted(getBxhAlbum('vn'), getListSinger())

    const styleBxh = (index) => {
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
