import { useState } from "react";
import { useNavigation } from "expo-router";
import { Text, View, ScrollView, Alert, Linking, FlatListComponent, FlatList } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ProductCartProps, useCartStore } from '@/stores/cart-store';

import { formatCurrency } from "@/utils/functions/format-currency";

import { Header } from '@/components/header';
import { Product } from '@/components/product';
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/link-button";
import PaymentOptions from "@/components/paymentMethod";
import InputTroco from "@/components/inputTroco";
import useTrocoStore from "@/stores/trocoStore";

const PHONE_NUMBER = "4898182236"

export default function Cart() {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const { inputValue } = useTrocoStore();

  const cartStore = useCartStore();
  const navigation = useNavigation();

  const total = formatCurrency(
    cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    ),
  );

  function handleProductRemove(product: ProductCartProps) {
    Alert.alert('Remover', `Desejar remover ${product.title} do carrinho?`, [
      {
        text: 'Canelar'
      },
      {
        text: 'Remover',
        onPress: () => cartStore.remove(product.id)
      }
    ])
  }

  function handleOrder() {
    if (address.trim().length === 0 || paymentMethod.trim().length === 0) {
      return Alert.alert('Pedido', 'Informe os dados da entrega e pagamento.')
    } 

    const products = cartStore.products.map((product) => `\n ${product.quantity}x ${product.title}`).join('');
    
     //Logica para gerar o número de pedido unico

    const myVariable = 1;
    var randomNumber;
    
    if (myVariable > 0) {

        randomNumber = Math.floor(Math.random() * 9000) + 1000;
    }
    
    //fim

    

    const message = `
    🍔 NOVO PEDIDO -------------- 
    \n N° ${`000`+randomNumber}
    \n Entregar em: ${address}

    ${products}

    \n Valor total: ${total}
    \n Pagamento: ${paymentMethod === "Dinheiro" ? `${paymentMethod} ` + '\n \n #Troco para: R$'+ inputValue : paymentMethod}

    `;

    const whatsappURL = `http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodeURIComponent(message)}`;

    Linking.canOpenURL(whatsappURL).then((supported) => {
      if (supported) {
        Linking.openURL(whatsappURL);
        cartStore.clear();
        navigation.goBack();
      } else {
        Alert.alert('Erro', 'O WhatsApp não está instalado no seu dispositivo.');
      }
    });
  }

 
  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />

      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="p-5 flex-1">
            {cartStore.products.length > 0 ? (
              <View className="border-b border-slate-700">
                {cartStore.products.map((product) => (
                  <Product
                    key={product.id}
                    data={product}
                    onPress={() => handleProductRemove(product)}
                  />
                ))}
              </View>
            ) : (
              <Text className="font-body text-slate-400 text-center my-8">
                Seu carrinho está vazio.
              </Text>
            )}

            <View className="flex-row gap-2 items-center mt-5 mb-4">
              <Text className="text-white text-xl font-subtitle">Total:</Text>
              <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
            </View>
            
            <Input
              placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..."
              onChangeText={setAddress}
              blurOnSubmit={true}
              onSubmitEditing={handleOrder}
              returnKeyType="next"
            />

            
            
            <PaymentOptions setPaymentMethod={setPaymentMethod} />
            {paymentMethod.search("Dinheiro") ? null : <InputTroco  />  }

          </View>
         
        </ScrollView>
        
      </KeyboardAwareScrollView>

      <View className="p-5 gap-5">
        <Button onPress={handleOrder}>
          <Button.Text>Enviar pedido</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>

        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  );
}
