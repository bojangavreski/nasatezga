import React from 'react'
import { List , Checkbox , Label} from 'semantic-ui-react'

const CATEGORIES = ["Ovoshje","Zelenchuk","Zhito","Meshunkasti","Jatkasti","Pcelarski","Domashni"];
const translateCat = cat => {
    switch(cat){
        case "Zelenchuk" : return "Зеленчук"; break;
        case "Ovoshje" : return "Овошје"; break;
        case "Zhito" : return "Жито"; break;
        case "Meshunkasti" : return "Мешункасти продукти"; break;
        case "Jatkasti" : return "Јаткасти плодови"; break;
        case "Pcelarski" : return "Пчеларски продукти"; break;
        case "Domashni" : return "Домашни преработки"; break;
    }
}

const SortList = (props) => {

 return <List>
      <List.Header style={{marginBottom:25}}>Категории</List.Header>
    {CATEGORIES.map(category=>{
        return (
        <List.Item><Checkbox label={translateCat(category)} value={category} onClick={e => props.props(category)} style={{marginBottom:10}}/></List.Item>
        )
    })}
  </List>
}

export default SortList;