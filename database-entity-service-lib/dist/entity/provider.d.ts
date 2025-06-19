import 'reflect-metadata';
export declare class Provider {
    id: number;
    name: string;
    phone?: string;
    email?: string;
    address: string;
    active: boolean;
    registrationDate: Date;
    constructor(data?: {
        name: string;
        phone?: string;
        email?: string;
        active?: boolean;
        address?: string;
        registrationDate?: string;
    });
}
//# sourceMappingURL=provider.d.ts.map