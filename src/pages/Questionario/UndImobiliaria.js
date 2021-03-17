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

        <Text style={styles.textLsMoradores}>Unidade Imobiliária</Text>
        <View>
          <Text style={styles.text}>Tipo de uso do Imóvel:</Text>
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
                <Picker.Item label="Uso residêncial" value="usoresidencial" />
                <Picker.Item label="Uso não residêncial" value="usonaoresidencial" />
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
                <Picker.Item label="Próprio" value="proprio" />
                <Picker.Item label="Cedido" value="cedido" />
                <Picker.Item label="Outro" value="outro" />
              </Picker>
            </Form> 
          </View>
        </View>
        
        <View>
          <Text style={styles.text}>Tempo de Ocupação:</Text>
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
          <Text style={styles.text}>Forma de aquisição da posse do imóvel:</Text>
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
                <Picker.Item label="Imóvel de terceiros" value="imovelterceiros" />
                <Picker.Item label="Invasão" value="invasao" />
                <Picker.Item label="Doação" value="doacao" />
                <Picker.Item label="Compra" value="compra" />
                <Picker.Item label="Herança" value="heranca" />
                <Picker.Item label="Outra forma de aquisição" value="outraformaaquisicao" />

              </Picker>
            </Form> 
          </View>
        </View>


        <View>
          <Text style={styles.text}>Documentos do imóvel:</Text>
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
                <Picker.Item label="Não possuo documentos" value="naopossuodocumentos" />
                <Picker.Item label="Contrato de compra e venda" value="contratodecompraevenda" />
                <Picker.Item label="Contrato de cessão de posse" value="contratodecessaodeposse" />
                <Picker.Item label="Recibo de compra" value="recibodecompra" />
                <Picker.Item label="Cessão de direitos hereditários" value="cessaodedireitoshereditarios" />
                <Picker.Item label="Formal de partilha" value="formaldepartilha" />
                <Picker.Item label="Outros documentos" value="outrosdocumentos" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Possui imóvel registrado:</Text>
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
                <Picker.Item label="Não possui imóvel registrado" value="naopossuiimovelregistrado" />
                <Picker.Item label="Apenas o que reside" value="apenasoquereside" />
                <Picker.Item label="Possui 2 imóveis registrados" value="possui2imoveisregistrado" />
                <Picker.Item label="Possui mais de 2 imóveis registrado" value="possuimaisde2imoveisregistrado"/>
              </Picker>
            </Form> 
          </View>
        </View>
        
        <View>
          <Text style={styles.text}>Imóvel cadastro imobiliário no Munícipio:</Text>
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
                <Picker.Item label="possui cadastro imobiliário" value="possuicadastroimobiliario" />
                <Picker.Item label="Não possui cadastro imobiliário" value="naopossuicadastroimobiliario" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Situação do imóvel em relação ao pagamento do IPTU:</Text>
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
                <Picker.Item label="Possui isenção" value="possuiisencao" />
                <Picker.Item label="Nunca pagou IPTU" value="nuncapagouiptu" />
                <Picker.Item label="Não quis informar" value="naoquisinformar" />

              </Picker>
            </Form> 
          </View>
        </View>
        
        <View>
          <Text style={styles.text}>Quantidade de imóveis que possui:</Text>
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
                <Picker.Item label="Não possui nenhum imóvel" value="naopossuiimovel" />
                <Picker.Item label="Apenas o que reside" value="apenasoquereside" />
                <Picker.Item label="Possui 2 imóveis" value="possui2imoveis" />
                <Picker.Item label="Possui 3 imóveis" value="possui3imoveis" />
                <Picker.Item label="Possui mais de 3 imóveis" value="maisde3imoveis" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Tem interesse em regularizar o imóvel:</Text>
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
                <Picker.Item label="Imóvel já está regularizado" value="imoveljaregularizado" />
                <Picker.Item label="Não tenho interesse" value="naotenhointeresse" />
                <Picker.Item label="Tenho interesse" value="tenhointeresse" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Número do pavimentos do imóvel:</Text>
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
          <Text style={styles.text}>Tipo de edificação:</Text>
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
                <Picker.Item label="Cerâmica" value="ceramica" />
                <Picker.Item label="Porcelanato" value="porcelanato" />
                <Picker.Item label="Alto padrão de acabamento" value="altopadrao" />
              </Picker>
            </Form> 
          </View>
        </View>
        
        <View>
          <Text style={styles.text}>Número de cômodos:</Text>
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
                <Picker.Item label="01 Cômodo" value="1comodo" />
                <Picker.Item label="02 Cômodos" value="2comodos" />
                <Picker.Item label="03 Cômodos" value="3comodos" />
                <Picker.Item label="04 Cômodos" value="4comodos" />
                <Picker.Item label="05 Cômodos" value="5comodos" />
                <Picker.Item label="06 Cômodos" value="6comodos" />
                <Picker.Item label="07 Cômodos" value="7comodos" />
                <Picker.Item label="Acima de 07 cômodos" value="acimade7comodos" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Quantidade de Sanitários:</Text>
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
                <Picker.Item label="01 Sanitário" value="1sanitario" />
                <Picker.Item label="02 Sanitários" value="2sanitarios" />
                <Picker.Item label="03 Sanitários" value="3sanitarios" />
                <Picker.Item label="Acima de 03 sanitários" value="acimade3sanitarios" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Água potável:</Text>
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
                <Picker.Item label="Rede pública" value="redepublica" />
                <Picker.Item label="Poço artesiano" value="pocoartesiano" />
                <Picker.Item label="Abastecimento Coletivo" value="abastecimentocoletivo" />
                <Picker.Item label="Não tem água potável" value="naotemaguapotavel" />
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
                <Picker.Item label="Rede pública" value="redepublica" />
                <Picker.Item label="Fossa" value="fossa" />
                <Picker.Item label="A céu aberto" value="aceuaberto" />
                <Picker.Item label="Outro" value="outro" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Energia elétrica:</Text>
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
                <Picker.Item label="Não tenho energia elétrica" value="naotenhoenergiaeletrica" />
                <Picker.Item label="Ligação clandestina" value="ligacaoclandestina" />
                <Picker.Item label="Rede pública" value="redepublica" />
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
                <Picker.Item label="Não tem muro" value="naotemmuro" />
                <Picker.Item label="Tem muro, mas não tem calçada" value="temmuronaocalcada" />
                <Picker.Item label="Cerca de arame" value="cercadearame" />
                <Picker.Item label="Grades" value="grades" />
                <Picker.Item label="Outros" value="outros" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Calçadas e meio fio:</Text>
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
                <Picker.Item label="Não possui calçada, e nem meio fio" value="naopossuicalcadanemmeiofio" />
                <Picker.Item label="Possui calçada, mas não tem meio fio" value="possuicalcadamasnaomeiofio" />
                <Picker.Item label="Possui calçada e meio fio" value="possuicalcadaemeiofio" />
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
                <Picker.Item label="Não tem árvore no imóvel" value="naotemarvorenoimovel" />
                <Picker.Item label="Tem árvore no quintal" value="temarvorenoquintal" />
                <Picker.Item label="Tem árvore na calçada" value="temarvorenacalcada" />
                <Picker.Item label="Tem árvore na calçada e no quintal" value="temarvorenacalcadaenoquintal" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Pavimentação:</Text>
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
                <Picker.Item label="Sem pavimentação" value="sempavimentacao" />
                <Picker.Item label="Asfalto" value="asfalto" />
                <Picker.Item label="Calçamento" value="calcamento" />
                <Picker.Item label="Bloco paralelepípedo" value="blocoparalelepipedo" />
                <Picker.Item label="Outros" value="outros" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Serviços Públicos:</Text>
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
                <Picker.Item label="Iluminação pública" value="iluminacaopublica" />
                <Picker.Item label="Limpeza pública" value="limpezapublica" />
                <Picker.Item label="Escola pública" value="escolapublica" />
                <Picker.Item label="Posto de saúde" value="postodesaude" />
              </Picker>
            </Form> 
          </View>
        </View>

        <View>
          <Text style={styles.text}>Móveis e Equipamentos que guarnecem a residência:</Text>
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
                <Picker.Item label="Automóvel" value="automovel" />
                <Picker.Item label="Motocicleta" value="motocicleta" />
                <Picker.Item label="Máquina de lavar" value="maquinadelavar" />
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

