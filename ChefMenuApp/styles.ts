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