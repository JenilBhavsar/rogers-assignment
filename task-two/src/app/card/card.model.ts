export interface Item {
    url: String;
    title: String;
    description: String;
    isNoIndex?: Boolean;
    category: Category[];
}

export interface Category {
    [key: string]: String;
}