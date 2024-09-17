import {React,useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Tiki = () => {
  const [number, setNumber] = useState(1);

  return (
      <View style={styles.header}>
        {/* Sản phẩm */}
        <View style={{ flex: 1.7 }}>  
          {/* Ảnh sản phẩm - tên sản phẩm */}
          <View style={styles.inforItem}>
            {/* Ảnh sản phẩm */}
            <View style={styles.viewImage}>
              <Image source={require('./assets/sach.jpg')} style={styles.imageItem} />
            </View>

            {/* Thông tin sản phẩm */}
            <View style={styles.infor}>
              <Text style={styles.textInfor}>
                Nguyen ham tich phan va ung dung
              </Text>
              <Text
                style={[
                  styles.textInfor,
                  {
                    marginTop: 15,
                  },
                ]}>
                Cung cap boi Tiki Trading
              </Text>
              <Text style={styles.price}>141.800 d</Text>
              <Text style={styles.priceMain}>141.800 d</Text>
              <View
                style={{              
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width:'70%',
                    gap: 8,
                  }}>


                  <View
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: '#C4C4C4',
                    }}>
                    <TouchableOpacity onPress = {() => {setNumber(number == 1 ? 1 : number - 1)}}>
                      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        -
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text> {number} </Text>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: '#C4C4C4',
                    }}>
                    <TouchableOpacity onPress = {() => {setNumber(number + 1)}}>
                      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={{ color: '#134FEC', fontWeight: 700 }}>
                  Mua sau
                </Text>
              </View>
            </View>
          </View>

          {/* Mã giảm giá */}
          <View style = {{flex:1,flexDirection:'column'}}>

             {/* Mã giảm giá đã lưu */}
               <View style = {{flex:1, paddingLeft:10,flexDirection:'row',alignItems: 'center' }}>
                <Text style={{fontFamily:'Roboto', fontSize: 12, fontWeight: 'bold'}}>Mã giảm giá đã lưu</Text>
                <Text style={{fontFamily:'Roboto', fontSize: 12, fontWeight: 'bold', color: '#134FEC', marginLeft: 20 }}>Xem tại đây</Text>
              </View>

            {/* Mã giảm giá */}
            <View style= {styles.maGiamGia}>
              {/* Input giảm giá */}
              <View style= {styles.textGiamGia}>
                <View style= {{width:32, height:16, backgroundColor:'#F2DD1B'}}></View>
                <TextInput style = {styles.input} placeholder='Mã giảm giá' />
              </View>

              {/* Button giảm giá */}
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Áp dụng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* View Price */}
        <View style={{flex:2, backgroundColor:'#C4C4C4'}}>

          {/* Site Gift */}
          <View style={styles.siteGitf}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black', marginRight:5 }}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'blue' }}>Nhấn vào đây?</Text>
          </View>

          {/* Site temporary price */}
          <View style={styles.siteTamTinh}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#011627', marginRight:5 }}>Tạm tính</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#EE0D0D' }}>{(number*141.800).toFixed(3)}đ</Text>
          </View>

          <View style={{ flex: 1.5, backgroundColor: '#C4C4C4' }}></View>

          {/* Site Thanh Toán */}
          <View style={{ flexDirection: 'column', flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#808080' }}>Thành Tiền</Text>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#EE0D0D' }}>{(number*141.800).toFixed(3)}đ</Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'center' ,alignItems: 'center' }}>
            <TouchableOpacity style={styles.buttonThanhToan}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>TIẾN HÀNH ĐẶT HÀNG</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
 


      </View>
     
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'white',
  },
  inforItem: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'row',
  },
  viewImage: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageItem: {
    width: 115,
    height: 150,
  },
  infor: {
    width: '60%',
    paddingLeft: 15,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textInfor: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 14.06,
  },
  price: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    color: 'red',
  },
  priceMain: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
    textDecorationLine: 'line-through',
    color: '#808080',
  },

  maGiamGia: {
  flex: 1.2, 
   flexDirection: 'row',
   alignItems: 'center', 
   justifyContent: 'space-around'
  },
  textGiamGia: {
    flexDirection: 'row',
    alignItems:'center',
    width: "60%", 
    borderColor: 'black', 
    borderWidth:1,
    paddingLeft: 10
  },
  input : {
    marginLeft:10,
    width:'100%',
    height:40,
    fontWeight:'bold',
    fontSize: 18
  },
  button :{ 
    width: "30%", 
    height: 40, 
    backgroundColor: "#0A5EB7", 
    alignItems: 'center', 
    justifyContent: "center", 
 },
 buttonText: { 
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold'
 },
 siteGitf: {
    backgroundColor:'white', 
    height:50, 
    marginVertical:15, 
    flexDirection:'row', 
    justifyContent:'center', 
    alignItems:'center'
  },
  siteTamTinh :{
    backgroundColor:'white', 
    height:50, 
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center',
    paddingHorizontal:10
  },
  buttonThanhToan:{
    height: 45, 
    width: "93%", 
    alignItems: 'center', 
    justifyContent: "center",
    backgroundColor: '#E53935',
    marginBottom:25
  }

});

export default Tiki;
