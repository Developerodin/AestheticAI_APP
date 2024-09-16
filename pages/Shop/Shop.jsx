import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput ,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    image: require('../../assets/serum4.png'), // replace with your image path
    isBestseller: false,
  },
  
];

export const Shop = () => {
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
    
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop your needs.</Text>
        {/* <TouchableOpacity>
          <Icon name="arrow-forward" size={24} color="#000" />
        </TouchableOpacity> */}
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
      {/* <TouchableOpacity style={styles.exploreButton}>
        <Text style={styles.exploreText}>Explore Collection</Text>
      </TouchableOpacity> */}
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
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
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
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  exploreText: {
    color: '#fff',
    fontSize: 16,
  },
});


