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

  btnPrimary: { backgroundColor: '#ff914d', padding: 12, borderRadius: 8, alignItems: 'center', flex: 1, margin: 6 },
  btnSecondary: { backgroundColor: '#555', padding: 12, borderRadius: 8, alignItems: 'center', flex: 1, margin: 6 },
  btnDanger: { backgroundColor: '#d32f2f', padding: 12, borderRadius: 8, alignItems: 'center', flex: 1, margin: 6 },
  btnText: { color: '#fff', fontWeight: '700' },

  smallBtn: { backgroundColor: '#555', padding: 8, borderRadius: 8, margin: 4, minWidth: 70, alignItems: 'center' },
  smallBtnActive: { backgroundColor: '#ff914d' },

  smallAction: { padding: 8, borderRadius: 6, marginTop: 8, width: '40%', alignItems: 'center' },

  addBtn: { backgroundColor: '#4CAF50', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 10 },

  infoText: { color: '#333', textAlign: 'center' },
  infoTextWhite: { color: '#fff', textAlign: 'center' },

  card: { backgroundColor: '#f9f9f9', padding: 10, borderRadius: 8, marginVertical: 6, width: '100%' },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#ff914d' },
  cardSub: { color: '#333', marginTop: 4 },
  cardFooter: { color: '#777', marginTop: 6 },

  row: { flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginVertical: 8 },

  totalText: { fontSize: 18, fontWeight: '700', marginTop: 12 },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    gap: 15,
  },

  actionButton: {
    flex: 1,
    backgroundColor: '#ff914d',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  cancelButton: {
    flex: 1,
    backgroundColor: '#f44336',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});