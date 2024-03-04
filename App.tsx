import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  WalletConnectModal,
  useWalletConnectModal,
} from '@walletconnect/modal-react-native';

const projectId = '2d26395f3ec3dc111330e6395bf6d8bf';

const providerMetadata = {
	name: 'YOUR_PROJECT_NAME',
	description: 'YOUR_PROJECT_DESCRIPTION',
	url: 'https://your-project-website.com/',
	icons: ['https://your-project-logo.com/'],
	redirect: {
		native: 'YOUR_APP_SCHEME://',
		universal: 'YOUR_APP_UNIVERSAL_LINK.com',
	},
};



export default function App() {
  const {open , isConnected, address, provider} = useWalletConnectModal();

  const handleButtonPress = async () => {
    if(isConnected) {
      return provider?.disconnect()
    }

    return open();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Wallet Connect</Text>
      <Text>{isConnected ? address : 'no wallet connected'}</Text>
      <Pressable style={styles.button} onPress={handleButtonPress}>
      <Text>{isConnected ? 'Disconnec' : 'Connect'}</Text>  
      </Pressable>
      <WalletConnectModal
        explorerRecommendedWalletIds={['c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96']}
        explorerExcludedWalletIds='ALL'
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16
  },
  button: {
    marginTop: 16
  }
});
