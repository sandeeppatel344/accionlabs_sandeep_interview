import react, { Component } from 'react';
import { FlatList, Text, View, ScrollView } from 'react-native'
import { ListItem } from './ListItemComponent'
import {connect} from 'react-redux'
 class ListComponent extends Component {

    constructor() {
        super()
    }




    renderListItem = (item) => {
        <ListItem currentItem={item} />
    }
    render() {
        return <ScrollView>
            <View>
                <FlatList 
                extraData={this.props.List}
                renderItem={this.renderListItem()}/>                
            </View>
        </ScrollView>
            }
}

const mapStateToProps = ({List})=>{
    return {List} = List
}

export default connect(mapStateToProps,null)(ListComponent)