export interface NavLink {
    About: string;
    contact: string;
    services: string;
}

export interface HeaderProps {
    title?: string;
    navLinks: NavLink[];
    isAuthenticated?: boolean;
}