export default interface IUser {
    id: number;
    username: string;
    email: string;
    confirmed: boolean;
    blocked: boolean | null;
    provider: string;
    role: {
        id: number;
        name: string;
        description: string;
        type: string;
    };
    created_at: string;
    updated_at: string;
}
