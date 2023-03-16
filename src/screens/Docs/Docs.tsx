import { View } from 'react-native'
import Button from '../../components/Button'
// import View from '../../components/View';
// import Input from '../../components/Input';
// import Select from '../../components/Select';

export default function Docs() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 }}>
      <Button>Sign in</Button>
      <Button size={10}>Sign in</Button>
      {/* <Button>Sign in</Button>
      <Button variant="outline">Sign in</Button>
      
      <Button isDisabled>Sign in</Button>
      <Button variant="outline" isDisabled>Sign in</Button>
      
      <Button isLoading isDisabled>Sign in</Button>
      <Button variant="outline" isLoading isDisabled>Sign in</Button> */}
    </View>
  )
}
