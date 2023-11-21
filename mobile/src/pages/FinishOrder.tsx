import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'

import { useNavigation, useRoute, RouteProp } from "@react-navigation/native"; 
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../routes/app.routes";

import { api } from "../services/api";

type RouteDetailProps = {
    FinishOrder:{
        number: string | number
        order_id: string
    }
}

type FinishOrderRouteProp = RouteProp<RouteDetailProps, "FinishOrder">

export default function FinishOrder(){
    const route = useRoute<FinishOrderRouteProp>();
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()

    async function handleFinish(){
        try{
            await api.put("/order/send", {
                order_id: route.params?.order_id
            })

            navigation.popToTop();

        }catch(err){
            console.log("Erro ao finalizar. Tente mais tarde!")
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.alert}>Você deseja finalizar o pedido?</Text>
            <Text style={styles.title}>Mesa {route.params.number}</Text>

            <TouchableOpacity style={styles.button} onPress={handleFinish}>
                <Text style={styles.textButton}>Finalizar Pedido</Text>
                <Feather style={styles.icon} name="shopping-cart" size={22}/>       
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1d1d2e",
        paddingVertical: "5%",
        paddingHorizontal: "4%",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50
    },
    alert:{
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 12
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 12
    },
    button:{
        backgroundColor: "#3fffa3",
        flexDirection: "row",
        width: "75%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        marginTop: 20
    },
    textButton:{
        fontSize: 18,
        marginRight: 8,
        fontWeight: "bold",
        color: "#1d1d2e"
    },
    icon:{
        color: "#1d1d2e",
    }
})