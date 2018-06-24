import {AsyncStorage} from 'react-native';

class StorageInstance {

    private static instance: StorageInstance;

    static getInstance() {
      if (!StorageInstance.instance) {
        StorageInstance.instance = new StorageInstance();
      }
      return StorageInstance.instance;
    }

    async getItem(key: string) {
      try {
        const retrievedItem = await AsyncStorage.getItem(key);
        console.log(retrievedItem);
        if (retrievedItem !== null) {
          return retrievedItem;
        }
      } catch (error) {
        console.warn(error.message);
      }
      return;
    }

    async setItem(key: string, value: string) {
      try {
        await AsyncStorage.setItem(key, value);
      } catch (error) {
        console.warn(error.message);
      }
    }
}

export default StorageInstance;