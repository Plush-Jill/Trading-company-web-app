import "reflect-metadata";
export declare class User {
    id: number;
    email: string;
    password: string;
    refreshToken?: string;
    resetToken?: string;
    registrationDate: Date;
    lastLogin?: Date;
    constructor(data?: {
        email: string;
        password: string;
        resetToken?: string;
    });
}
//# sourceMappingURL=user.d.ts.map