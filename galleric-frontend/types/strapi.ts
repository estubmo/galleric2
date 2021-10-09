export default interface IStrapiUserResponse {
    data: {
        user: {
            id: number;
            email: string;
            provider: string;
            confirmed: boolean;
            blocked: boolean | null;
            created_at: string;
            updated_at: string;
            orders: string[];
        };
        jwt: string;
    };
}
