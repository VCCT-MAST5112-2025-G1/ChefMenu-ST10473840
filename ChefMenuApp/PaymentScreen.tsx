import React, { useState, JSX } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { MenuItem } from './App';

type Props = {
  menu: MenuItem[];
  onBack: () => void;
  onLogout: () => void;
};

export default function PaymentScreen({ menu, onBack, onLogout }: Props): JSX.Element {
  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const total = menu.reduce((s, it) => s + (parseFloat(it.price) || 0), 0);

  const recordPayment = () => {
    if (!name || !card) {
      Alert.alert('Enter details', 'Please enter at least cardholder name and card number (demo).');
      return;
    }
    Alert.alert('Payment recorded', `R${total.toFixed(2)} recorded. Thank you.`);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#fff' }]}>
      <Text style={[styles.title, { color: '#ff914d' }]}>Payment Summary</Text>
      <Text style={styles.infoText}>Total items: {menu.length}</Text>

      <FlatList
        data={menu}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.dish}</Text>
            <Text>{item.course} — R{item.price}</Text>
          </View>
        )}
      />

      <Text style={styles.totalText}>Total: R{total.toFixed(2)}</Text>

      <TextInput style={styles.inputLight} placeholder="Cardholder name" value={name} onChangeText={setName} />
      <TextInput style={styles.inputLight} placeholder="Card number" keyboardType="numeric" value={card} onChangeText={setCard} />
      <TextInput style={styles.inputLight} placeholder="Expiry (MM/YY)" value={expiry} onChangeText={setExpiry} />
      <TextInput style={styles.inputLight} placeholder="CVV" keyboardType="numeric" value={cvv} onChangeText={setCvv} />

      <TouchableOpacity style={styles.btnPrimary} onPress={recordPayment}>
        <Text style={styles.btnText}>Pay Now</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSecondary} onPress={onBack}>
        <Text style={styles.btnText}>Back to Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnDanger} onPress={onLogout}>
        <Text style={styles.btnText}>Logout (to Splash)</Text>
      </TouchableOpacity>
    </View>
  );
}
