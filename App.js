import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, FlatList,Dimensions } from 'react-native';
import CarItem from './src/components/CarItem/CarItem';
import carData from "./CarData"
import img from "./assets/images/ModelX.jpeg"
import Header from './src/components/Header/Header';
export default function App() {
  // console.warn(carData.length)
  return (
    <View style={styles.container}>
      <Header />

      <FlatList
      style={styles?.map}  
      
      data={carData}
      snapToAlignment="start"
      snapToInterval={Dimensions.get("window").height}
      decelerationRate={"fast"}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=> {

        return<CarItem name={item?.name} tagline= {item?.tagline} image={item?.image} />}}
      />

   
      {/* --> Whenever we want to send something like img path from parent to child through props, then first get it in parent completely through require , path wrt to parent, then directly put in src field of the img tag inside the child component. */}
      {/* <CarItem /> */}
      {/* <CarItem /> */}



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center"
    // justifyContent: 'flex-start',
    // overflow:"scroll",
    // height:"100%"

  },
  map:{
    width:"100%"
  }

});
