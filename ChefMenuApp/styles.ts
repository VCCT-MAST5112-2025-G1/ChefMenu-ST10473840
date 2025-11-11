import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  appContainer: { flex: 1 },

  container: { flex: 1, padding: 18, alignItems: 'center' },
  containerCentered: { flex: 1, alignItems: 'center', justifyContent: 'center' },

  splashText: { fontSize: 30, color: '#fff', fontWeight: '700' },

  title: { fontSize: 22, color: '#333', fontWeight: '700', marginBottom: 10 },
  titleWhite: { fontSize: 22, color: '#fff', fontWeight: '700', marginBottom: 10 },

  inputDark: {
    width: '100%',
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
  },
  inputLight: {
    width: '100%',
    backgroundColor: '#eee',
    color: '#333',
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
  },
  btnPrimary: {
    backgroundColor: '#ff914d',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    width: '100%',
    alignItems: 'center',
  },
  btnSecondary: {
    backgroundColor: '#777',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    width: '100%',
    alignItems: 'center',
  },
  btnDanger: {
    backgroundColor: '#ff4d4d',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    width: '100%',
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: '600' },
  smallBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },
  smallBtnActive: {
    backgroundColor: '#ff914d',
  },
  row: { flexDirection: 'row', marginVertical: 8 },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
totalText: { fontSize: 20, fontWeight: '700', marginVertical: 10, color: '#ff914d' },
cardFooter: {
  fontSize: 14,
  color: '#bbb',
  marginTop: 4,
},
  cardTitle: { fontSize: 18, fontWeight: '700', marginBottom: 4 },
  infoText: { fontSize: 16, color: '#333' },
  infoTextWhite: { fontSize: 16, color: '#fff' },
});