export type FontAwesome = {
    prefix: string;
    name: string;
    size?: string;
};

export type Skill = {
    name: string;
    scale: number;
    experiance: string;
    type: string;
};

export type EmploymentProject = {
    role: string;
    type: string;
    name: string;
    description: string;
    technology: string[];
};

export type Employment = {
    current: boolean;
    location: string;
    company: string;
    start: string;
    position: string;
    description: string;
    projects?: EmploymentProject[];
    end?: string;
};