import React,
{
    createContext,
    ReactNode,
    useContext,
    useState,
    useEffect
} from 'react';

import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;

import { api } from '../services/api';
import { COLLECTION_USERS } from '../configs/database'
// typagem para usuario
type User = {
    id: string,
    username: string,
    firstName: string,
    avatar: string,
    email: string,
    token: string
}

// typagem do que vou compartilhar do meu contexto
type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;

}

type AuthProviderProps = {
    children: ReactNode
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);


export function AuthProvider({ children }: AuthProviderProps) {
    // statdo para amarzenar novo usuario
    const [user, setUser] = useState<User>({} as User);

    // stado para saber se usuario ja carregou as informações e cadastro
    const [loading, setLoading] = useState(false);

    // funtion para se cadastrar
    async function signIn() {
        try {
            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;


            setLoading(true);
            // controí uma url de autorização para o usuario
            // a resposta do AuthSession é o AuthorizationResponse
            const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse

            if (type === "success" && !params.error) {

                // isso para enserir o token no cabeçalho
                api.defaults.headers.common['Authorization'] = `Bearer ${params.access_token}`

                const userInfo = await api.get('/users/@me');
                const firstName = userInfo.data.username.split('')[0];

                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`


                const userData = {
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                }

                // salvando no Storage do celular
                // setItem precisa de dois parametros: 1 nome da coleção aonde vo quer gravar e o 2  o dado, tem que ser convertido para texto
                await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData))


                // salvando o usuario no state
                setUser(userData);
            }

        } catch {
            throw new Error('Não foi possivel autenticar!')
        } finally {
            // se der erro, ou quando acabar, ele executa esse finally,
            setLoading(false);

        }
    }

    async function signOut(){
        setUser({} as User);
        await AsyncStorage.removeItem(COLLECTION_USERS);
    }

    async function loadUserStorageData() {
        const storage = await AsyncStorage.getItem(COLLECTION_USERS);
        if (storage) {
            const userLogged = JSON.parse(storage) as User;

            api.defaults.headers.common['Authorization'] = `Bearer ${userLogged.token}`

            setUser(userLogged);
        }
    }

    useEffect(() => {
        // function quer busca os dados do usuario antes de renderizar no return
        loadUserStorageData();
    }, []);

    return (
        <AuthContext.Provider value={{ user, signIn, loading, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}