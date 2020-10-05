import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; // icons usage

const SearchBar = ({ searchTerm, onTermChange, onTermSubmitted }) => {
    return <View style={styles.searchTextBackground}>
        <Feather name="search" style={styles.searchIconStyle} />
        <TextInput 
            placeholder="Search"
            style={styles.searchInputStyle}
            value={searchTerm}
            // onChangeText={newTerm => onTermChange(newTerm)}
            onChangeText={onTermChange}
            autoCapitalize="none"
            autoCorrect={false}
            // Start search operation
            // onEndEditing={() => console.log('submitted')}
            onEndEditing={onTermSubmitted}
        />
    </View>
};

const styles = StyleSheet.create({
    searchTextBackground: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
    },
    searchInputStyle: {
        flex: 1,
        fontSize: 18
    },
    searchIconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;