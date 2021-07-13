import axios from 'axios'

export default {
  async loadRepositories (query = '') {
    const { data } = await axios.get('https://api.github.com/users/notflip/repos?per_page=20')

    // Map the github api data to more readable names and only the data we need
    return data.map(item => ({
      id: item.id,
      name: item.name,
      full_name: item.full_name
    }))
  },

  async loadCommits (repositoryId) {
    const { data } = await axios.get('https://api.github.com/repos/notflip/' + repositoryId + '/commits')

    // Map the github api data to more readable names and only the data we need
    return data.map(item => ({
      author: item.commit.author.name,
      message: item.commit.message
    }))
  }
}
