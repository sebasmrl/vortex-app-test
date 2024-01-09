import { useQueryClient } from "@tanstack/react-query"

export interface User{
    email: string,
    password: string
}

export const useValidLogged = () => {
    const client = useQueryClient();
        
    const logged = client.getQueryData<User>( ['user']);

    
    if(!logged) return false;
    return ( logged?.email ===undefined || logged?.password ===undefined) ? false : true;
}
