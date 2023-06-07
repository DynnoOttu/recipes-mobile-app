import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';


const ImageGalleryComponent = (props) => {

  const { setImageGallery } = props

  const openGallery = () => {

    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const data = response.assets[0]
        setImageGallery(data)
        console.log(data)
      }

    });
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableHighlight style={styles.button} onPress={openGallery}>
        <Text style={styles.text}>Select Image</Text>
      </TouchableHighlight>

    </View>
  )



}


export default ImageGalleryComponent

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingLeft: 20,
    backgroundColor: '#F5F5F5',
    elevation: 5,
    width: '100%'
  },
  text: {
    fontSize: 14,
    paddingVertical: 15,
    color: 'black'
  }
});