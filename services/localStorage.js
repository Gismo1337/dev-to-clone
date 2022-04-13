import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('posts', jsonValue)
    } catch (e) {
        // saving error
    }
}


const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('posts')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error(e)
    }
}


const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // clear error
    }

    console.log('Done.')
}

export { storeData, getData, clearAll }