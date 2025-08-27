import { View, StyleSheet, TextInput, Pressable, Text, TouchableOpacity, Animated, Dimensions, ImageBackground, Image, ActivityIndicator } from 'react-native';
import { Colors } from '../../Utils/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useContext, useRef, useState } from 'react';
import { LoginService } from '../../Services/AuthService';
import { AuthContext } from '../../Contexts/AuthContext';

const { width } = Dimensions.get('window');

export default function Login() {
    const { login } = useContext(AuthContext);

    const slideAnim = useRef(new Animated.Value(0)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const [ isLogin, setIsLogin ] = useState(true);
    const [ loading, setLoading ] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleScreen = () => {
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: isLogin ? -width : 0,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(rotateAnim, {
                toValue: isLogin ? 1 : 0,
                duration: 400,
                useNativeDriver: true,
            })
        ]).start();
        setIsLogin(!isLogin);
    }

    const rotateX = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const handleLoginSubmit = async () => {
        setLoading(true);

        try {
            const response = await login(email, password);
            return response;
        } catch (error) {
            console.error("Login error:", error);
        }finally{
            setLoading(false);
        }

        return;
    }

    return (
        <ImageBackground style={styles.container} source={require('../../Assets/image-fundo.png')} resizeMode="cover">
            <Animated.View style={{ transform:[{ rotate: rotateX }],backgroundColor: Colors.Branco, borderRadius: 100, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', padding: 20, marginBottom: 20, width: 200, position: 'absolute', top: 50, zIndex: 10, borderWidth: 2, borderColor: Colors.Laranja}}>
                <Image source={require('../../Assets/image-logo.png')} style={{width: 100, height: 100}} />
                <Text style={{fontSize: 24, fontWeight: 'bold', color: Colors.Laranja, marginBottom: 20}}>{isLogin ? 'Você Voltou!' : 'Bem-Vindo!'}</Text>
            </Animated.View>
            <Animated.View style={[styles.formContainer, { transform: [{ translateX: slideAnim }] }]}>
                {/* Login */}
                <View style={{flex: 2}}>
                    <Text style={styles.title}>Fazer Login</Text>
                    <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} value={email} />
                    <TextInput placeholder="Senha" style={styles.input} secureTextEntry onChangeText={setPassword} value={password} />
                    <Pressable style={styles.button} onPress={handleLoginSubmit}>
                        {loading? <ActivityIndicator color={Colors.Branco} /> : <Text style={styles.buttonText}>Entrar</Text>}
                    </Pressable>

                    <View style={{height: 1, width: '90%', backgroundColor: Colors.Branco, opacity: 0.4, marginVertical: 20, alignSelf: 'center'}}/>

                    <View style={{ alignItems: 'center', marginTop: 20, gap: 10 }}>
                        <TouchableOpacity>
                            <Text style={{fontSize: 16, color: Colors.Branco}}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleScreen} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5}}>
                            <Text style={{fontSize: 16, color: Colors.Branco}}> Criar conta </Text>
                            <MaterialCommunityIcons name="chevron-right" size={40} color={Colors.Branco} />
                        </TouchableOpacity>
                    </View>

                
                </View>

                <View style={{width: 1, backgroundColor: Colors.Branco, opacity: 0.4, marginHorizontal: 10}}/>
                {/* Cadastro */}
                <View style={{flex: 2}}>
                    <Text style={styles.title}>Cadastrar</Text>
                    <TextInput placeholder="Email" style={styles.input} />
                    <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
                    <TextInput placeholder="Confirmar Senha" style={styles.input} secureTextEntry />
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </Pressable>

                    <View style={{height: 1, width: '90%', backgroundColor: Colors.Branco, opacity: 0.4, marginVertical: 20, alignSelf: 'center'}}/>

                    <View style={{ alignItems: 'center', marginTop: 20, gap: 10 }}>
                        <TouchableOpacity>
                            <Text style={{fontSize: 16, color: Colors.Branco}}>Já possui uma conta?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleScreen} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5}}>
                            <MaterialCommunityIcons name="chevron-left" size={40} color={Colors.Branco} />
                            <Text style={{fontSize: 16, color: Colors.Branco}}> Fazer login </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: Colors.Cinza,
    },
    formContainer: {
        marginHorizontal: '10%',
        width: '180%',
        height: '75%',
        backgroundColor: Colors.Vermelho,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        padding: 16,
        elevation: 5,
        paddingTop: 20,
        flexDirection: 'row'
    },
    input: {
        height: 50,
        width: '95%',
        borderColor: Colors.Branco,
        backgroundColor: Colors.Branco,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 12,
        elevation: 5,
        fontSize: 16
    },
    button: {
        backgroundColor: Colors.Laranja,
        paddingHorizontal: 30,
        padding: 12,
        borderRadius: 4,
        justifyContent: 'center',
        elevation: 5,
        alignSelf: 'center',
    },
    buttonText: {
        color: Colors.Branco,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.Branco,
        marginVertical: 16,
        textAlign: 'center'
    }

});
