import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const products = [
  {
    id: '1',
    name: 'Niny Face Serum 100 ml',
    price: '₹499',
    originalPrice: '₹1000',
    discount: '50% off',
    image: require('../../assets/serum.png'), // replace with your image path
    isBestseller: true,
  },
  {
    id: '2',
    name: 'Niny Face Serum 100 ml',
    price: '₹499',
    originalPrice: '₹1000',
    discount: '50% off',
    image: require('../../assets/serum.png'), // replace with your image path
    isBestseller: false,
  },
  // Add more products as needed
];

export const Shop = () => {
  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      {item.isBestseller && (
        <View style={styles.bestsellerBadge}>
          <Text style={styles.badgeText}>Bestseller</Text>
        </View>
      )}
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
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop your needs.</Text>
        {/* <TouchableOpacity>
          <Icon name="arrow-forward" size={24} color="#000" />
        </TouchableOpacity> */}
      </View>

      {/* Search Bar Section */}
      <View style={styles.searchSection}>
        <Icon name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Need Medicines? Search for it here."
          placeholderTextColor="#888"
        />
      </View>

      {/* Filter Section */}
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

      {/* Category Section */}
      <Text style={styles.sortedText}>
      ✨ Sorted by <Text style={styles.categoryText}>Skincare products</Text> category
      </Text>

      {/* Product List Section */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />

      {/* Explore Collection Button */}
      <TouchableOpacity style={styles.exploreButton}>
        <Text style={styles.exploreText}>Explore Collection</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
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
    backgroundColor: '#f0f0f0',
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
    margin: 10,
   
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
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDiscount: {
    fontSize: 12,
    color: 'green',
    marginBottom: 5,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    alignSelf: 'center',
    borderWidth: 1,
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


