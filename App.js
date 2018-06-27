import React, { Component } from 'react';
import { View, StyleSheet, SectionList, Text } from 'react-native';

export default class PrimeiroProjeto extends Component {

	//é um flat list divido em seções
	constructor(props) {
		super(props);
		//state
		this.state = {
			listData:[
				{title:'A', data:[
					{key:'1', nome:'Mario', funcao: 'atacante'},
					{key:'2', nome:'Luiz', funcao: 'meio'},
					{key:'3', nome:'José', funcao: 'pivô'},
					{key:'4', nome:'Lucas', funcao: 'zagueiro'},
					{key:'5', nome:'Claudio', funcao: 'goleiro'}
				]},
				{title:'B', data:[
					{key:'6', nome:'kleber', funcao: 'atacante'},
					{key:'7', nome:'Otavio', funcao: 'meio'},
					{key:'8', nome:'José', funcao: 'pivô'},
					{key:'9', nome:'Joaquim', funcao: 'zagueiro'},
					{key:'10', nome:'Gomes', funcao: 'goleiro'}
				]}
			
			]
		};
	}
    //categoria
	listSectionRender(section) {
		return (
			<Text style={styles.section}>Time {section.title}</Text>
		);
	}
         //nome e anos
	listRender(item) {
		return (
			<Text style={styles.item}>Nome: {item.nome} -Função: {item.funcao} </Text>
		);
	}
//sections passa a lista, rederItem função itens formatados, renderSectionHeader renderizador da sessão
	render() {
		return (
			<View style={styles.body}>
				<SectionList sections={this.state.listData} renderItem={({item})=>this.listRender(item)} renderSectionHeader={({section})=>this.listSectionRender(section)} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body:{
		paddingTop:20,
		flex:1
	},
	item:{
		fontSize:18,
		height:40,
		padding:10
	},
	section:{
		fontSize:14,
		backgroundColor:'#CCCCCC',
		padding:10
	}
});















