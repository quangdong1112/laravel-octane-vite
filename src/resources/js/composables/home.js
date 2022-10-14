import {ref} from 'vue';
import { cloneDeep, sortBy, orderBy } from 'lodash';
export default function useHome() {
    const newAlbum = ref([]);
    const newShare = ref([]);
    const newVideo = ref([]);

    const getNewAlbum = async () => {
        const album = [
            { id: 1, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 2, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/data/cover_thumb_200/171/170539.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 3, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 4, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 5, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 6, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 7, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 2, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 8, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 1, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 9, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 10, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 3, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
        ];

        const video = [
            { id: 1, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 4, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 2, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 5, thumb: 'https://data.chiasenhac.com/data/cover_thumb_200/171/170539.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 3, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 4, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 4, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 6, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 5, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 4, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 6, name: 'Bên trên tầng lầu', singer: 'Tăng Duy Tân', type: 5, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 7, name: 'Chưa quên người yêu cũ', singer: 'Hà Nhi', type: 4, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
            { id: 8, name: 'Điều buồn nhất khi yêu', singer: 'Hòa Minzy', type: 4, thumb: 'https://data.chiasenhac.com/imgs/no_cover.jpg', album: 'Album 1', link: 'dongnq.net', time: '04:50', view: 1000, start: '2022-10-10'},
        ];
        newAlbum.value = album;
        newVideo.value = video;
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

    return {
        slideShowData,
        newVideo,
        newAlbum,
        getNewAlbum,
        onLeftClicked,
        onRightClicked,
    }
}

