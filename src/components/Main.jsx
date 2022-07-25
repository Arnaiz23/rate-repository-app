import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar'
import { Routes ,Route } from 'react-router-native'
import LogInPage from '../pages/LogIn.js'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' exact element={<RepositoryList />} />
        <Route path='/signin' exact element={<LogInPage />} />
        <Route path='/other' exact element={<Signin />} />
      </Routes>
    </View>
  )
}

const Signin = () => {
  return <Text>Working on it</Text>
}

export default Main