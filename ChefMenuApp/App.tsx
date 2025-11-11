import React, { useState } from 'react';
import { View } from 'react-native'; import SplashScreen from './SplashScreen'; import HomeScreen from './HomeScreen'; import AddMenuScreen from './AddMenuScreen';
import FilterScreen from './FilterScreen'; import PaymentScreen from './PaymentScreen';

import styles from './styles';
import menuData from './menuData';

export type ScreenName = 'splash' | 'home' | 'add' | 'filter' | 'payment';

export interface MenuItem {
  dish: string;
  desc: string;
  price: string;
  course: 'Starter' | 'Main' | 'Dessert';
}

export default function App(): React.ReactElement {
  const [screen, setScreen] = useState<ScreenName>('splash');
  const [menu, setMenu] = useState<MenuItem[]>(menuData);
  const [filter, setFilter] = useState<'All' | 'Starter' | 'Main' | 'Dessert'>('All');

  const addMenuItem = (item: MenuItem) => {
    setMenu((prev) => [...prev, item]);
  };

  const removeMenuItem = (index: number) => {
    setMenu((prev) => prev.filter((_, i) => i !== index));
  };

  const clearMenu = () => setMenu([]);

  const logoutToSplash = () => setScreen('splash');

  return (
    <View style={styles.appContainer}>
      {screen === 'splash' && <SplashScreen onFinish={() => setScreen('home')} />}

      {screen === 'home' && (
        <HomeScreen
          menu={menu}
          filter={filter}
          setFilter={setFilter}
          goToAdd={() => setScreen('add')}
          goToFilter={() => setScreen('filter')}
          goToPayment={() => setScreen('payment')}
          onClear={clearMenu}
          onRemove={removeMenuItem}
        />
      )}

      {screen === 'add' && (
        <AddMenuScreen
          onAdd={(item) => {
            addMenuItem(item);
            setScreen('home');
          }}
          onCancel={() => setScreen('home')}
        />
      )}

      {screen === 'filter' && <FilterScreen menu={menu} onClose={() => setScreen('home')} />}

      {screen === 'payment' && (
        <PaymentScreen menu={menu} onBack={() => setScreen('home')} onLogout={logoutToSplash} />
      )}
    </View>
  );
}

