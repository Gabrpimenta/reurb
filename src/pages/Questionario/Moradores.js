import React, { Component } from 'react';
import { View, TextInput, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Content, ListItem, Body, Right, Picker, Form } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';

import styles from './styles';

export default class Moradores extends Component {
  constructor(props){
    super(props);
    this.state = {
      moradorAtual:'',
      addMorador:false,
      nome:'',
      vinculoTitularImovel: '',
      nacionalidade:'',
      estadoCivil:'',
      sexo:'',
      cpf:'',
      rg:'',
      dataNascimento:'',
      profissao:'',
      situacaoProfissao:'',
      renda:'',
      beneficioSocial:'',
      escolaridade:'',
      escola:'',
      usaMedicamentoContinuo:'',
      temCartaoSus:'',
      ePortadorNecessidade:'',
      listaMoradores:[]
    }

    const lsMoradores = firebase.firestore().collection('morador').where('idQuestionario', '==', this.props.questionarioAtual.toString()).onSnapshot(docSnapshot=>{
      this.setState({ listaMoradores : docSnapshot._docs })
    })

  }

  _addMorador(){
    const addMorador = firebase.firestore().collection('morador').add({
      idQuestionario : this.props.questionarioAtual
    })
    .then(ref => {
      this.setState({
        moradorAtual: ref.id, 
        addMorador:true,
        nome : '',
        vinculoTitularImovel : '',
        nacionalidade : '',
        estadoCivil : '',
        sexo : '',
        cpf : '',
        rg : '',
        dataNascimento : '',
        profissao : '',
        situacaoProfissao : '',
        renda : '',
        beneficioSocial : '',
        escolaridade : '',
        escola : '',
        usaMedicamentoContinuo : '',
        temCartaoSus : '',
        ePortadorNecessidade : '',
      })
    })
  }

  _editarMorador(idmorador){
    this.setState({moradorAtual : idmorador})
    const editaDados = firebase.firestore().collection('morador').doc(idmorador).get()
    .then(snapshot => {
      this.setState({
        nome : snapshot._data.nome,
        vinculoTitularImovel : snapshot._data.vinculoTitularImovel,
        nacionalidade : snapshot._data.nacionalidade,
        outraNacionalidade : snapshot._data.outraNacionalidade,
        estadoCivil : snapshot._data.estadoCivil,
        sexo : snapshot._data.sexo,
        cpf : snapshot._data.cpf,
        rg : snapshot._data.rg,
        dataNascimento : snapshot._data.dataNascimento,
        profissao : snapshot._data.profissao,
        situacaoProfissao : snapshot._data.situacaoProfissao,
        renda : snapshot._data.renda,
        beneficioSocial : snapshot._data.beneficioSocial,
        escolaridade : snapshot._data.escolaridade,
        escola : snapshot._data.escola,
        usaMedicamentoContinuo : snapshot._data.usaMedicamentoContinuo,
        temCartaoSus : snapshot._data.temCartaoSus,
        ePortadorNecessidade : snapshot._data.ePortadorNecessidade,
        addMorador : true 
      })
    })
  }

