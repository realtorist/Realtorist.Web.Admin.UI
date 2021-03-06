import { ListingFeedSetting } from './listingFeedSetting';

export interface ListingsSettings {
    listingOfficesToAutoFavouriteListings: string[];
    showSimilarListings: boolean;
    similarListingsTitle: string;
    similarListingsNumber: number;
    similarListingsMaxDistanceKm: number;
    similarListingsMaxPriceDifferencePercentage: number;
    feeds: ListingFeedSetting[];
}