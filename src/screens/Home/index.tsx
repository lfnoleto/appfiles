import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as FileSystem from 'expo-file-system';

const App = () => {
  useEffect(() => {
    const createFolder = async () => {
      const directoryUri = FileSystem.documentDirectory + 'my-new-folder/';
      
      try {
        // Create a new directory
        await FileSystem.makeDirectoryAsync(directoryUri, { intermediates: true });
        console.log('Directory created successfully!');
      } catch (error) {
        console.error('Error creating directory:', error);
      }
    };

    createFolder();
  }, []);

  return (
    <View>
      <Text>Creating a local folder with Expo File System</Text>
    </View>
  );
};

export default App;