import { View, StyleSheet } from 'react-native';
import { Facehash } from 'react-native-facehash';

export default function App() {
  return (
    <View style={styles.container}>
      <Facehash 
        name="John"
        size={100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
