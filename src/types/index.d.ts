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
    showInSideBar: boolean;
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

export type Education = { 
    start: string;
    end: string;
    school:string
    program:string;
    description: string;
};

export interface Profile {
    about: string;
    items: Item[];
}

export interface Item {
    label: string;
    value: string;
}
