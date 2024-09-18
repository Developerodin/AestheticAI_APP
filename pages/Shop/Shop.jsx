import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput ,ScrollView , Dimensions ,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width, height } = Dimensions.get('window');
import { useNavigation } from "@react-navigation/native";

const products = [
  {
    id: '1',
    name: 'Niny Face Serum 100 ml',
    price: '₹499',
    originalPrice: '₹1000',
    discount: '50% off',
    image: require('../../assets/serum.png'), 
    isBestseller: true,
  },
  {
    id: '2',
    name: 'Niny Face Serum 100 ml',
    price: '₹499',
    originalPrice: '₹1000',
    discount: '50% off',
    image: require('../../assets/serum.png'), 
    isBestseller: false,
  },
  {
    id: '3',
    name: 'Niny Face Serum 100 ml',
    price: '₹499',
    originalPrice: '₹1000',
    discount: '50% off',
    image: require('../../assets/serum1.png'), 
    isBestseller: false,
  },
  {
    id: '4',
    name: 'Niny Face Serum 100 ml',
    price: '₹499',
    originalPrice: '₹1000',
    discount: '50% off',
    image: require('../../assets/serum2.png'), 
    isBestseller: false,
  },
  {
    id: '5',
    name: 'Niny Face Serum 100 ml',
    price: '₹499',
    originalPrice: '₹1000',
    discount: '50% off',
    image: require('../../assets/serum3.png'), 
    isBestseller: false,
  },
  {
    id: '6',
    name: 'Niny Face Serum 100 ml',
    price: '₹499',
    originalPrice: '₹1000',
    discount: '50% off',
    image: require('../../assets/serum4.png'), 
    isBestseller: false,
  },
  
];

export const Shop = () => {
  const navigation = useNavigation();


  const handleCart = () => {
    navigation.navigate('Cart');
  };


  const handleMarketplace = () => {
    navigation.navigate('Marketplace');
  };

  const handlePrescriptions = () => {
    navigation.navigate('Prescriptions');
  };
  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
   
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDiscount}>
        <Text style={styles.originalPrice}>{item.originalPrice}</Text> {item.discount}
      </Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Icon name="add" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{ position: 'relative' }}>
          <ImageBackground
            source={require('../../assets/shopBanner.png')}
            style={{ width: '100%',height: height * 0.7 }} 
          >
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: height * 0.05,
                right: width * 0.05,
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 20,
                
              }}
              onPress={handleCart}
            >
              <Icon name="shopping-bag" size={24} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: height * 0.12, 
                left: width * 0.17, 
                borderRadius: 30,
                borderWidth: 0.5,
                borderColor: '#fff',
                paddingHorizontal: 80,
                paddingVertical: 20,
              }}
              onPress={handlePrescriptions}
            >
              <Text style={{ color: '#fff' }}>View Prescriptions</Text>
            </TouchableOpacity>
            
          </ImageBackground>
          <View
      style={{
        marginTop: -80,
        
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 40,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 ,color:'#000'}}>
        Your #goto<Text style={{ color: '#1AA7EC' }}>order</Text>
      </Text>
      <Text style={{ fontSize: 14, color: '#000' }}>
        We are getting to know your <Text style={{ color: '#1AA7EC' }}>Order!</Text>
      </Text>

      <View
        style={{
          marginVertical: 15,
      
          backgroundColor: '#fff',
          borderRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 15,
          
          position: 'relative',
        }}
      >
        <Image
          source={require('../../assets/product.png')} 
          style={{
            width: 133,
            height: 133,
            borderRadius: 20,
            position: 'absolute',
            top: 15,
            left: 5,
          }}
        />

        <View style={{ marginLeft: 140 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' ,color:'#000' }}>Niny Sunscreen 50</Text>
          <Text style={{ fontSize: 14 ,color:'#000',fontWeight: 'bold'}}>100 ml</Text>
          <Text style={{ fontSize: 14, color: '#1AA7EC' }}>20% off on this purchase*</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: '#000',
                borderRadius: 30,
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginRight: 10,
              }}
            >
              <Text style={{ color: '#fff' }}>Buy Now</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                borderWidth: 1,
                borderColor: '#000',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon name="add" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Pagination Section */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          width: '100%',
        }}
      >
        <TouchableOpacity>
          <Icon name="chevron-left" size={32} color="#000" />
        </TouchableOpacity>

        <Text style={{ fontSize: 16 }}>1/2</Text>

        <TouchableOpacity>
          <Icon name="chevron-right" size={32} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
        </View>
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop your needs.</Text>
         <TouchableOpacity style={{backgroundColor:'#fff',borderRadius: 30,borderWidth:1,padding:8}} onPress={handleMarketplace}>
          <Icon name="arrow-forward" size={24} color="#000" />
        </TouchableOpacity> 
      </View>

      
      <View style={styles.searchSection}>
        <Icon name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Need Medicines? Search for it here."
          placeholderTextColor="#888"
        />
      </View>

      
      <View style={styles.filterSection}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Sort by</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Essentials</Text>
        </TouchableOpacity>
      </View>

     
      <Text style={styles.sortedText}>
      ✨ Sorted by <Text style={styles.categoryText}>Skincare products</Text> category
      </Text>

     
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />

      {/* Explore Collection Button */}
      <TouchableOpacity style={styles.exploreButton}>
        <Text style={styles.exploreText}>Explore Collection</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingBottom: 150,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 26,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  filterSection: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7',
    borderRadius: 20,
  },
  filterText: {
    fontSize: 14,
    color: '#000',
  },
  sortedText: {
    fontSize: 16,
    marginBottom: 10,
  },
  categoryText: {
    color: '#00bcd4',
    fontWeight: 'bold',
  },
  productList: {
    justifyContent: 'space-between',
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    position: 'relative',
   
  },
  bestsellerBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#00bcd4',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  productImage: {
    width: 108,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  productDiscount: {
    fontSize: 12,
    color: '#119ab9',
    marginBottom: 5,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  addButton: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 14,
    alignSelf: 'center',
    borderWidth: 1,
    position: 'absolute',
    bottom: 10,
    right: 15,

  },
  exploreButton: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius:45 ,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
  },
  exploreText: {
    color: '#000',
    fontSize: 16,
  },
});


