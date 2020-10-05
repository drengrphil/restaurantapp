import React, { useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';


const SearchScreen = () => {
    const [searchTerm, setTerm] = useState('');
    const [results, setResults] = useState([]);

    // Help function to make API request
    const searchApi = async () => {
        try{
            const response = await yelp.get('/search', {
                params:{
                    limit: 50,
                    term: searchTerm,
                    location: 'toronto'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
        }
    };

    return <View>
        <SearchBar 
            searchTerm={searchTerm} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmitted={() => searchApi()}
            // onTermSubmitted={() => console.log('term submitted')} 
        />
        <Text>Results Found: {results.length}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default SearchScreen;