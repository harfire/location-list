export type Meta = {
  page: number;
  totalPage: number;
  totalItems: number;
};

export type AddressItem = {
  id: string;
  name: string;
};

export type CityBuildings = {
  city: AddressItem;
};

export type Cities = {
  id: string;
  name: string;
  slug: string;
  titleTag: string;
  headerPhotoThumbnail: string;
  buildings: CityBuildings[];
};

export type Discount = {
  amount: number;
  name: string;
  discountType: string;
};

export type Building = {
  id: string;
  name: string;
  address: string;
  city: AddressItem;
  district: AddressItem;
  province: AddressItem;
  subdistrict: AddressItem;
  lat: number;
  lon: number;
  startFrom: number;
  discount: Discount | null;
  published: boolean;
  slug: string;
  roomAvailability: number;
  photoThumbnail: string;
  videoUrl: string;
  rukitaOption: boolean;
};

export type Place = {
  id: string;
  name: string;
  cityName: string;
  buildings: Building[];
};
