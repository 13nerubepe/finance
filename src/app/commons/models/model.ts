
export interface ExpandedRows{
    [key: string]: boolean;

}

export interface Actualite{
    id: number;
    title: string;
    description: string;
    category: string;
    source: string;
    date: string;
    image: string;
    featured: boolean;
    url?: string;

}
