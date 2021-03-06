import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { Form, Picker } from 'native-base';
import firebase from 'react-native-firebase'; 

import styles from './styles'

export default class UndImobiliaria extends Component {
  constructor(props){
    super(props);
    this.state = {
      tipoUsoImovel:'',
      modalidadePosse:'',
      tempoOcupacao:'',
      formaAquisicao:'',
      documentosImoveis:'',
      possuiImovelRegistrado:'',
      imovelCadImobMunicipio:'',
      situacaoImovelIptu:'',
      quantImoveisPossui:'',
      temInteresseRegularizar:'',
      numPavimentoImovel:'',
      tipoEdificacao:'',
      tipoAcabamento:'',
      numeroComodos:'',
      quantSanitario:'',
      aguaPotavel:'',
      esgoto:'',
      energiaEletrica:'',
      muro:'',
      calcadasMeioFio:'',
      arvores:'',
      pavimentacao:'',
      servicosPublico:'',
      moveisEquipantosGuarnecemResidencia:'',
    }

    if (this.props.tipo == 'edita'){
      this._editarQuestionario(this.props.questionarioAtual);
    }

  }

  async changeTipoUsoImovel(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({tipoUsoImovel : value})
    salvaDados.set({
      tipoUsoImovel : this.state.tipoUsoImovel
    },{merge:true})
  }
  async changeModalidadePosse(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({modalidadePosse : value})
    salvaDados.set({
      modalidadePosse : this.state.modalidadePosse
    },{merge:true})
  }
  async changeTempoOcupacao(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({tempoOcupacao : value})
    salvaDados.set({
      tempoOcupacao : this.state.tempoOcupacao
    },{merge:true})
  }
  async changeFormaAquisicao(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({formaAquisicao : value})
    salvaDados.set({
      formaAquisicao : this.state.formaAquisicao
    },{merge:true})
  }
  async changeDocumentosImoveis(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({documentosImoveis : value})
    salvaDados.set({
      documentosImoveis : this.state.documentosImoveis
    },{merge:true})
  }
  async changePossuiImovelRegistrado(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({possuiImovelRegistrado : value})
    salvaDados.set({
      possuiImovelRegistrado : this.state.possuiImovelRegistrado
    },{merge:true})
  }
  async changeImovelCadImobMunicipio(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({imovelCadImobMunicipio : value})
    salvaDados.set({
      imovelCadImobMunicipio : this.state.imovelCadImobMunicipio
    },{merge:true})
  }
  async changeSituacaoImovelIptu(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({situacaoImovelIptu : value})
    salvaDados.set({
      situacaoImovelIptu : this.state.situacaoImovelIptu
    },{merge:true})
  }
  async changeQuantImoveisPossui(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({quantImoveisPossui : value})
    salvaDados.set({
      quantImoveisPossui : this.state.quantImoveisPossui
    },{merge:true})
  }
  async changeTemInteresseRegularizar(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({temInteresseRegularizar : value})
    salvaDados.set({
      temInteresseRegularizar : this.state.temInteresseRegularizar
    },{merge:true})
  }
  async changeNumPavimentoImovel(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({numPavimentoImovel : value})
    salvaDados.set({
      numPavimentoImovel : this.state.numPavimentoImovel
    },{merge:true})
  }
  async changeTipoEdificacao(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({tipoEdificacao : value})
    salvaDados.set({
      tipoEdificacao : this.state.tipoEdificacao
    },{merge:true})
  }
  async changeTipoAcabamento(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({tipoAcabamento : value})
    salvaDados.set({
      tipoAcabamento : this.state.tipoAcabamento
    },{merge:true})
  }
  async changeNumeroComodos(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({numeroComodos : value})
    salvaDados.set({
      numeroComodos : this.state.numeroComodos
    },{merge:true})
  }
  async changeQuantSanitario(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({quantSanitario : value})
    salvaDados.set({
      quantSanitario : this.state.quantSanitario
    },{merge:true})
  }
  async changeAguaPotavel(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({aguaPotavel : value})
    salvaDados.set({
      aguaPotavel : this.state.aguaPotavel
    },{merge:true})
  }
  async changeEsgoto(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({esgoto : value})
    salvaDados.set({
      esgoto : this.state.esgoto
    },{merge:true})
  }
  async changeEnergiaEletrica(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({energiaEletrica : value})
    salvaDados.set({
      energiaEletrica : this.state.energiaEletrica
    },{merge:true})
  }
  async changeMuro(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({muro : value})
    salvaDados.set({
      muro : this.state.muro
    },{merge:true})
  }
  async changeCalcadasMeioFio(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({calcadasMeioFio : value})
    salvaDados.set({
      calcadasMeioFio : this.state.calcadasMeioFio
    },{merge:true})
  }
  async changeArvores(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({arvores : value})
    salvaDados.set({
      arvores : this.state.arvores
    },{merge:true})
  }
  async changePavimentacao(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({pavimentacao : value})
    salvaDados.set({
      pavimentacao : this.state.pavimentacao
    },{merge:true})
  }
  async changeServicosPublico(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({servicosPublico : value})
    salvaDados.set({
      servicosPublico : this.state.servicosPublico
    },{merge:true})
  }
  async changeMoveisEquipantosGuarnecemResidencia(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({moveisEquipantosGuarnecemResidencia : value})
    salvaDados.set({
      moveisEquipantosGuarnecemResidencia : this.state.moveisEquipantosGuarnecemResidencia
    },{merge:true})
  }

