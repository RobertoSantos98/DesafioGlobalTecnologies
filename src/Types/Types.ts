export type User = {
    id: number;
    nome: string;
    email: string;
    date_of_birth: string | null;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export type UserAuth = {
    User: User;
    token: string;
}