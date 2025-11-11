import React from 'react'; import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'; import type { JSX } from 'react';
import styles from './styles'; import { MenuItem } from './App';

type Props = {
  menu: MenuItem[];
  filter: 'All' | 'Starter' | 'Main' | 'Dessert';
  setFilter: (f: 'All' | 'Starter' | 'Main' | 'Dessert') => void;
  goToAdd: () => void;
  goToFilter: () => void;
  goToPayment: () => void;
  onClear: () => void;
  onRemove: (index: number) => void;
};

const calcAvg = (items: MenuItem[], course: 'Starter' | 'Main' | 'Dessert') => {
  const list = items.filter((i) => i.course === course);
  if (list.length === 0) return '0.00';
  const sum = list.reduce((s, it) => s + (parseFloat(it.price) || 0), 0);
  return (sum / list.length).toFixed(2);
};

export default function HomeScreen({
  menu,
  filter,
  setFilter,
  goToAdd,
  goToFilter,
  goToPayment,
  onClear,
  onRemove,
}: Props): JSX.Element {
  const filtered = filter === 'All' ? menu : menu.filter((m) => m.course === filter);
  const total = menu.reduce((s, it) => s + (parseFloat(it.price) || 0), 0);

  return (
    <View style={[styles.container, { backgroundColor: '#333' }]}>
      <Text style={styles.titleWhite}>Welcome Chef</Text>

      <View style={{ width: '100%', marginVertical: 8 }}>
        <Text style={styles.infoTextWhite}>Total dishes: {menu.length}</Text>
        <Text style={styles.infoTextWhite}>Avg Starter: R{calcAvg(menu, 'Starter')}</Text>
        <Text style={styles.infoTextWhite}>Avg Main: R{calcAvg(menu, 'Main')}</Text>
        <Text style={styles.infoTextWhite}>Avg Dessert: R{calcAvg(menu, 'Dessert')}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.btnPrimary]} onPress={goToAdd}>
          <Text style={styles.btnText}>Add Menu Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnSecondary]} onPress={goToFilter}>
          <Text style={styles.btnText}>Filter Menu</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {(['All', 'Starter', 'Main', 'Dessert'] as const).map((c) => (
          <TouchableOpacity
            key={c}
            style={[styles.smallBtn, filter === c && styles.smallBtnActive]}
            onPress={() => setFilter(c)}
          >
            <Text style={styles.btnText}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        style={{ width: '100%', marginTop: 10 }}
        data={filtered}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.dish}</Text>
            <Text style={styles.card}>{item.desc}</Text>
            <Text style={styles.cardFooter}>{item.course} — R{item.price}</Text>

            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.smallBtn, { backgroundColor: '#f44336' }]}
                onPress={() =>
                  Alert.alert('Remove item', `Remove "${item.dish}"?`, [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Remove', style: 'destructive', onPress: () => onRemove(index) },
                  ])
                }
              >
                <Text style={styles.btnText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Text style={styles.totalText}>Total: R{total.toFixed(2)}</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btnPrimary} onPress={goToPayment}>
          <Text style={styles.btnText}>Proceed to Payment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnDanger}
          onPress={() =>
            Alert.alert('Clear menu', 'Remove all items?', [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Clear', style: 'destructive', onPress: onClear },
            ])
          }
        >
          <Text style={styles.btnText}>Clear Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
