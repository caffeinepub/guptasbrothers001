import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type AppId = bigint;
export interface App {
    id: AppId;
    name: string;
    description: string;
    category: Category;
    downloadCount: bigint;
    rating: number;
    price?: number;
    iconUrl: string;
}
export enum Category {
    tools = "tools",
    entertainment = "entertainment",
    productivity = "productivity",
    education = "education",
    games = "games"
}
export interface backendInterface {
    addApp(name: string, description: string, category: Category, price: number | null, rating: number, downloadCount: bigint, iconUrl: string): Promise<AppId>;
    getAllApps(): Promise<Array<App>>;
    getAppById(id: AppId): Promise<App>;
    getAppsByCategory(category: Category): Promise<Array<App>>;
    seedSampleApps(): Promise<void>;
}
