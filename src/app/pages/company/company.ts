export interface CompanyI {
    id?: number;
    company_name: string;
    company_rut: string;
    dir: string;
    createdAt?: Date;
    updatedAt?: Date;
    categories?: CategoryI[];

    
}
export interface CategoryI {
    id: number;
    name: string;
    dir: string;
    createdAt: Date;
    updatedAt: Date;
}
