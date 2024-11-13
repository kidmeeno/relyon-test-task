interface UserCardProps {
    id: number;
    image: string;
    firstName: string;
    lastName: string;
    age: number;
}

interface User {
    id: number;
    image: string;
    firstName: string;
    lastName: string;
    age: number;
}

interface UserDetailsProps {
    user: {
        id: number;
        image: string;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        phone: string;
        address: {
            city: string;
            state: string;
        };
    };
}