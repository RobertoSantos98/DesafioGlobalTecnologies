import { View, Text, Pressable } from 'react-native';
import { Colors } from '../../Utils/Colors';

interface HomeSectionProps {
    title: string;
    label: string;
    action: () => void;
    size: number;
}

export default function HomeSection(props: HomeSectionProps) {
 return (
   <View style={{paddingHorizontal: '5%', marginTop: 20, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
     <Text style={{fontWeight: 'bold', fontSize: props.size}}>{props.title}</Text>
     <Pressable onPress={props.action}>
       <Text style={{color: Colors.Vermelho}}>{props.label}</Text>
     </Pressable>
   </View>
 );
}