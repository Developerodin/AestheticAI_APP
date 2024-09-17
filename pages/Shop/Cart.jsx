import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

export const Cart = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    console.log('Back Pressed');
    navigation.goBack();
    }

  const products = [
    {
      id: 1,
      name: 'Niny Face Serum 100 ml',
      oldPrice: '₹1000',
      discount: '50% off',
      newPrice: '₹499',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Niny Face Serum 100 ml',
      oldPrice: '₹1000',
      discount: '50% off',
      newPrice: '₹499',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      name: 'Niny Face Serum 100 ml',
      oldPrice: '₹1000',
      discount: '50% off',
      newPrice: '₹499',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 4,
      name: 'Niny Face Serum 100 ml',
      oldPrice: '₹1000',
      discount: '50% off',
      newPrice: '₹499',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
        
        <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}  onPress={handleBack} activeOpacity={0.8}>
          <Icon name="keyboard-arrow-left" size={30} color="#000" />
        </TouchableOpacity>
        </View>
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>My Cart</Text>

      {/* Festive Offer Section */}
      <View style={styles.offerContainer}>
        <Icon name="percent" size={24} color="#fff" style={styles.offerIcon} />
        <Text style={styles.offerText}>
          ₹1000 saved! <Text style={styles.subOfferText}>with Festive offer</Text>
        </Text>
      </View>

      {/* Cart Items */}
      <View style={styles.cartItem}>
        <View style={styles.cartItemDetails}>
          <Text style={styles.productTitle}>Niny Face Serum</Text>
          <Text style={styles.productSubtitle}>Sulphate free</Text>
          <Text style={styles.productDetails}>100 ml</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productControls}>
          <TouchableOpacity style={styles.quantityControl}>
            <Icon name="remove" size={16} color="#32a852" />
          </TouchableOpacity>
          <Text style={styles.quantity}>1</Text>
          <TouchableOpacity style={styles.quantityControl}>
            <Icon name="add" size={16} color="#32a852" />
          </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center'}}>
          <Text style={styles.price}>₹499</Text>
          </View>
      </View>

      {/* Divider */}
      <View style={styles.divider}></View>

      {/* Cart Item 2 */}
      <View style={styles.cartItem}>
        <View style={styles.cartItemDetails}>
          <Text style={styles.productTitle}>Niny Facemask</Text>
          <Text style={styles.productSubtitle}>Sulphate free</Text>
          <Text style={styles.productDetails}>2 Pack</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productControls}>
          <TouchableOpacity style={styles.quantityControl}>
            <Icon name="remove" size={16} color="#32a852" />
          </TouchableOpacity>
          <Text style={styles.quantity}>1</Text>
          <TouchableOpacity style={styles.quantityControl}>
            <Icon name="add" size={16} color="#32a852" />
          </TouchableOpacity>
          
        </View>
        <View style={{justifyContent:'center'}}>
          <Text style={styles.price}>₹499</Text>
          </View>
      </View>

      {/* Divider */}
      <View style={styles.divider}></View>

      {/* Add More Items */}
      <View style={styles.addMoreContainer}>
        
        <Text style={styles.addMoreText}>Add more items</Text>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={24} color="#000" />
        </TouchableOpacity>
      </View>

        
      <Text style={styles.sectionHeader}>Did you forget?</Text>
      {/* <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={styles.scrollView}
>
  {products.map((product) => (
    <View key={product.id} style={{
      
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        
        position: 'relative',}}>
      <Image source={{ uri: product.image }} style={{ width: 98,
            height: 91,
            borderRadius: 20,
            position: 'absolute',
            top: 15,
            left: 5,}} />
      <View style={{marginLeft: 100}}>
      <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.oldPrice}>{product.oldPrice}</Text>
        <Text style={styles.discount}>{product.discount}</Text>
      <Text style={styles.newPrice}>{product.newPrice}</Text>
      <TouchableOpacity style={{   width: 36,
                height: 36,
                borderRadius: 18,
                borderWidth: 1,
                borderColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',}}>
        <Icon name="add" size={18} color="#000" />
      </TouchableOpacity>
      </View>
      
    </View>
  ))}
</ScrollView> */}
     <Image source={require('../../assets/cartBanner.png')}  />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 20,
        marginTop: 20,
    },
    backButton: {
        padding: 5,
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 1,
    },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    marginLeft: 15,
  },
  offerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d1f2eb',
    borderRadius: 18,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
  },
  offerIcon: {
    marginRight: 10,
  },
  offerText: {
    fontSize: 16,
    color: '#18BC9C',
    fontWeight: 'bold',
  },
  subOfferText: {
    fontSize: 14,
    color: '#18BC9C',
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  cartItemDetails: {
    marginBottom: 10,
    marginLeft: 15,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  productSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  productDetails: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  editText: {
    fontSize: 14,
    color: '#007bff',
    
  },
  productControls: {
    flexDirection: 'row',
    alignItems: 'center',
    
    
  },
  quantityControl: {
    
    
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 'auto',
    color: '#000',
  },
  divider: {
    borderBottomWidth: 2,
    
    borderBottomColor: '#e0e0e0',
    marginVertical: 10,
    borderStyle: 'dashed',
    marginHorizontal: 10,
  },
  addMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 50,
    padding: 5,
  },
  addMoreText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 20,
    color: '#000',
  },
  scrollView: {
    paddingVertical: 10,
  },
  card: {
    width: 150,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  oldPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  discount: {
    fontSize: 12,
    color: 'green',
  },
  newPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
    marginBottom: 10,
  },
  addCardButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 50,
    padding: 5,
    alignSelf: 'flex-end',
  },
});


