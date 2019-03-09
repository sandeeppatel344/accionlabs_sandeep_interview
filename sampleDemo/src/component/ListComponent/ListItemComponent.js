import {View,Text} from 'react-native'
export const ListItem = (props)=>{
const {id,userId,title,body} = props.currentItem
    return <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start'}}>
             <Text>{id}</Text>
             <Text>{userId}</Text>
             <Text>{title}</Text>
             <Text>{body}</Text>
    </View>
}