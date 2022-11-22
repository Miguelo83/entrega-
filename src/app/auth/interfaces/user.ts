export interface UserI {
    id?: number;
    username?: string;
    password?: string;
    role?: string;
    createdAt?: Date;
    updatedAt?: Date;

}
export interface UserResponseI extends UserI {
    message: string;
    token: string;
    status: number;
}
    
