import { Alert } from 'react-native'

import Text from '../../components/Text';
import Button from '../../components/Button';
import View from '../../components/View';
import ScrollView from '../../components/ScrollView';
// import Input from '../../components/Input';
// import Select from '../../components/Select';


import { Users } from '@tamagui/lucide-icons'

export default function Docs() {
  function onPressHandler() {
    // Alert.alert('ATENÇÃO', 'Clicou!');
  }

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 60, paddingHorizontal: 16, gap: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Text color="$white" fontSize={20} marginTop={40}>Solid</Text>
      <View gap={18} flexDirection="row" flexWrap="wrap" justifyContent="center" marginBottom={60}>
        <Button theme="primary" variant="solid" onPress={onPressHandler}>Primary</Button>
        <Button theme="secondary" variant="solid" onPress={onPressHandler}>Secondary</Button>
        <Button theme="tertiary" variant="solid" onPress={onPressHandler}>Tertiary</Button>
        <Button variant="solid" onPress={onPressHandler}>Default</Button>
      </View>
      <Text color="$white" fontSize={20} marginTop={40}>Outline</Text>
      <View gap={18} flexDirection="row" flexWrap="wrap" justifyContent="center">
        <Button theme="primary" variant="outline" onPress={onPressHandler}>Primary</Button>
        <Button theme="secondary" variant="outline" onPress={onPressHandler}>Secondary</Button>
        <Button theme="tertiary" variant="outline" onPress={onPressHandler}>Tertiary</Button>
        <Button variant="outline" onPress={onPressHandler}>Default</Button>
      </View>
      <Text color="$white" fontSize={20} marginTop={40}>Link</Text>
      <View gap={18} flexDirection="row" flexWrap="wrap" justifyContent="center">
        <Button theme="primary" variant="link" onPress={onPressHandler}>Primary</Button>
        <Button theme="secondary" variant="link" onPress={onPressHandler}>Secondary</Button>
        <Button theme="tertiary" variant="link" onPress={onPressHandler}>Tertiary</Button>
        <Button variant="link">Default</Button>
      </View>
      <Text color="$white" fontSize={20} marginTop={40}>Disabled</Text>
      <View gap={18} flexDirection="row" flexWrap="wrap" justifyContent="center">
        <Button theme="primary" variant="solid" onPress={onPressHandler} disabled>Primary</Button>
        <Button theme="primary" variant="outline" onPress={onPressHandler} disabled>Primary</Button>
        <Button theme="primary" variant="link" onPress={onPressHandler} disabled>Primary</Button>
      </View>
      <Text color="$white" fontSize={20} marginTop={40}>Sizes</Text>
      <View gap={18} flexDirection="row" flexWrap="wrap" justifyContent="center">
        <Button theme="primary" variant="solid" size="xs" onPress={onPressHandler}>Primary XS</Button>
        <Button theme="primary" variant="solid" size="sm" onPress={onPressHandler}>Primary SM</Button>
        <Button theme="primary" variant="solid" size="md" onPress={onPressHandler}>Primary MD</Button>
        <Button theme="primary" variant="solid" size="lg" onPress={onPressHandler}>Primary LG</Button>
      </View>
      <Text color="$white" fontSize={20} marginTop={40}>Icon</Text>
      <View gap={18} flexDirection="row" flexWrap="wrap" justifyContent="center">
        <Button theme="primary" variant="solid" onPress={onPressHandler} icon={<Users size={14} />} iconAfter={<Users size={14} />}>Primary</Button>
        <Button theme="primary" variant="outline" onPress={onPressHandler} icon={<Users size={14} />} iconAfter={<Users size={14} />}>Primary</Button>
        <Button theme="primary" variant="link" onPress={onPressHandler} icon={<Users size={14} />} iconAfter={<Users size={14} />}>Primary</Button>
      </View>
    </ScrollView>
  )
}
