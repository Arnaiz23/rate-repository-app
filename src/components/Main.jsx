import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar.js'
import { Routes ,Route } from 'react-router-native'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <AppBar /> */}
      <hola bb>
      <Routes>
        <Route path='/' exact element={<RepositoryList />} />
        <Route path='/signin' exact element={<Signin />} />
        <Route path='/other' exact element={<Text>Other page</Text>} />
      </Routes>
    </View>
  )
}

const Signin = () => {
  return <Text>Working on it</Text>
}

export default Main