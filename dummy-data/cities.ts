import { Cities } from 'types';

const _url = process.env.NEXT_PUBLIC_BASE_IMAGE_API;

const cities: Cities[] = [
  {
    id: '81',
    name: 'Bekasi',
    slug: 'bekasi',
    titleTag: 'Bekasi | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/grand_metropolitan/6e0c5d804a28afb8409c3db103546a68.jpg`,
    buildings: [{ city: { id: '3275', name: 'KOTA BEKASI' } }]
  },
  {
    id: '17',
    name: 'Bintaro',
    slug: 'bintaro',
    titleTag: 'Bintaro | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Bintaro_Banner_MVwgCTe/b69f77d012915895c0e8ac27b3208895.jpg`,
    buildings: [
      {
        city: { id: '3674', name: 'KOTA TANGERANG SELATAN' }
      },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      {
        city: { id: '3674', name: 'KOTA TANGERANG SELATAN' }
      },
      {
        city: { id: '3674', name: 'KOTA TANGERANG SELATAN' }
      },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3674', name: 'KOTA TANGERANG SELATAN' } }
    ]
  },
  {
    id: '85',
    name: 'Blok M',
    slug: 'blok-m',
    titleTag: 'Blok M | Co-Living di Kost Eksklusif Apartemen',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Little_Tokyo/a5256e65c6b7a4e1f5352952eca3d027.jpg`,
    buildings: [
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }
    ]
  },
  {
    id: '68',
    name: 'BSD',
    slug: 'bsd',
    titleTag: 'BSD | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/BSD/5b7f8bed4037af581abc73da8ebaee85.jpg`,
    buildings: [
      {
        city: { id: '3674', name: 'KOTA TANGERANG SELATAN' }
      },
      { city: { id: '3603', name: 'KABUPATEN TANGERANG' } },
      {
        city: { id: '3674', name: 'KOTA TANGERANG SELATAN' }
      },
      { city: { id: '3603', name: 'KABUPATEN TANGERANG' } },
      { city: { id: '3603', name: 'KABUPATEN TANGERANG' } },
      { city: { id: '3603', name: 'KABUPATEN TANGERANG' } },
      { city: { id: '3603', name: 'KABUPATEN TANGERANG' } }
    ]
  },
  {
    id: '74',
    name: 'Cakung',
    slug: 'cakung',
    titleTag: 'Cakung | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Cakung__RS_Cakung/3ea17c5e62494b31b85d01109b5ea92c.jpg`,
    buildings: [{ city: { id: '3172', name: 'KOTA JAKARTA TIMUR' } }]
  },
  {
    id: '71',
    name: 'Cempaka Putih',
    slug: 'cempaka-putih',
    titleTag: 'Cempaka Putih | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/cempaka_putih_transportasi/e0ff911e1e4d05bad7d83b792da32b1f.jpg`,
    buildings: [{ city: { id: '3173', name: 'KOTA JAKARTA PUSAT' } }]
  },
  {
    id: '23',
    name: 'Cengkareng',
    slug: 'cengkareng',
    titleTag: 'Cengkareng | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Cengkareng_1/04a3ce0eb9a7ccda50c416e28e5e9ca4.jpg`,
    buildings: [{ city: { id: '3174', name: 'KOTA JAKARTA BARAT' } }]
  },
  {
    id: '69',
    name: 'Cideng',
    slug: 'cideng',
    titleTag: 'Cideng | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Cideng1/d52cc3eea44109d0b2830ec59f0df0c1.jpg`,
    buildings: [
      { city: { id: '3173', name: 'KOTA JAKARTA PUSAT' } },
      { city: { id: '3173', name: 'KOTA JAKARTA PUSAT' } }
    ]
  },
  {
    id: '77',
    name: 'Cilandak',
    slug: 'cilandak',
    titleTag: 'Cilandak | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/south-quarter_xCUxld1/e03ca0102169c4d31c2ae5a394f8b42d.jpg`,
    buildings: [
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }
    ]
  },
  {
    id: '67',
    name: 'Depok',
    slug: 'depok',
    titleTag: 'Depok | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Rukita_Depok_-_Perpustakaan_UI_8COC6tc/3fe16b0f70b3b5ce141e9d987779ced8.jpg`,
    buildings: [
      { city: { id: '3276', name: 'KOTA DEPOK' } },
      { city: { id: '3276', name: 'KOTA DEPOK' } },
      { city: { id: '3276', name: 'KOTA DEPOK' } },
      { city: { id: '3276', name: 'KOTA DEPOK' } },
      { city: { id: '3276', name: 'KOTA DEPOK' } }
    ]
  },
  {
    id: '86',
    name: 'Gandaria',
    slug: 'gandaria',
    titleTag: 'Gandaria | Co-Living di Kost Eksklusif Apartemen',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Tanamera_Coffee/8f1c7fa1334c4b8bc129b826ea1fd23d.jpg`,
    buildings: [{ city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }]
  },
  {
    id: '9',
    name: 'Grogol',
    slug: 'grogol',
    titleTag: 'Grogol | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/grogol-taman-anggrek/26d829b7f1d2f4d828de67745b1075a3.jpg`,
    buildings: [
      { city: { id: '3174', name: 'KOTA JAKARTA BARAT' } },
      { city: { id: '3174', name: 'KOTA JAKARTA BARAT' } },
      { city: { id: '3174', name: 'KOTA JAKARTA BARAT' } }
    ]
  },
  {
    id: '84',
    name: 'Jatinegara',
    slug: 'jatinegara',
    titleTag: 'Jatinegara | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Jatinegara_Cityplaza_Jatinegara/1026e69abbbc346caf7ee4958205aca3.jpg`,
    buildings: [
      { city: { id: '3172', name: 'KOTA JAKARTA TIMUR' } },
      { city: { id: '3172', name: 'KOTA JAKARTA TIMUR' } }
    ]
  },
  {
    id: '4',
    name: 'Karawaci',
    slug: 'karawaci',
    titleTag: 'Karawaci | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/karawaci_photo_3.1/5f337b5ea57588d42c90bf6ecf820bb6.jpg`,
    buildings: [
      { city: { id: '3603', name: 'KABUPATEN TANGERANG' } },
      { city: { id: '3603', name: 'KABUPATEN TANGERANG' } },
      { city: { id: '3603', name: 'KABUPATEN TANGERANG' } },
      { city: { id: '3603', name: 'KABUPATEN TANGERANG' } },
      { city: { id: '3603', name: 'KABUPATEN TANGERANG' } },
      { city: { id: '3603', name: 'KABUPATEN TANGERANG' } },
      { city: { id: '3603', name: 'KABUPATEN TANGERANG' } }
    ]
  },
  {
    id: '78',
    name: 'Kebayoran Baru',
    slug: 'kebayoran-baru',
    titleTag: 'Kebayoran Baru | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Kebayoran-baru---SCBD/eff5b5fdb28a5e63efafbba0cc412227.jpg`,
    buildings: [
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }
    ]
  },
  {
    id: '25',
    name: 'Kebon Jeruk',
    slug: 'kebon-jeruk',
    titleTag: 'Kebon Jeruk | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/kebon-jeruk/47d88fb8a7f12c609541b96769184f8a.jpg`,
    buildings: [{ city: { id: '3174', name: 'KOTA JAKARTA BARAT' } }]
  },
  {
    id: '75',
    name: 'Kemang',
    slug: 'kemang',
    titleTag: 'Kemang | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/kemang_photo_8_N4eH1B1/260b6450567764507f00757228dceba4.jpg`,
    buildings: [{ city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }]
  },
  {
    id: '10',
    name: 'Kuningan',
    slug: 'kuningan',
    titleTag: 'Kuningan | Rukita | Co-Living & Apartemen Bebas Ri',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/kuningan_6_Nl3NNXY/2ad04db9373d15b9046f040fddd6ce13.jpg`,
    buildings: [
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }
    ]
  },
  {
    id: '112',
    name: 'Mampang',
    slug: 'mampang',
    titleTag: 'Kost di Mampang | Rukita Coliving',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Mampang_Univ_Paramadina/3f3720dcf523000cf915040a712c0c39.jpg`,
    buildings: [{ city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }]
  },
  {
    id: '80',
    name: 'Mangga Besar',
    slug: 'mangga-besar',
    titleTag: 'Mangga Besar | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Mangga-besar_Kota-tua_sfg65uL/47f935a44db2526b117ce8acb4f13172.jpg`,
    buildings: [{ city: { id: '3173', name: 'KOTA JAKARTA PUSAT' } }]
  },
  {
    id: '18',
    name: 'Manggarai',
    slug: 'manggarai',
    titleTag: 'Manggarai | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/manggarai_cafe_lmKW8vj/f25e2e8248c5c9a7f3d5e2a190c11ee5.jpg`,
    buildings: [{ city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }]
  },
  {
    id: '6',
    name: 'Menteng',
    slug: 'menteng',
    titleTag: 'Menteng | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/menteng_-_bundaran_hi_night_r0EOTPg/5ef316d91aa3389d4d54ced5cb81a9b2.jpg`,
    buildings: [
      { city: { id: '3173', name: 'KOTA JAKARTA PUSAT' } },
      { city: { id: '3173', name: 'KOTA JAKARTA PUSAT' } }
    ]
  },
  {
    id: '79',
    name: 'Pancoran',
    slug: 'pancoran',
    titleTag: 'Pancoran | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Pancoran_-_Patung_Pancoran/58447e3860310a87db813d57f5f263fa.jpg`,
    buildings: [
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }
    ]
  },
  {
    id: '19',
    name: 'Pasar Baru',
    slug: 'pasar baru',
    titleTag: 'Kelinci Bunder | Kost Eksklusif Rukita di Pasar Baru Jakarta',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/pasar_baru_banner_8ns2Ars/c0a8154cb4469ab9f2470b169278736b.jpg`,
    buildings: [{ city: { id: '3173', name: 'KOTA JAKARTA PUSAT' } }]
  },
  {
    id: '83',
    name: 'Pasar Minggu',
    slug: 'pasar-minggu',
    titleTag: 'Pasar Minggu | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/4_cZpvSVW/31d4ca5c97740dbe6e5a3202df2ae4c5.jpg`,
    buildings: [
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }
    ]
  },
  {
    id: '24',
    name: 'Pejaten',
    slug: 'pejaten',
    titleTag: 'Pejaten | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/p4_Ha9Izr4/53ccd22093ee1ca842d8d8b3c78980e1.jpg`,
    buildings: [
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }
    ]
  },
  {
    id: '87',
    name: 'Pesanggrahan',
    slug: 'pesanggrahan',
    titleTag: 'Pesanggrahan | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Bintaro_Plaza/8489f01ccf60786b61233e2c189af019.jpg`,
    buildings: [{ city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }]
  },
  {
    id: '76',
    name: 'Pluit',
    slug: 'pluit',
    titleTag: 'Pluit | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/12/e0826bec10af52aac26d5bccbc95d545.jpg`,
    buildings: [{ city: { id: '3175', name: 'KOTA JAKARTA UTARA' } }]
  },
  {
    id: '20',
    name: 'Radio Dalam',
    slug: 'radio dalam',
    titleTag: 'Rukita Radio Dalam | Kost Eksklusif di Gandaria',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Beer_Garden_Radio_Dalam/f784cc43ad687ccef8173f21dd860dab.jpg`,
    buildings: [
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }
    ]
  },
  {
    id: '70',
    name: 'Rawamangun',
    slug: 'rawamangun',
    titleTag: 'Rawamangun | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/rawamangun_photos_2_/354a8fc3a2749d85d09b008da24a9127.jpg`,
    buildings: [{ city: { id: '3172', name: 'KOTA JAKARTA TIMUR' } }]
  },
  {
    id: '7',
    name: 'Senayan',
    slug: 'senayan',
    titleTag: 'Senayan | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Senayan_XG3137F/b95d940a6760c62f3dfb21ee06ac20bf.jpg`,
    buildings: [
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }
    ]
  },
  {
    id: '13',
    name: 'Senopati',
    slug: 'senopati',
    titleTag: 'Senopati | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Senopati-2/6d40e1132cd6ebe0d8ab1063c8eb1ea4.jpg`,
    buildings: [{ city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }]
  },
  {
    id: '5',
    name: 'Setiabudi',
    slug: 'setiabudi',
    titleTag: 'Setiabudi | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Setiabudi/7a0b932ad0e29e5f045608b4b3cad74c.jpg`,
    buildings: [
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } },
      { city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }
    ]
  },
  {
    id: '72',
    name: 'Tanah Abang',
    slug: 'tanah-abang',
    titleTag: 'Tanah Abang | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/tanah_abang/48279396aa751bc964b1f80255341997.jpg`,
    buildings: [{ city: { id: '3173', name: 'KOTA JAKARTA PUSAT' } }]
  },
  {
    id: '21',
    name: 'Tangerang',
    slug: 'tangerang',
    titleTag: 'Rukita Soekarno-Hatta | Kost Eksklusif Dekat Bandara',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/AEON_IzD74Lc/346eccc437ccf490990383d83ee3a852.jpg`,
    buildings: [{ city: { id: '3671', name: 'KOTA TANGERANG' } }]
  },
  {
    id: '82',
    name: 'Tanjung Duren',
    slug: 'tanjung-duren',
    titleTag: 'Tanjung Duren | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Tanjung_Duren_Central_Park_Mall/fe38213502963cdc5afd69dd2f02e2df.jpg`,
    buildings: [{ city: { id: '3174', name: 'KOTA JAKARTA BARAT' } }]
  },
  {
    id: '26',
    name: 'Tanjung Priok',
    slug: 'tanjung-priok',
    titleTag: 'Tanjung Priok | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Priok-5/8ee6cbe61e188f7366a6e57b81ddd7ec.jpg`,
    buildings: [
      { city: { id: '3175', name: 'KOTA JAKARTA UTARA' } },
      { city: { id: '3175', name: 'KOTA JAKARTA UTARA' } }
    ]
  },
  {
    id: '73',
    name: 'Tebet',
    slug: 'tebet',
    titleTag: 'Tebet | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/Tebet_kokas/cc955c3e36ca74628a23675f8cdd5c3b.jpg`,
    buildings: [{ city: { id: '3171', name: 'KOTA JAKARTA SELATAN' } }]
  },
  {
    id: '12',
    name: 'Thamrin',
    slug: 'thamrin',
    titleTag: 'Thamrin | Rukita | Co-Living & Apartemen Bebas Ribet',
    headerPhotoThumbnail: `${_url}CACHE/images/buildings/place/menteng_-_bundaran_hi/0b7e752291f6d5a8f4272096b6db901e.jpg`,
    buildings: [
      { city: { id: '3173', name: 'KOTA JAKARTA PUSAT' } },
      { city: { id: '3173', name: 'KOTA JAKARTA PUSAT' } }
    ]
  }
];

export default cities;
