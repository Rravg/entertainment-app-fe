/// <reference types="react-scripts" />
type Pages = {
    page: "Home" | "Movies" | "Series" | "Bookmarked";
};

interface Item {
    title: string;
    thumbnail: {
        trending?: {
            small: string;
            large: string;
        };
        regular: {
            small: string;
            medium: string;
            large: string;
        }
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean
}