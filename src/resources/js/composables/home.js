import {ref} from 'vue';
import { cloneDeep, sortBy, orderBy } from 'lodash';
export default function useHome() {
    const newAlbum = ref([]);
    const bxhAlbum = ref([]);
    const listSinger = ref([]);
    const getListSinger = async () => {
        const res = [
            { id: 1, name: 'Hoa Minzy', avatar: 'https://data.chiasenhac.com/imgs/no_cover.jpg'},
            { id: 1, name: 'Hoa Minzy', avatar: 'https://data.chiasenhac.com/imgs/no_cover.jpg'},
            { id: 1, name: 'Hoa Minzy', avatar: 'https://data.chiasenhac.com/imgs/no_cover.jpg'},
            { id: 1, name: 'Hoa Minzy', avatar: 'https://data.chiasenhac.com/imgs/no_cover.jpg'},
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
        { name: 'BXH Việt Nam', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHNhacVietNam_245x140.png', sort: 0},
        { name: 'BXH Việt Video', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHVideo_245x140.png', sort: 1},
        { name: 'BXH US - UK', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHNhacUs-UK_245x140.png', sort: 2},
        { name: 'BXH Nhạc Hàn', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHNhacHan_245x140.png', sort: 3},
        { name: 'BXH Nhạc Nhật', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHNhacNhat_245x140.png', sort: 4},
        { name: 'BXH Nhạc Hoa', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHNhacHoa_245x140.png', sort: 5},
        { name: 'BXH Nước khác', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHNhacNuocKhac_245x140.png', sort: 6},
        { name: 'BXH Beat Playback', actived: false, image: 'https://data.chiasenhac.com/imgs/bxh/BXHBeat_245x140.png', sort: 7},
    ])

    const onLeftClicked = () => {
        const res = cloneDeep(slideShowData)
        slideShowData.value = res.value.map(item => {
            item.sort -= 1;
            if (item.sort < 0) {
                item.sort = (res.value.length - 1)
            }
            return item;
        })
    };
    const onRightClicked = () => {
        const res = cloneDeep(slideShowData)
        slideShowData.value = res.value.map(item => {
            item.sort += 1;
            if (item.sort > (res.value.length -1)) {
                item.sort = 0
            }
            return item;
        })
    };

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

    return {
        slideShowData,
        getNewAlbum,
        newAlbum,
        onLeftClicked,
        onRightClicked,
        getBxhAlbum,
        bxhAlbum,
        listSinger,
        getListSinger,
    }
}

