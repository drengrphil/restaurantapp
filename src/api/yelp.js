import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearerr1KB-HdKVEEq_cuYqnlqukNFWFh3tVH7fdHFga48fRjfEqic_tIRfQh3DlNXJ08JFC60mtFcUbhxgSR1MYCbk8y3pXc8m_NBVrMLllfhlfXIMCQ8Bcb1hQAxd3R5X3Yx'
    }
});