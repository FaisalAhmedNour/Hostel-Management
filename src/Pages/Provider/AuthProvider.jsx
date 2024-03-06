import {
    createContext,
    useEffect,
    useState
} from "react";
import {
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isInstructor, setIsInstructor] = useState(false)

    const createUserWithPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUserWithPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, role) => {
        console.log(name, role)
        return updateProfile(auth.currentUser, {
            displayName: `${name}`, phoneNumber: `${role}`
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // Set user code
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            axios.get(`http://localhost:5000/students/${currentUser?.email}`)
                .then(res => {
                    console.log(res.data)
                    res.data?.role === 'admin' ? setIsAdmin(true) : setIsInstructor(true);
                    setLoading(false)
                    // console.log('ok');
                })
            // console.log(currentUser);
            // if (currentUser) {
            //     axios('https://camp-sportopia-server-faisalahmednour.vercel.app/jwt', { email: currentUser.email })
            //         .then(data => {
            //             console.log(data.data.token)
            //             localStorage.setItem("access-token", data.data.token)
            //         })
            // }
            // else {
            //     localStorage.removeItem("access-token")
            // }
            // setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [user])

    const authInfo = {
        user,
        loading,
        createUserWithPass,
        signInUserWithPass,
        logOut,
        updateUser,
        isAdmin,
        isInstructor,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;