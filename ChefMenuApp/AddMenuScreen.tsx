import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { MenuItem } from './App';

type Props = {
  onAdd: (item: MenuItem) => void;
  onCancel: () => void;
};

export default function AddMenuScreen({ onAdd, onCancel }: Props): React.ReactElement {
  const [dish, setDish] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState<MenuItem['course']>('Starter');

  const submit = () => {
    if (!dish || !desc || !price) {
      Alert.alert('Missing fields', 'Please complete all fields before adding.');
      return;
    }
    onAdd({ dish, desc, price, course });
  };

  return (
    <View style={[styles.container, { backgroundColor: '#333' }]}>
      <Text style={styles.titleWhite}>Add Menu Item</Text>

      <TextInput style={styles.inputDark} placeholder="Dish name" placeholderTextColor="#aaa" value={dish} onChangeText={setDish} />
      <TextInput style={styles.inputDark} placeholder="Description" placeholderTextColor="#aaa" value={desc} onChangeText={setDesc} />
      <TextInput style={styles.inputDark} placeholder="Price (number)" placeholderTextColor="#aaa" keyboardType="numeric" value={price} onChangeText={setPrice} />

      <View style={styles.row}>
        {(['Starter', 'Main', 'Dessert'] as const).map((c) => (
          <TouchableOpacity key={c} style={[styles.smallBtn, course === c && styles.smallBtnActive]} onPress={() => setCourse(c)}>
            <Text style={styles.btnText}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.btnPrimary} onPress={submit}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSecondary} onPress={onCancel}>
        <Text style={styles.btnText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}