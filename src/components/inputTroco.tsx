import React, { useState } from 'react';
import { View, Text, TextInput, Modal, Button } from 'react-native';
import { CategoryButton } from './category-button';
import useTrocoStore from '@/stores/trocoStore';


const InputTroco:  React.FC= () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { inputValue, setInputValue } = useTrocoStore();
  

  const handleOpenModal = () => {
    
    setModalVisible(true);
    
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSave = () => {
    // Faça algo com o valor inserido, como exibir um alerta
    alert(`Valor inserido: ${inputValue}`); 
    setModalVisible(false);

    return inputValue;
  };

  return (
    <View>

      <CategoryButton
      onPress={handleOpenModal} 
      title={"Troco?"}
      isSelected={true}
      style={{marginTop: 30}}
      
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 15  }}>
          <View style={{ width: 300, padding: 20, backgroundColor: 'white' }}>
            <Text >Troco para:</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="R$0,00 |"
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
              style={{marginTop: 15  }}
              
            />
            
            <CategoryButton style={{marginTop: 30 }}title="Salvar" onPress={handleSave} />
            
            <CategoryButton style={{marginTop: 15  }} title="Cancelar" onPress={handleCloseModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InputTroco;


