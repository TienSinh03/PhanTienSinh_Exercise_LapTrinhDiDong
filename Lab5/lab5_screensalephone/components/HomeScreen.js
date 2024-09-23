import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Button } from 'react-native';
import { Rating } from 'react-native-elements';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flex:3, justifyContent:'center', alignItems:'center'}}>
          <Image source={require("../assets/phone-xanh1.jpg")} style = {{resizeMode:'cover'}}/>
        </View>
        
        {/* The product information */} 
        <View style={{flex:2, paddingHorizontal:25}}>

          {/* Name product */} 
          <Text style={{fontFamily: 'Roboto',fontSize: 15,fontWeight: 400,lineHeight: 17.58,}}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>

          {/* Rating */}   
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:10}}>
            <Rating 
              imageSize={20} /**Set size image */
              readonly /**Turn off interaction of rating */
              startingValue={5}  /**Set number rating */
            />
            <Text style={{fontFamily: 'Roboto',fontSize: 15,fontWeight: 400,lineHeight: 17.58}}>(Xem 828 đánh giá)</Text>
          </View>

          {/* Price Product */} 
          <View style={{flexDirection:'row', alignItems:'center', marginVertical:10,justifyContent:'space-between'}}>
            <Text style={{fontFamily: 'Roboto',fontSize: 18,fontWeight: 'bold',lineHeight: 21.09}}>1.790.000 đ</Text>
            <Text style={{fontFamily: 'Roboto',fontSize: 15,fontWeight: 'bold',lineHeight: 17.58, color:'#b5b5b5', textDecorationLine:'line-through'}}>1.790.000 đ</Text>
          </View>

          {/* Title 'Ở đâu re hơn hoàn tiền' */} 
          <View style={{flexDirection:'row', alignItems:'center', marginVertical:10}}>
            <Text style={{fontFamily: 'Roboto',fontSize: 12,fontWeight: 'bold',lineHeight: 14.06, color:'#FA0000'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image source={require("../assets/icon_chamhoi.jpg")} style = {{resizeMode:'contain', width:20, height:20, marginLeft:15}}/>
          </View>

          {/* Button chọn màu */} 
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginVertical:10, borderWidth:1, height:34, borderRadius:10}}>
              <Text style = {{fontFamily: 'Roboto',fontSize: 15,fontWeight: 400,lineHeight: 17.58}}>4 MÀU-CHỌN MÀU</Text>
              <Text style = {{fontFamily: 'Roboto',fontSize: 25,fontWeight: 400,lineHeight: 17.58, position: 'absolute', right: 15}}>></Text>
            </TouchableOpacity>
            
            {/* Button chọn mua */} 
        <View style= {{flex:2, width:'100%', justifyContent: 'flex-end', marginBottom:35}}> 
          <TouchableOpacity style ={{backgroundColor:'#CA1536',height: '40%', borderRadius:10,justifyContent: 'center', alignItems: 'center'}}> 
            <Text style = {{fontFamily: 'Roboto',fontSize: 20,fontWeight: 'bold',lineHeight: 23.44, color:'white'}}>CHỌN MÀU</Text>
          </TouchableOpacity>
        </View>
        </View>

        
         
       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    marginTop:40
  },
  
});