  _excluirMorador(item){
    Alert.alert(
      'Atenção!',
      'Deseja realmente excluir o morador?',
      [
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Sim', onPress: () => {
          firebase.firestore().collection('morador').doc(item).delete();
        }},
      ],
      {cancelable: false},
    );
    
  }

  _salvaDados(campo, dados){
    const salvaDados = firebase.firestore().collection('morador').doc(this.state.moradorAtual)

    if (campo == 'nome'){
      salvaDados.set({nome : dados},{merge:true})
    }
    if (campo == 'outraNacionalidade'){
      salvaDados.set({outraNacionalidade : dados},{merge:true})
    }
    if (campo == 'cpf'){
      salvaDados.set({cpf : dados},{merge:true})
    }
    if (campo == 'rg'){
      salvaDados.set({rg : dados},{merge:true})
    }
    if (campo == 'dataNascimento'){
      salvaDados.set({dataNascimento : dados},{merge:true})
    }
    if (campo == 'profissao'){
      salvaDados.set({profissao : dados},{merge:true})
    }

  }

  async changeVinculoTitularImovel(value: string) {
    const salvaDados = firebase.firestore().collection('morador').doc(this.state.moradorAtual)
    await this.setState({vinculoTitularImovel: value})
    salvaDados.set({
      vinculoTitularImovel : this.state.vinculoTitularImovel
    },{merge:true})
  }

  async changeNacionalidade(value: string) {
    const salvaDados = firebase.firestore().collection('morador').doc(this.state.moradorAtual)
    await this.setState({nacionalidade: value})
    salvaDados.set({
      nacionalidade : this.state.nacionalidade
    },{merge:true})
  }

  async changeEstadoCivil(value: string) {
    const salvaDados = firebase.firestore().collection('morador').doc(this.state.moradorAtual)
    await this.setState({estadoCivil: value})
    salvaDados.set({
      estadoCivil : this.state.estadoCivil
    },{merge:true})
  }

  async changeSexo(value: string) {
    const salvaDados = firebase.firestore().collection('morador').doc(this.state.moradorAtual)
    await this.setState({sexo: value})
    salvaDados.set({
      sexo : this.state.sexo
    },{merge:true})
  }

  async changeSituacaoProfissao(value: string) {
    const salvaDados = firebase.firestore().collection('morador').doc(this.state.moradorAtual)
    await this.setState({situacaoProfissao: value})
    salvaDados.set({
      situacaoProfissao : this.state.situacaoProfissao
    },{merge:true})
  }
  async changeRenda(value: string) {
    const salvaDados = firebase.firestore().collection('morador').doc(this.state.moradorAtual)
    await this.setState({renda: value})
    salvaDados.set({
      renda : this.state.renda
    },{merge:true})
  }

  async changeBeneficioSocial(value: string) {
    const salvaDados = firebase.firestore().collection('morador').doc(this.state.moradorAtual)
    await this.setState({beneficioSocial: value})
    salvaDados.set({
      beneficioSocial : this.state.beneficioSocial
    },{merge:true})
  }

  async changeEscolaridade(value: string) {
    const salvaDados = firebase.firestore().collection('morador').doc(this.state.moradorAtual)
    await this.setState({escolaridade: value})
    salvaDados.set({
      escolaridade : this.state.escolaridade
    },{merge:true})
  }

  async changeEscola(value: string) {
    const salvaDados = firebase.firestore().collection('morador').doc(this.state.moradorAtual)
    await this.setState({escola: value})
    salvaDados.set({
      escola : this.state.escola
    },{merge:true})
  }

  async changeUsaMedicamentoContinuo(value: string) {
    const salvaDados = firebase.firestore().collection('morador').doc(this.state.moradorAtual)
    await this.setState({usaMedicamentoContinuo: value})
    salvaDados.set({
      usaMedicamentoContinuo : this.state.usaMedicamentoContinuo
    },{merge:true})
  }

  async changeTemCartaoSus(value: string) {
    const salvaDados = firebase.firestore().collection('morador').doc(this.state.moradorAtual)
    await this.setState({temCartaoSus: value})
    salvaDados.set({
      temCartaoSus : this.state.temCartaoSus
    },{merge:true})
  }
  async changeEPortadorNecessidade(value: string) {
    const salvaDados = firebase.firestore().collection('morador').doc(this.state.moradorAtual)
    await this.setState({ePortadorNecessidade: value})
    salvaDados.set({
      ePortadorNecessidade : this.state.ePortadorNecessidade
    },{merge:true})
  }

  
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      > 
        {!this.state.addMorador ? 
          <View>
            <TouchableOpacity style={styles.button2} onPress={()=>{this._addMorador()}}>
              <Text style={styles.textButton2}>Adicionar Morador</Text>
            </TouchableOpacity>

            <Text style={styles.textLsMoradores}>Lista de Moradores</Text>
            
            <Content>
              {this.state.listaMoradores.map(item=>{
                return(
                  <ListItem key={item.id} icon>
                    <Body>
                      <Text>{item._data.nome}</Text>
                    </Body>
                    <Right>
                      <TouchableOpacity
                        onPress={()=>{this._editarMorador(item.id)}}
                      >
                        <Icon style={{color:'#cca300', fontSize:24}} name="edit" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={()=>{this._excluirMorador(item.id)}}
                      >
                        <Icon style={{color:'#b32400', fontSize:26, marginLeft:10}} name="trash" />
                      </TouchableOpacity>
                    </Right>
                  </ListItem>
                )
              })}
            </Content>
          </View>
        :

        <View>
          <View>
            <Text style={styles.text}>Nome:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.nome}
              onChangeText={ nome => this.setState({ nome })}
              onKeyPress={()=>this._salvaDados('nome', this.state.nome)}
              
              />
          </View>

          <View>
            <Text style={styles.text}>Vínculo com titular do imóvel:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.vinculoTitularImovel}
                  onValueChange={
                    this.changeVinculoTitularImovel.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Ocupante" value="ocupante" />
                  <Picker.Item label="Cônjuge" value="conjuge" />
                  <Picker.Item label="Filho" value="filho" />
                  <Picker.Item label="Genitor" value="genitor" />
                  <Picker.Item label="Avô/Avó" value="avoavó" />
                  <Picker.Item label="Sobrinho" value="sobrinho" />
                  <Picker.Item label="Sogro/Sogra" value="sogrosogra" />
                  <Picker.Item label="Genro/Nora" value="genronora" />
                  <Picker.Item label="Cunhado/Cunhada" value="cunhado/cunhada" />
                  <Picker.Item label="Amigo" value="amigo" />
                  <Picker.Item label="Outra relação" value="outrarelacao" />
                </Picker>
              </Form> 
            </View>
          </View>

          <View>
            <Text style={styles.text}>Nacionalidade:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.nacionalidade}
                  onValueChange={
                    this.changeNacionalidade.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Brasileira" value="brasileira" />
                  <Picker.Item label="Outra" value="outra" />

                </Picker>
              </Form> 
            </View>
          </View>

          {this.state.nacionalidade=='outra' ? 
            <View>
              <Text style={styles.text}>Qual Nacionalidade:</Text>
              <TextInput 
                style={styles.Input}
                underlineColorAndroid="transparent"
                value={this.state.outraNacionalidade}
                onChangeText={(outraNacionalidade)=>{this.setState({outraNacionalidade})}}
                onKeyPress={()=>this._salvaDados('outraNacionalidade', this.state.outraNacionalidade)}
                />
            </View>
          : null }



          <View>
            <Text style={styles.text}>Estado Cívil:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.estadoCivil}
                  onValueChange={
                    this.changeEstadoCivil.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Solteiro" value="solteiro" />
                  <Picker.Item label="Casado" value="casado" />
                  <Picker.Item label="Viúvo" value="viuvo" />
                  <Picker.Item label="União estável" value="uniaoestavel" />
                  <Picker.Item label="Casado, mas separado de fato" value="casadamasseparadodefato" />
                  <Picker.Item label="Divorciado" value="divorciado" />
                </Picker>
              </Form> 
            </View>
          </View>
    
          <View>
            <Text style={styles.text}>Sexo:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.sexo}
                  onValueChange={
                    this.changeSexo.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Masculino" value="masculino" />
                  <Picker.Item label="Feminino" value="feminino" />
                </Picker>
              </Form> 
            </View>
          </View>

          <View>
            <Text style={styles.text}>CPF:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.cpf}
              onChangeText={(cpf)=>{this.setState({cpf})}}
              onKeyPress={()=>this._salvaDados('cpf', this.state.cpf)}
              />
          </View>

          <View>
            <Text style={styles.text}>RG:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.rg}
              onChangeText={(rg)=>{this.setState({rg})}}
              onKeyPress={()=>this._salvaDados('rg', this.state.rg)}
              />
          </View>
          
          <View>
            <Text style={styles.text}>Data Nascimento:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.dataNascimento}
              onChangeText={(dataNascimento)=>{this.setState({dataNascimento})}}
              onKeyPress={()=>this._salvaDados('dataNascimento', this.state.dataNascimento)}
              />
          </View>
          
          <View>
            <Text style={styles.text}>Profissão:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.profissao}
              onChangeText={(profissao)=>{this.setState({profissao})}}
              onKeyPress={()=>this._salvaDados('profissao', this.state.profissao)}
              />
          </View>

          <View>
            <Text style={styles.text}>Situação Profissional:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.situacaoProfissao}
                  onValueChange={
                    this.changeSituacaoProfissao.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Trabalho formal com carteira assinada" value="trabalhoformalcarteiraassinada" />
                  <Picker.Item label="MEI" value="mei" />
                  <Picker.Item label="Trabalho informal" value="trabalhoinformal" />
                  <Picker.Item label="Profissional Autonomo" value="profissionalautonomo" />
                  <Picker.Item label="Aposentado/pensionista" value="aposentadopensionista" />
                  <Picker.Item label="Desempregado" value="desempregado" />
                  <Picker.Item label="Do lar" value="dolar" />
                  <Picker.Item label="Ocupação não remunerada" value="ocupacaonaoremunerada" />
                  <Picker.Item label="Pensao do ex-cônjuge" value="pensaodoexconjuge" />
                  <Picker.Item label="Não informado" value="naoinformado" />
                  <Picker.Item label="Apenas estuda" value="apenasestuda" />
                </Picker>
              </Form> 
            </View>
          </View>
     
          <View>
            <Text style={styles.text}>Renda:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.renda}
                  onValueChange={
                    this.changeRenda.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Sem renda" value="semrenda" />
                  <Picker.Item label="Até 01 salário mínimo" value="ate1" />
                  <Picker.Item label="De 01 a 02 salário mínimo" value="1a2salariominimo" />
                  <Picker.Item label="De 02 a 03 salário mínimo" value="2a3salariominimo" />
                  <Picker.Item label="De 03 a 04 salário mínimo" value="3a4salariominimo" />
                  <Picker.Item label="De 04 a 05 salário mínimo" value="4a5salariominimo" />
                  <Picker.Item label="Mais de 05 salário mínimo" value="maisde5salariominimo" />
                </Picker>
              </Form> 
            </View>
          </View>

          <View>
            <Text style={styles.text}>Benefício Social:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.beneficioSocial}
                  onValueChange={
                    this.changeBeneficioSocial.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Bolsa família" value="bolsafamilia" />
                  <Picker.Item label="BPC" value="bpc" />
                  <Picker.Item label="Auxílio moradia" value="auxiliomoradia" />
                  <Picker.Item label="Tarifa social" value="tarifasocial" />
                  <Picker.Item label="Benefício eventual" value="beneficioeventual" />
                  <Picker.Item label="Outro benefício" value="outrobeneficio" />
                  <Picker.Item label="Não recebe" value="naorecebe" />
                </Picker>
              </Form> 
            </View>
          </View>

          <View>
            <Text style={styles.text}>Escolaridade:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.escolaridade}
                  onValueChange={
                    this.changeEscolaridade.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Não alfabetizado" value="naoalfabetizado" />
                  <Picker.Item label="Ensino fundamental incompleto" value="fundamentalincompleto" />
                  <Picker.Item label="Ensino fundamental completo" value="fundamentalcompleto" />
                  <Picker.Item label="Ensino médio incompleto" value="medioincompleto" />
                  <Picker.Item label="Ensino médio completo" value="mediocompleto" />
                  <Picker.Item label="Superior incompleto" value="superiorincompleto" />
                  <Picker.Item label="Superior completo" value="superiorcompleto" />
                  <Picker.Item label="Pós Graduado" value="posgraduado" />
                </Picker>
              </Form> 
            </View>
          </View>

          <View>
            <Text style={styles.text}>Escola:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.escola}
                  onValueChange={
                    this.changeEscola.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Escola pública" value="escolapublica" />
                  <Picker.Item label="Escola particular sem bolsa" value="escolaparticularsembolsa" />
                  <Picker.Item label="Escola particular com bolsa" value="escolaparticularcombolsa" />
                  <Picker.Item label="Não estuda" value="naoestuda" />
                </Picker>
              </Form> 
            </View>
          </View>

          <View>
            <Text style={styles.text}>Usa medicamento contínuo:</Text>
             <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.usaMedicamentoContinuo}
                  onValueChange={
                    this.changeUsaMedicamentoContinuo.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Sim" value="sim" />
                  <Picker.Item label="Não" value="nao" />
                </Picker>
              </Form> 
            </View>
          </View>

          <View>
            <Text style={styles.text}>Tem cartão do SUS:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.temCartaoSus}
                  onValueChange={
                    this.changeTemCartaoSus.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Sim" value="sim" />
                  <Picker.Item label="Não" value="nao" />
                </Picker>
              </Form> 
            </View>
          </View>

          <View>
            <Text style={styles.text}>É Portador de necessidades especiais:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.ePortadorNecessidade}
                  onValueChange={
                    this.changeEPortadorNecessidade.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Sim" value="sim" />
                  <Picker.Item label="Não" value="nao" />
                </Picker>
              </Form> 
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={()=>{this.setState({addMorador:false})}}>
              <Text style={styles.textButton}>Fechar</Text>
          </TouchableOpacity>
        </View>
      }

      </ScrollView>
    )

  }
}

