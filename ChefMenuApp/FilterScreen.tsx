import React, { useState, JSX } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { MenuItem } from './App';

type Props = {
  menu: MenuItem[];
  onClose: () => void;
};

export default function FilterScreen({ menu, onClose }: Props): JSX.Element {
  const [selected, setSelected] = useState<'Starter' | 'Main' | 'Dessert'>('Starter');
  const filtered = menu.filter((m) => m.course === selected);

  return (
    <View style={[styles.container, { backgroundColor: '#333' }]}>
      <Text style={styles.titleWhite}>Filter Menu</Text>

      <View style={styles.row}>
        {(['Starter', 'Main', 'Dessert'] as const).map((c) => (
          <TouchableOpacity key={c} style={[styles.smallBtn, selected === c && styles.smallBtnActive]} onPress={() => setSelected(c)}>
            <Text style={styles.btnText}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.dish}</Text>
            <Text style={styles.cardSub}>{item.desc}</Text>
            <Text style={styles.cardFooter}>{item.course} — R{item.price}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.btnSecondary} onPress={onClose}>
        <Text style={styles.btnText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
