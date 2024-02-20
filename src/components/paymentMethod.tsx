import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, FlatList } from 'react-native';

interface PaymentOptionsProps {
  setPaymentMethod: (method: string) => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ setPaymentMethod }) => {
  const paymentOptions = ['Cartão de Crédito', 'Cartão de Débito', 'PIX', 'Dinheiro'];
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionClick = (option: string) => {
    setPaymentMethod(option);
    setSelectedOption(option);
  };

  
    return (
        <View style={styles.container}>
          <Text style={styles.label}>Pagamento:</Text>
          <View style={styles.optionsContainer}>
            <FlatList
              data={paymentOptions}  
              keyExtractor={(option) => option}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => handleOptionClick(item)}
                  style={[
                    styles.optionButton,
                    selectedOption === item && styles.selectedOption,
                  ]}
                >
                  <Text style={styles.optionText}> {item} </Text>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
              
              contentContainerStyle={{ flexDirection: 'row', gap: 10 }}
            />
          </View>
        </View>
      );
    };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 4,
  },
  label: {
    color: 'white',
    marginTop: 15,
    fontSize: 20,
    
  },
  optionsContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 4,
  },
  optionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
  },
  selectedOption: {
    backgroundColor: 'rgba(355, 055, 255, 0.5)', // Estilo especial para o item selecionado
  },
  optionText: {
    color: 'white',
    
  },
});

export default PaymentOptions;
