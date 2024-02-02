import axios from 'axios';


class apiService {
  // Fonction pour récupérer un article par son ID
  getPostById(postId) {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    console.log('ApiService.getPostById', postId);
    return axios.get(`${BASE_URL}/posts/${postId}`);
  }
}

export default new apiService();