  _editarQuestionario(idquestionario){
    const editaDados = firebase.firestore().collection('questionarios').doc(idquestionario).get()
    .then(snapshot => {
      this.setState({
        tipoUsoImovel:snapshot._data.tipoUsoImovel,
        modalidadePosse:snapshot._data.modalidadePosse,
        tempoOcupacao:snapshot._data.tempoOcupacao,
        formaAquisicao:snapshot._data.formaAquisicao,
        documentosImoveis:snapshot._data.documentosImoveis,
        possuiImovelRegistrado:snapshot._data.possuiImovelRegistrado,
        imovelCadImobMunicipio:snapshot._data.imovelCadImobMunicipio,
        situacaoImovelIptu:snapshot._data.situacaoImovelIptu,
        quantImoveisPossui:snapshot._data.quantImoveisPossui,
        temInteresseRegularizar:snapshot._data.temInteresseRegularizar,
        numPavimentoImovel:snapshot._data.numPavimentoImovel,
        tipoEdificacao:snapshot._data.tipoEdificacao,
        tipoAcabamento:snapshot._data.tipoAcabamento,
        numeroComodos:snapshot._data.numeroComodos,
        quantSanitario:snapshot._data.quantSanitario,
        aguaPotavel:snapshot._data.aguaPotavel,
        esgoto:snapshot._data.esgoto,
        energiaEletrica:snapshot._data.energiaEletrica,
        muro:snapshot._data.muro,
        calcadasMeioFio:snapshot._data.calcadasMeioFio,
        arvores:snapshot._data.arvores,
        pavimentacao:snapshot._data.pavimentacao,
        servicosPublico:snapshot._data.servicosPublico,
        moveisEquipantosGuarnecemResidencia:snapshot._data.moveisEquipantosGuarnecemResidencia,
      })
    })
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

        <Text style={styles.textLsMoradores}>Unidade Imobili??ria</Text>
        <View>
          <Text style={styles.text}>Tipo de uso do Im??vel:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.tipoUsoImovel}
                onValueChange={
                  this.changeTipoUsoImovel.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="Uso resid??ncial" value="usoresidencial" />
                <Picker.Item label="Uso n??o resid??ncial" value="usonaoresidencial" />
                <Picker.Item label="Uso misto" value="usomisto" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Modalidade da posse:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.modalidadePosse}
                onValueChange={
                  this.changeModalidadePosse.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="Alugado" value="alugado" />
                <Picker.Item label="Pr??prio" value="proprio" />
                <Picker.Item label="Cedido" value="cedido" />
                <Picker.Item label="Outro" value="outro" />
              </Picker>
            </Form> 
          </View>
        </View>
        
        <View>
          <Text style={styles.text}>Tempo de Ocupa????o:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.tempoOcupacao}
                onValueChange={
                  this.changeTempoOcupacao.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="Menos de 01 ano" value="menos1ano" />
                <Picker.Item label="De 01 a 03 anos" value="de1a3anos" />
                <Picker.Item label="De 03 a 05 anos" value="de3a5anos" />
                <Picker.Item label="De 05 a 07 anos" value="de5a7anos" />
                <Picker.Item label="De 07 a 09 anos" value="de7a9anos" />
                <Picker.Item label="De 09 a 15 anos" value="de9a15anos" />
                <Picker.Item label="Acima de 15 anos" value="acima15anos" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Forma de aquisi????o da posse do im??vel:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.formaAquisicao}
                onValueChange={
                  this.changeFormaAquisicao.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="Im??vel de terceiros" value="imovelterceiros" />
                <Picker.Item label="Invas??o" value="invasao" />
                <Picker.Item label="Doa????o" value="doacao" />
                <Picker.Item label="Compra" value="compra" />
                <Picker.Item label="Heran??a" value="heranca" />
                <Picker.Item label="Outra forma de aquisi????o" value="outraformaaquisicao" />

              </Picker>
            </Form> 
          </View>
        </View>


        <View>
          <Text style={styles.text}>Documentos do im??vel:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.documentosImoveis}
                onValueChange={
                  this.changeDocumentosImoveis.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="N??o possuo documentos" value="naopossuodocumentos" />
                <Picker.Item label="Contrato de compra e venda" value="contratodecompraevenda" />
                <Picker.Item label="Contrato de cess??o de posse" value="contratodecessaodeposse" />
                <Picker.Item label="Recibo de compra" value="recibodecompra" />
                <Picker.Item label="Cess??o de direitos heredit??rios" value="cessaodedireitoshereditarios" />
                <Picker.Item label="Formal de partilha" value="formaldepartilha" />
                <Picker.Item label="Outros documentos" value="outrosdocumentos" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Possui im??vel registrado:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.possuiImovelRegistrado}
                onValueChange={
                  this.changePossuiImovelRegistrado.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="N??o possui im??vel registrado" value="naopossuiimovelregistrado" />
                <Picker.Item label="Apenas o que reside" value="apenasoquereside" />
                <Picker.Item label="Possui 2 im??veis registrados" value="possui2imoveisregistrado" />
                <Picker.Item label="Possui mais de 2 im??veis registrado" value="possuimaisde2imoveisregistrado"/>
              </Picker>
            </Form> 
          </View>
        </View>
        
        <View>
          <Text style={styles.text}>Im??vel cadastro imobili??rio no Mun??cipio:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.imovelCadImobMunicipio}
                onValueChange={
                  this.changeImovelCadImobMunicipio.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="possui cadastro imobili??rio" value="possuicadastroimobiliario" />
                <Picker.Item label="N??o possui cadastro imobili??rio" value="naopossuicadastroimobiliario" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Situa????o do im??vel em rela????o ao pagamento do IPTU:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.situacaoImovelIptu}
                onValueChange={
                  this.changeSituacaoImovelIptu.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="Paga IPTU" value="pagaiptu" />
                <Picker.Item label="IPTU atrasado" value="iptuatrasado" />
                <Picker.Item label="Possui isen????o" value="possuiisencao" />
                <Picker.Item label="Nunca pagou IPTU" value="nuncapagouiptu" />
                <Picker.Item label="N??o quis informar" value="naoquisinformar" />

              </Picker>
            </Form> 
          </View>
        </View>
        
        <View>
          <Text style={styles.text}>Quantidade de im??veis que possui:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.quantImoveisPossui}
                onValueChange={
                  this.changeQuantImoveisPossui.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="N??o possui nenhum im??vel" value="naopossuiimovel" />
                <Picker.Item label="Apenas o que reside" value="apenasoquereside" />
                <Picker.Item label="Possui 2 im??veis" value="possui2imoveis" />
                <Picker.Item label="Possui 3 im??veis" value="possui3imoveis" />
                <Picker.Item label="Possui mais de 3 im??veis" value="maisde3imoveis" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Tem interesse em regularizar o im??vel:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.temInteresseRegularizar}
                onValueChange={
                  this.changeTemInteresseRegularizar.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="Im??vel j?? est?? regularizado" value="imoveljaregularizado" />
                <Picker.Item label="N??o tenho interesse" value="naotenhointeresse" />
                <Picker.Item label="Tenho interesse" value="tenhointeresse" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>N??mero do pavimentos do im??vel:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.numPavimentoImovel}
                onValueChange={
                  this.changeNumPavimentoImovel.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="01 pavimento" value="1pavimento" />
                <Picker.Item label="02 pavimentos" value="2pavimentos" />
                <Picker.Item label="03 pavimentos" value="3pavimentos" />
                <Picker.Item label="04 pavimentos" value="4pavimentos" />
                <Picker.Item label="acima de 05 pavimentos" value="acimade5pavimentos" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Tipo de edifica????o:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.tipoEdificacao}
                onValueChange={
                  this.changeTipoEdificacao.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="Alvenaria" value="alvenaria" />
                <Picker.Item label="Mista" value="mista" />
                <Picker.Item label="Taipa" value="taipa" />
                <Picker.Item label="Sucata" value="sucata" />
                <Picker.Item label="Madeira" value="madeira" />
                <Picker.Item label="Outros" value="outros" />
              </Picker>
            </Form> 
          </View>
        </View>
        
        <View>
          <Text style={styles.text}>Tipo de acabamento:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.tipoAcabamento}
                onValueChange={
                  this.changeTipoAcabamento.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="Sem acabamento" value="semacabamento" />
                <Picker.Item label="Rebouco" value="rebouco" />
                <Picker.Item label="Cer??mica" value="ceramica" />
                <Picker.Item label="Porcelanato" value="porcelanato" />
                <Picker.Item label="Alto padr??o de acabamento" value="altopadrao" />
              </Picker>
            </Form> 
          </View>
        </View>
        
        <View>
          <Text style={styles.text}>N??mero de c??modos:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.numeroComodos}
                onValueChange={
                  this.changeNumeroComodos.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="01 C??modo" value="1comodo" />
                <Picker.Item label="02 C??modos" value="2comodos" />
                <Picker.Item label="03 C??modos" value="3comodos" />
                <Picker.Item label="04 C??modos" value="4comodos" />
                <Picker.Item label="05 C??modos" value="5comodos" />
                <Picker.Item label="06 C??modos" value="6comodos" />
                <Picker.Item label="07 C??modos" value="7comodos" />
                <Picker.Item label="Acima de 07 c??modos" value="acimade7comodos" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Quantidade de Sanit??rios:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.quantSanitario}
                onValueChange={
                  this.changeQuantSanitario.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="01 Sanit??rio" value="1sanitario" />
                <Picker.Item label="02 Sanit??rios" value="2sanitarios" />
                <Picker.Item label="03 Sanit??rios" value="3sanitarios" />
                <Picker.Item label="Acima de 03 sanit??rios" value="acimade3sanitarios" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>??gua pot??vel:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.aguaPotavel}
                onValueChange={
                  this.changeAguaPotavel.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="Rede p??blica" value="redepublica" />
                <Picker.Item label="Po??o artesiano" value="pocoartesiano" />
                <Picker.Item label="Abastecimento Coletivo" value="abastecimentocoletivo" />
                <Picker.Item label="N??o tem ??gua pot??vel" value="naotemaguapotavel" />
                <Picker.Item label="Cisterna" value="cisterna" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Esgoto:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.esgoto}
                onValueChange={
                  this.changeEsgoto.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="Rede p??blica" value="redepublica" />
                <Picker.Item label="Fossa" value="fossa" />
                <Picker.Item label="A c??u aberto" value="aceuaberto" />
                <Picker.Item label="Outro" value="outro" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Energia el??trica:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.energiaEletrica}
                onValueChange={
                  this.changeEnergiaEletrica.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="N??o tenho energia el??trica" value="naotenhoenergiaeletrica" />
                <Picker.Item label="Liga????o clandestina" value="ligacaoclandestina" />
                <Picker.Item label="Rede p??blica" value="redepublica" />
                <Picker.Item label="Energia solar" value="energiasolar" />
                <Picker.Item label="Outra fonte de energia" value="outrafontedeenergia" />

              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Muro:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.muro}
                onValueChange={
                  this.changeMuro.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="N??o tem muro" value="naotemmuro" />
                <Picker.Item label="Tem muro, mas n??o tem cal??ada" value="temmuronaocalcada" />
                <Picker.Item label="Cerca de arame" value="cercadearame" />
                <Picker.Item label="Grades" value="grades" />
                <Picker.Item label="Outros" value="outros" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Cal??adas e meio fio:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.calcadasMeioFio}
                onValueChange={
                  this.changeCalcadasMeioFio.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="N??o possui cal??ada, e nem meio fio" value="naopossuicalcadanemmeiofio" />
                <Picker.Item label="Possui cal??ada, mas n??o tem meio fio" value="possuicalcadamasnaomeiofio" />
                <Picker.Item label="Possui cal??ada e meio fio" value="possuicalcadaemeiofio" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Arvores:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.arvores}
                onValueChange={
                  this.changeArvores.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="N??o tem ??rvore no im??vel" value="naotemarvorenoimovel" />
                <Picker.Item label="Tem ??rvore no quintal" value="temarvorenoquintal" />
                <Picker.Item label="Tem ??rvore na cal??ada" value="temarvorenacalcada" />
                <Picker.Item label="Tem ??rvore na cal??ada e no quintal" value="temarvorenacalcadaenoquintal" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Pavimenta????o:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.pavimentacao}
                onValueChange={
                  this.changePavimentacao.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="Sem pavimenta????o" value="sempavimentacao" />
                <Picker.Item label="Asfalto" value="asfalto" />
                <Picker.Item label="Cal??amento" value="calcamento" />
                <Picker.Item label="Bloco paralelep??pedo" value="blocoparalelepipedo" />
                <Picker.Item label="Outros" value="outros" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Servi??os P??blicos:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.servicosPublico}
                onValueChange={
                  this.changeServicosPublico.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="Coleta de lixo" value="coletadelixo" />
                <Picker.Item label="Ilumina????o p??blica" value="iluminacaopublica" />
                <Picker.Item label="Limpeza p??blica" value="limpezapublica" />
                <Picker.Item label="Escola p??blica" value="escolapublica" />
                <Picker.Item label="Posto de sa??de" value="postodesaude" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>M??veis e Equipamentos que guarnecem a resid??ncia:</Text>
          <View style={styles.Select}>
            <Form>
              <Picker
                note
                mode="dropdown"
                selectedValue={this.state.moveisEquipantosGuarnecemResidencia}
                onValueChange={
                  this.changeMoveisEquipantosGuarnecemResidencia.bind(this)
                }
              >
                <Picker.Item label="" value="key1" />
                <Picker.Item label="Autom??vel" value="automovel" />
                <Picker.Item label="Motocicleta" value="motocicleta" />
                <Picker.Item label="M??quina de lavar" value="maquinadelavar" />
                <Picker.Item label="Micro-ondas" value="microondas" />
                <Picker.Item label="Internet" value="internet" />
                <Picker.Item label="TV por assinatura" value="tvporassinatura" />
                <Picker.Item label="Computador" value="computador" />
                <Picker.Item label="Geladeira" value="geladeira" />
                <Picker.Item label="TV" value="tv" />
              </Picker>
            </Form> 
          </View>
        </View>

      </ScrollView>
    )

  }
}

