export type Program = {
    id?: number;
    name: string;
    programToStudent: ProgramToStudent[];
    isCollapsed: boolean;
}

export type ProgramToStudent = {
    id?: number;
    student: Student;
    program: Program;
    inscriptionDate: Date;
}

export type Student = {
    id?: number;
    name: string;
    lastName: string;
    programToStudent: ProgramToStudent[];
}

export type Profile = {
    id?: number;
    name?: string;
    email?: string;
    user?: User;
}

export type User = {
    id?: number;
    username?: string;
    password?: string;
    profile?: Profile;
    roles?: string[];
}
