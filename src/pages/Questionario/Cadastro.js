import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { Form, Picker } from 'native-base';
import firebase from 'react-native-firebase';

import styles from './styles'

export default class Cadastro extends Component {
  constructor(props){
    super(props);
    this.state = {
      cadastro:false,
      
      //fomulario cadastro
      ocupante:'',
      estadoCivil:'',
      divorcioAQuemCoubeImovel:'',
      tamanhoLoteRequerente:'',
      tamanhoLoteExConjuge:'',
      filiacaoPai:'',
      filiacaoMae:'',
      profissao:'',
      cpf:'',
      rg:'',
      rgEmitidaUf:'',
      logradouro:'',
      numero:'',
      complemento:'',
      bairro:'',
      estado:'',
      cep:'',
      nomeConjuge:'', 
      nacionalidadeConjuge:'',
      profissaoConjuge:'',
      cpfConjuge:'',
      rgConjuge:'',
      rgEmitidaUfConjuge:'',
      filiacaoPaiConjuge:'',
      filiacaoMaeConjuge:'',
      identImovelImovel:'',
      identImovelUsoImovel:'',
      identImovelLogradouro:'',
      identImovelNumero:'',
      identImovelComplemento:'',
      identImovelBairro:'',
      identImovelCidade:'',
      identImovelEstado:'',
      identImovelCep:'',
      identImovelQuadra:'',
      identImovelLote:'',
      dadosImovelSabeNomeRegistroImovel:'',
      dadosImovelNomeQuemRegistroImovel:'',
      dadosImovelPossuiCadastroPrefeitura:'',
      dadosImovelAdiquiriuUndImobiliariaPor:'',
      dadosImovelQualFormaAdquiriuUnidadeImobiliaria:'',
      dadosImovelDocumentoPossueComprovarPosse:'',
      dadosImovelDataInicioPosse:'',
      dadosImovelOcupanteConcessionarioOuForeiroOutroImovelUrbanoOuRural:'',
      dadosImovelOcupanteJaFoiBeneficiadoComTituloDePosse: '',
      condPagamentoValorServicos:'',
      condPagamentoNumeroParcelas:'',
      condPagamentoValorParcela:'',
      condPagamentoDataVencPrimeiraParcela:'',
      condPagamentoDiaVencDemaisParcelas:'',
      condPagamentoFormaPagamento:''
    }

    const carregaCoords = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    .onSnapshot(snapshot=>{
      try {
        this.setState({
          cadastro:snapshot._data.cadastro,
          ocupante : snapshot._data.ocupante,
          estadoCivil : snapshot._data.estadoCivil,
          divorcioAQuemCoubeImovel : snapshot._data.divorcioAQuemCoubeImovel,
          tamanhoLoteRequerente : snapshot._data.tamanhoLoteRequerente,
          tamanhoLoteExConjuge : snapshot._data.tamanhoLoteExConjuge,
          filiacaoPai : snapshot._data.filiacaoPai,
          filiacaoMae : snapshot._data.filiacaoMae,
          profissao : snapshot._data.profissao,
          cpf : snapshot._data.cpf,
          rg : snapshot._data.rg,
          rgEmitidaUf : snapshot._data.rgEmitidaUf,
          logradouro : snapshot._data.logradouro,
          numero : snapshot._data.numero,
          complemento : snapshot._data.complemento,
          bairro : snapshot._data.bairro,
          estado : snapshot._data.estado,
          cep : snapshot._data.cep,
          nomeConjuge : snapshot._data.nomeConjuge, 
          nacionalidadeConjuge : snapshot._data.nacionalidadeConjuge,
          profissaoConjuge : snapshot._data.profissaoConjuge,
          cpfConjuge : snapshot._data.cpfConjuge,
          rgConjuge : snapshot._data.rgConjuge,
          rgEmitidaUfConjuge : snapshot._data.rgEmitidaUfConjuge,
          filiacaoPaiConjuge : snapshot._data.filiacaoPaiConjuge,
          filiacaoMaeConjuge : snapshot._data.filiacaoMaeConjuge,
          identImovelImovel : snapshot._data.identImovelImovel,
          identImovelUsoImovel : snapshot._data.identImovelUsoImovel,
          identImovelLogradouro : snapshot._data.identImovelLogradouro,
          identImovelNumero : snapshot._data.identImovelNumero,
          identImovelComplemento : snapshot._data.identImovelComplemento,
          identImovelBairro : snapshot._data.identImovelBairro,
          identImovelCidade : snapshot._data.identImovelCidade,
          identImovelEstado : snapshot._data.identImovelEstado,
          identImovelCep : snapshot._data.identImovelCep,
          identImovelQuadra : snapshot._data.identImovelQuadra,
          identImovelLote : snapshot._data.identImovelLote,
          dadosImovelSabeNomeRegistroImovel : snapshot._data.dadosImovelSabeNomeRegistroImovel,
          dadosImovelNomeQuemRegistroImovel : snapshot._data.dadosImovelNomeQuemRegistroImovel,
          dadosImovelPossuiCadastroPrefeitura : snapshot._data.dadosImovelPossuiCadastroPrefeitura,
          dadosImovelAdiquiriuUndImobiliariaPor : snapshot._data.dadosImovelAdiquiriuUndImobiliariaPor,
          dadosImovelQualFormaAdquiriuUnidadeImobiliaria : snapshot._data.dadosImovelQualFormaAdquiriuUnidadeImobiliaria,
          dadosImovelDocumentoPossueComprovarPosse : snapshot._data.dadosImovelDocumentoPossueComprovarPosse,
          dadosImovelDataInicioPosse : snapshot._data.dadosImovelDataInicioPosse,
          dadosImovelOcupanteConcessionarioOuForeiroOutroImovelUrbanoOuRural : snapshot._data.dadosImovelOcupanteConcessionarioOuForeiroOutroImovelUrbanoOuRural,
          dadosImovelOcupanteJaFoiBeneficiadoComTituloDePosse : snapshot._data.dadosImovelOcupanteJaFoiBeneficiadoComTituloDePosse,
          condPagamentoValorServicos : snapshot._data.condPagamentoValorServicos,
          condPagamentoNumeroParcelas : snapshot._data.condPagamentoNumeroParcelas,
          condPagamentoValorParcela : snapshot._data.condPagamentoValorParcela,
          condPagamentoDataVencPrimeiraParcela : snapshot._data.condPagamentoDataVencPrimeiraParcela,
          condPagamentoDiaVencDemaisParcelas : snapshot._data.condPagamentoDiaVencDemaisParcelas,
          condPagamentoFormaPagamento : snapshot._data.condPagamentoFormaPagamento
        })
      } catch (error) {
        console.log(error)
      }
    })

  }

  iniciaCadastro(){
    const salvaCadastro = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual).set({
      cadastro:true
    },{merge:true})
    this.setState({cadastro:true})
  }

  _salvaDados(campo, dados){
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)

    if (campo == 'ocupante'){
      salvaDados.set({ocupante : dados},{merge:true})
    }
    if (campo == 'tamanhoLoteRequerente'){
      salvaDados.set({tamanhoLoteRequerente : dados},{merge:true})
    }
    if (campo == 'tamanhoLoteExConjuge'){
      salvaDados.set({tamanhoLoteExConjuge : dados},{merge:true})
    }
    if (campo == 'filiacaoPai'){
      salvaDados.set({filiacaoPai : dados},{merge:true})
    }
    if (campo == 'filiacaoMae'){
      salvaDados.set({filiacaoMae : dados},{merge:true})
    }
    if (campo == 'profissao'){
      salvaDados.set({profissao : dados},{merge:true})
    }
    if (campo == 'cpf'){
      salvaDados.set({cpf : dados},{merge:true})
    }
    if (campo == 'rg'){
      salvaDados.set({rg : dados},{merge:true})
    }
    if (campo == 'rgEmitidaUf'){
      salvaDados.set({rgEmitidaUf : dados},{merge:true})
    }
    if (campo == 'logradouro'){
      salvaDados.set({logradouro : dados},{merge:true})
    }
    if (campo == 'numero'){
      salvaDados.set({numero : dados},{merge:true})
    }
    if (campo == 'complemento'){
      salvaDados.set({complemento : dados},{merge:true})
    }
    if (campo == 'bairro'){
      salvaDados.set({bairro : dados},{merge:true})
    }
    if (campo == 'estado'){
      salvaDados.set({estado : dados},{merge:true})
    }
    if (campo == 'cep'){
      salvaDados.set({cep : dados},{merge:true})
    }
    if (campo == 'nomeConjuge'){
      salvaDados.set({nomeConjuge : dados},{merge:true})
    }
    if (campo == 'nacionalidadeConjuge'){
      salvaDados.set({nacionalidadeConjuge : dados},{merge:true})
    }
    if (campo == 'profissaoConjuge'){
      salvaDados.set({profissaoConjuge : dados},{merge:true})
    }
    if (campo == 'cpfConjuge'){
      salvaDados.set({cpfConjuge : dados},{merge:true})
    }
    if (campo == 'rgConjuge'){
      salvaDados.set({rgConjuge : dados},{merge:true})
    }
    if (campo == 'rgEmitidaUfConjuge'){
      salvaDados.set({rgEmitidaUfConjuge : dados},{merge:true})
    }
    if (campo == 'filiacaoPaiConjuge'){
      salvaDados.set({filiacaoPaiConjuge : dados},{merge:true})
    }
    if (campo == 'filiacaoMaeConjuge'){
      salvaDados.set({filiacaoMaeConjuge : dados},{merge:true})
    }
    if (campo == 'identImovelLogradouro'){
      salvaDados.set({identImovelLogradouro : dados},{merge:true})
    }
    if (campo == 'identImovelNumero'){
      salvaDados.set({identImovelNumero : dados},{merge:true})
    }
    if (campo == 'identImovelComplemento'){
      salvaDados.set({identImovelComplemento : dados},{merge:true})
    }
    if (campo == 'identImovelBairro'){
      salvaDados.set({identImovelBairro : dados},{merge:true})
    }
    if (campo == 'identImovelCidade'){
      salvaDados.set({identImovelCidade : dados},{merge:true})
    }
    if (campo == 'identImovelEstado'){
      salvaDados.set({identImovelEstado : dados},{merge:true})
    }
    if (campo == 'identImovelCep'){
      salvaDados.set({identImovelCep : dados},{merge:true})
    }
    if (campo == 'identImovelQuadra'){
      salvaDados.set({identImovelQuadra : dados},{merge:true})
    }
    if (campo == 'identImovelLote'){
      salvaDados.set({identImovelLote : dados},{merge:true})
    }
    if (campo == 'dadosImovelNomeQuemRegistroImovel'){
      salvaDados.set({dadosImovelNomeQuemRegistroImovel : dados},{merge:true})
    }
    if (campo == 'dadosImovelQualFormaAdquiriuUnidadeImobiliaria'){
      salvaDados.set({dadosImovelQualFormaAdquiriuUnidadeImobiliaria : dados},{merge:true})
    }
    if (campo == 'dadosImovelDataInicioPosse'){
      salvaDados.set({dadosImovelDataInicioPosse : dados},{merge:true})
    }
    if (campo == 'condPagamentoValorServicos'){
      salvaDados.set({condPagamentoValorServicos : dados},{merge:true})
    }
    if (campo == 'condPagamentoNumeroParcelas'){
      salvaDados.set({condPagamentoNumeroParcelas : dados},{merge:true})
    }
    if (campo == 'condPagamentoValorParcela'){
      salvaDados.set({condPagamentoValorParcela : dados},{merge:true})
    }
    if (campo == 'condPagamentoDataVencPrimeiraParcela'){
      salvaDados.set({condPagamentoDataVencPrimeiraParcela : dados},{merge:true})
    }
    if (campo == 'condPagamentoDiaVencDemaisParcelas'){
      salvaDados.set({condPagamentoDiaVencDemaisParcelas : dados},{merge:true})
    }

  }


  async changeEstadoCivil(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({estadoCivil : value})
    salvaDados.set({
      estadoCivil : this.state.estadoCivil
    },{merge:true})
  }
  
  async changeDivorcioAQuemCoubeImovel(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({divorcioAQuemCoubeImovel : value})
    salvaDados.set({
      divorcioAQuemCoubeImovel : this.state.divorcioAQuemCoubeImovel
    },{merge:true})
  }

  async changeIdentImovelImovel(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({ identImovelImovel : value})
    salvaDados.set({
      identImovelImovel : this.state.identImovelImovel
    },{merge:true})
  }

  async changeIdentImovelUsoImovel(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({ identImovelUsoImovel : value})
    salvaDados.set({
      identImovelUsoImovel : this.state.identImovelUsoImovel
    },{merge:true})
  }

  async changeDadosImovelSabeNomeRegistroImovel(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({ dadosImovelSabeNomeRegistroImovel : value})
    salvaDados.set({
      dadosImovelSabeNomeRegistroImovel : this.state.dadosImovelSabeNomeRegistroImovel
    },{merge:true})
  }

  async changeDadosImovelPossuiCadastroPrefeitura(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({ dadosImovelPossuiCadastroPrefeitura : value})
    salvaDados.set({
      dadosImovelPossuiCadastroPrefeitura : this.state.dadosImovelPossuiCadastroPrefeitura
    },{merge:true})
  }

  async changeDadosImovelAdiquiriuUndImobiliariaPor(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({ dadosImovelAdiquiriuUndImobiliariaPor : value})
    salvaDados.set({
      dadosImovelAdiquiriuUndImobiliariaPor : this.state.dadosImovelAdiquiriuUndImobiliariaPor
    },{merge:true})
  }

  async changeDadosImovelDocumentoPossueComprovarPosse(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({ dadosImovelDocumentoPossueComprovarPosse : value})
    salvaDados.set({
      dadosImovelDocumentoPossueComprovarPosse : this.state.dadosImovelDocumentoPossueComprovarPosse
    },{merge:true})
  }

  async changeDadosImovelOcupanteConcessionarioOuForeiroOutroImovelUrbanoOuRural(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({ dadosImovelOcupanteConcessionarioOuForeiroOutroImovelUrbanoOuRural : value})
    salvaDados.set({
      dadosImovelOcupanteConcessionarioOuForeiroOutroImovelUrbanoOuRural : this.state.dadosImovelOcupanteConcessionarioOuForeiroOutroImovelUrbanoOuRural
    },{merge:true})
  }

  async changeDadosImovelOcupanteJaFoiBeneficiadoComTituloDePosse(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({ dadosImovelOcupanteJaFoiBeneficiadoComTituloDePosse : value})
    salvaDados.set({
      dadosImovelOcupanteJaFoiBeneficiadoComTituloDePosse : this.state.dadosImovelOcupanteJaFoiBeneficiadoComTituloDePosse
    },{merge:true})
  }

  async changeCondPagamentoFormaPagamento(value: string) {
    const salvaDados = firebase.firestore().collection('questionarios').doc(this.props.questionarioAtual)
    await this.setState({ condPagamentoFormaPagamento : value})
    salvaDados.set({
      condPagamentoFormaPagamento : this.state.condPagamentoFormaPagamento
    },{merge:true})
  }



  render() {
    return (
      <View>
        {!this.state.cadastro ? 
        <View style={styles.containerCad}>
          <Text style={styles.textCad}>Deseja iniciar o cadastro?</Text>
          <View style={styles.contentBtnCad}>
            <TouchableOpacity style={styles.buttonCad} onPress={()=>{this.iniciaCadastro()}}>
              <Text style={styles.textButton2}>Sim</Text>
            </TouchableOpacity>
          </View>
        </View>
        :
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.container}>


          <Text style={styles.textLsMoradores}>Cadastro</Text>


          <View>
            <Text style={styles.text}>Ocupante:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.ocupante}
              onChangeText={ ocupante => this.setState({ ocupante })}
              onKeyPress={()=>this._salvaDados('ocupante', this.state.ocupante)}
              />
          </View>

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
                  <Picker.Item label="Solteiro(a)" value="solteiro(a)" />
                  <Picker.Item label="Casado(a)" value="casado(a)" />
                  <Picker.Item label="Divorciado(a)" value="divorciado(a)" />
                  <Picker.Item label="Viúvo(a)" value="viuvo(a)" />
                  <Picker.Item label="União estável" value="uniaestavel" />
                  <Picker.Item label="Separado(a) Judicialmente" value="separado(a)judicialmente" />
                </Picker>
              </Form> 
            </View>
          </View>
          

          {(this.state.estadoCivil == 'divorciado(a)') ?
          <View>
            <Text style={styles.text}>No divórcio a quem coube o imóvel:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.divorcioAQuemCoubeImovel}
                  onValueChange={
                    this.changeDivorcioAQuemCoubeImovel.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Requerente " value="requerente" />
                  <Picker.Item label="Ex-conjuge " value="exconjuge" />
                  <Picker.Item label="Ambos" value="ambos" />
                </Picker>
              </Form> 
            </View>
          </View>
        : null }

        {(this.state.divorcioAQuemCoubeImovel == 'ambos') ?
          <View>
            <Text style={styles.text}>Qual a tamanho do lote Requerente (m2):</Text>
              <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.tamanhoLoteRequerente}
              onChangeText={ tamanhoLoteRequerente => this.setState({ tamanhoLoteRequerente })}
              onKeyPress={()=>this._salvaDados('tamanhoLoteRequerente', this.state.tamanhoLoteRequerente)}
              />
          </View>
        : null }

        {(this.state.divorcioAQuemCoubeImovel == 'ambos') ?
          <View>
            <Text style={styles.text}>Qual a tamanho do lote para Ex-cônjuge (m2):</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.tamanhoLoteExConjuge}
              onChangeText={ tamanhoLoteExConjuge => this.setState({ tamanhoLoteExConjuge })}
              onKeyPress={()=>this._salvaDados('tamanhoLoteExConjuge', this.state.tamanhoLoteExConjuge)}
              />
          </View>
        : null }

          <View>
            <Text style={styles.text}>Filiação / Pai:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.filiacaoPai}
              onChangeText={ filiacaoPai => this.setState({ filiacaoPai })}
              onKeyPress={()=>this._salvaDados('filiacaoPai', this.state.filiacaoPai)}
              />
          </View>
          
          <View>
            <Text style={styles.text}>Filiação / Mãe:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.filiacaoMae}
              onChangeText={ filiacaoMae => this.setState({ filiacaoMae })}
              onKeyPress={()=>this._salvaDados('filiacaoMae', this.state.filiacaoMae)}
              />
          </View>
          <View>
            <Text style={styles.text}>Profissão:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.profissao}
              onChangeText={ profissao => this.setState({ profissao })}
              onKeyPress={()=>this._salvaDados('profissao', this.state.profissao)}
              />
          </View>
          <View>
            <Text style={styles.text}>CPF:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.cpf}
              onChangeText={ cpf => this.setState({ cpf })}
              onKeyPress={()=>this._salvaDados('cpf', this.state.cpf)}
              />
          </View>
          <View>
            <Text style={styles.text}>RG / Número:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.rg}
              onChangeText={ rg => this.setState({ rg })}
              onKeyPress={()=>this._salvaDados('rg', this.state.rg)}
              />
          </View>
          <View>
            <Text style={styles.text}>RG / emitida/UF:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.rgEmitidaUf}
              onChangeText={ rgEmitidaUf => this.setState({ rgEmitidaUf })}
              onKeyPress={()=>this._salvaDados('rgEmitidaUf', this.state.rgEmitidaUf)}
              />
          </View>
          <View>
            <Text style={styles.text}>Logradouro:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.logradouro}
              onChangeText={ logradouro => this.setState({ logradouro })}
              onKeyPress={()=>this._salvaDados('logradouro', this.state.logradouro)}
              />
          </View>
          <View>
            <Text style={styles.text}>Número:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.numero}
              onChangeText={ numero => this.setState({ numero })}
              onKeyPress={()=>this._salvaDados('numero', this.state.numero)}
              />
          </View>
          <View>
            <Text style={styles.text}>Complemento:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.complemento}
              onChangeText={ complemento => this.setState({ complemento })}
              onKeyPress={()=>this._salvaDados('complemento', this.state.complemento)}
              />
          </View>
          <View>
            <Text style={styles.text}>Bairro:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.bairro}
              onChangeText={ bairro => this.setState({ bairro })}
              onKeyPress={()=>this._salvaDados('bairro', this.state.bairro)}
              />
          </View>
          <View>
            <Text style={styles.text}>Estado:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.estado}
              onChangeText={ estado => this.setState({ estado })}
              onKeyPress={()=>this._salvaDados('estado', this.state.estado)}
              />
          </View>
          <View>
            <Text style={styles.text}>Cep:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.cep}
              onChangeText={ cep => this.setState({ cep })}
              onKeyPress={()=>this._salvaDados('cep', this.state.cep)}
              />
          </View>

          <Text style={styles.textLsMoradores}>Dados Cônjuge:</Text>

          <View>
            <Text style={styles.text}>Nome (cônjuge):</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.nomeConjuge}
              onChangeText={ nomeConjuge => this.setState({ nomeConjuge })}
              onKeyPress={()=>this._salvaDados('nomeConjuge', this.state.nomeConjuge)}
              />
          </View>
          <View>
            <Text style={styles.text}>Nacionalidade (cônjuge):</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.nacionalidadeConjuge}
              onChangeText={ nacionalidadeConjuge => this.setState({ nacionalidadeConjuge })}
              onKeyPress={()=>this._salvaDados('nacionalidadeConjuge', this.state.nacionalidadeConjuge)}
              />
          </View>
          <View>
            <Text style={styles.text}>Profissão (cônjuge):</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.profissaoConjuge}
              onChangeText={ profissaoConjuge => this.setState({ profissaoConjuge })}
              onKeyPress={()=>this._salvaDados('profissaoConjuge', this.state.profissaoConjuge)}
              />
          </View>
          <View>
            <Text style={styles.text}>CPF (cônjuge):</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.cpfConjuge}
              onChangeText={ cpfConjuge => this.setState({ cpfConjuge })}
              onKeyPress={()=>this._salvaDados('cpfConjuge', this.state.cpfConjuge)}
              />
          </View>
          <View>
            <Text style={styles.text}>RG / Número (cônjuge):</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.rgConjuge}
              onChangeText={ rgConjuge => this.setState({ rgConjuge })}
              onKeyPress={()=>this._salvaDados('rgConjuge', this.state.rgConjuge)}
              />
          </View>
          <View>
            <Text style={styles.text}>RG / emitida/UF (cônjuge):</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.rgEmitidaUfConjuge}
              onChangeText={ rgEmitidaUfConjuge => this.setState({ rgEmitidaUfConjuge })}
              onKeyPress={()=>this._salvaDados('rgEmitidaUfConjuge', this.state.rgEmitidaUfConjuge)}
              />
          </View>
          <View>
            <Text style={styles.text}>Filiação / Pai (cônjuge):</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.filiacaoPaiConjuge}
              onChangeText={ filiacaoPaiConjuge => this.setState({ filiacaoPaiConjuge })}
              onKeyPress={()=>this._salvaDados('filiacaoPaiConjuge', this.state.filiacaoPaiConjuge)}
              />
          </View>
          
          <View>
            <Text style={styles.text}>Filiação / Mãe (cônjuge):</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.filiacaoMaeConjuge}
              onChangeText={ filiacaoMaeConjuge => this.setState({ filiacaoMaeConjuge })}
              onKeyPress={()=>this._salvaDados('filiacaoMaeConjuge', this.state.filiacaoMaeConjuge)}
              />
          </View>

          <Text style={styles.textLsMoradores}>Identificação do Imóvel:</Text>
          
          <View>
            <Text style={styles.text}>Imóvel:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.identImovelImovel}
                  onValueChange={
                    this.changeIdentImovelImovel.bind(this)
                  }
                >

                  <Picker.Item label="" value="" />
                  <Picker.Item label="Público" value="publico" />
                  <Picker.Item label="Privado" value="privado" />
                </Picker>
              </Form> 
            </View>
          </View>

          <View>
            <Text style={styles.text}>Uso do Imóvel:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.identImovelUsoImovel}
                  onValueChange={
                    this.changeIdentImovelUsoImovel.bind(this)
                  }
                >

                  <Picker.Item label="" value="" />
                  <Picker.Item label="Residêncial" value="residencial" />
                  <Picker.Item label="Não residêncial" value="naoresidencial" />
                  <Picker.Item label="Misto" value="misto" />
                </Picker>
              </Form> 
            </View>
          </View>

          <View>
            <Text style={styles.text}>Logradouro:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.identImovelLogradouro}
              onChangeText={ identImovelLogradouro => this.setState({ identImovelLogradouro })}
              onKeyPress={()=>this._salvaDados('identImovelLogradouro', this.state.identImovelLogradouro)}
              />
          </View>
          <View>
            <Text style={styles.text}>Número:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.identImovelNumero}
              onChangeText={ identImovelNumero => this.setState({ identImovelNumero })}
              onKeyPress={()=>this._salvaDados('identImovelNumero', this.state.identImovelNumero)}
              />
          </View>
          <View>
            <Text style={styles.text}>Complemento:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.identImovelComplemento}
              onChangeText={ identImovelComplemento => this.setState({ identImovelComplemento })}
              onKeyPress={()=>this._salvaDados('identImovelComplemento', this.state.identImovelComplemento)}
              />
          </View>
          <View>
            <Text style={styles.text}>Bairro:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.identImovelBairro}
              onChangeText={ identImovelBairro => this.setState({ identImovelBairro })}
              onKeyPress={()=>this._salvaDados('identImovelBairro', this.state.identImovelBairro)}
              />
          </View>
          <View>
            <Text style={styles.text}>Cidade:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.identImovelCidade}
              onChangeText={ identImovelCidade => this.setState({ identImovelCidade })}
              onKeyPress={()=>this._salvaDados('identImovelCidade', this.state.identImovelCidade)}
              />
          </View>
          <View>
            <Text style={styles.text}>Estado:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.identImovelEstado}
              onChangeText={ identImovelEstado => this.setState({ identImovelEstado })}
              onKeyPress={()=>this._salvaDados('identImovelEstado', this.state.identImovelEstado)}
              />
          </View>
          <View>
            <Text style={styles.text}>Cep:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.identImovelCep}
              onChangeText={ identImovelCep => this.setState({ identImovelCep })}
              onKeyPress={()=>this._salvaDados('identImovelCep', this.state.identImovelCep)}
              />
          </View>
          <View>
            <Text style={styles.text}>Quadra:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.identImovelQuadra}
              onChangeText={ identImovelQuadra => this.setState({ identImovelQuadra })}
              onKeyPress={()=>this._salvaDados('identImovelQuadra', this.state.identImovelQuadra)}
              />
          </View>
          <View>
            <Text style={styles.text}>Lote:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.identImovelLote}
              onChangeText={ identImovelLote => this.setState({ identImovelLote })}
              onKeyPress={()=>this._salvaDados('identImovelLote', this.state.identImovelLote)}
              />
          </View>
          

          <Text style={styles.textLsMoradores}>Dados do Imóvel:</Text>

          <View>
            <Text style={styles.text}>Sabe informar em nome de qual pessoal o imóvel está registrado cartório de registro de imóveis:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.dadosImovelSabeNomeRegistroImovel}
                  onValueChange={
                    this.changeDadosImovelSabeNomeRegistroImovel.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Sim" value="sim" />
                  <Picker.Item label="Não" value="nao" />
                </Picker>
              </Form> 
            </View>
          </View>    

          {this.state.dadosImovelSabeNomeRegistroImovel == 'sim' ? 
            <View>
              <Text style={styles.text}>Nome de quem:</Text>
              <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.dadosImovelNomeQuemRegistroImovel}
              onChangeText={ dadosImovelNomeQuemRegistroImovel => this.setState({ dadosImovelNomeQuemRegistroImovel })}
              onKeyPress={()=>this._salvaDados('dadosImovelNomeQuemRegistroImovel', this.state.dadosImovelNomeQuemRegistroImovel)}
              />
            </View>
          : null }

          <View>
            <Text style={styles.text}>Possui cadastro na prefeitura:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.dadosImovelPossuiCadastroPrefeitura}
                  onValueChange={
                    this.changeDadosImovelPossuiCadastroPrefeitura.bind(this)
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
            <Text style={styles.text}>Ocupante adquiriu a unidade imobiliário por:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.dadosImovelAdiquiriuUndImobiliariaPor}
                  onValueChange={
                    this.changeDadosImovelAdiquiriuUndImobiliariaPor.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Invasão" value="invasao" />
                  <Picker.Item label="Compra" value="compra" />
                  <Picker.Item label="Doação" value="doacao" />
                  <Picker.Item label="Herança" value="heranca" />
                  <Picker.Item label="Outro" value="outro" />
                </Picker>
              </Form> 
            </View>
          </View>   

          {this.state.dadosImovelAdiquiriuUndImobiliariaPor == 'outro' ?
            <View>
              <Text style={styles.text}>Qual forma adquiriu a unidade imobiliário:</Text>
              <TextInput 
                style={styles.Input}
                underlineColorAndroid="transparent"
                value={this.state.dadosImovelQualFormaAdquiriuUnidadeImobiliaria}
                onChangeText={ dadosImovelQualFormaAdquiriuUnidadeImobiliaria => this.setState({ dadosImovelQualFormaAdquiriuUnidadeImobiliaria })}
                onKeyPress={()=>this._salvaDados('dadosImovelQualFormaAdquiriuUnidadeImobiliaria', this.state.dadosImovelQualFormaAdquiriuUnidadeImobiliaria)}
                />
            </View>
          : null}

          <View>
            <Text style={styles.text}>Documentos que possue para comprovar a posse:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.dadosImovelDocumentoPossueComprovarPosse}
                  onValueChange={
                    this.changeDadosImovelDocumentoPossueComprovarPosse.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Não tenho documentos" value="natenho" />
                  <Picker.Item label="Contrato de compra e venda" value="compraevenda" />
                  <Picker.Item label="Contratos de cessão de posse" value="cessaoposse" />
                  <Picker.Item label="Recibo" value="recibo" />
                  <Picker.Item label="Guias de pagamentos IPTU" value="guiaiptu" />
                  <Picker.Item label="Conta água/energia" value="contaaguaenergia" />
                  <Picker.Item label="Formal de partilha" value="docformalpartilha" />
                  <Picker.Item label="Acordo judicial" value="acordojudicial" />
                  <Picker.Item label="Outros documentos públicos ou particular" value="outrosdocpublicoouparticular" />
                </Picker>
              </Form> 
            </View>
          </View>  

          <View>
            <Text style={styles.text}>Data de ínicio da posse:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.dadosImovelDataInicioPosse}
              onChangeText={ dadosImovelDataInicioPosse => this.setState({ dadosImovelDataInicioPosse })}
              onKeyPress={()=>this._salvaDados('dadosImovelDataInicioPosse', this.state.dadosImovelDataInicioPosse)}
              />
          </View> 

          <View>
            <Text style={styles.text}>O ocupante é concessionário ou foreiro de outro imóvel urbano ou rural:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.dadosImovelOcupanteConcessionarioOuForeiroOutroImovelUrbanoOuRural}
                  onValueChange={
                    this.changeDadosImovelOcupanteConcessionarioOuForeiroOutroImovelUrbanoOuRural.bind(this)
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
            <Text style={styles.text}>O Ocupante já foi beneficiado, com título de legitimação de posse ou fundiária de imóvel com a mesma finalidade:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.dadosImovelOcupanteJaFoiBeneficiadoComTituloDePosse}
                  onValueChange={
                    this.changeDadosImovelOcupanteJaFoiBeneficiadoComTituloDePosse.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Sim" value="sim" />
                  <Picker.Item label="Não" value="nao" />
                </Picker>
              </Form> 
            </View>
          </View>  


          <Text style={styles.textLsMoradores}>Condições de Pagamento:</Text>

          <View>
            <Text style={styles.text}>Valor dos serviços:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.condPagamentoValorServicos}
              onChangeText={ condPagamentoValorServicos => this.setState({ condPagamentoValorServicos })}
              onKeyPress={()=>this._salvaDados('condPagamentoValorServicos', this.state.condPagamentoValorServicos)}
              />
          </View>
          <View>
            <Text style={styles.text}>Número de parcelas:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.condPagamentoNumeroParcelas}
              onChangeText={ condPagamentoNumeroParcelas => this.setState({ condPagamentoNumeroParcelas })}
              onKeyPress={()=>this._salvaDados('condPagamentoNumeroParcelas', this.state.condPagamentoNumeroParcelas)}
              />
          </View>
          <View>
            <Text style={styles.text}>Valor da parcela:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.condPagamentoValorParcela}
              onChangeText={ condPagamentoValorParcela => this.setState({ condPagamentoValorParcela })}
              onKeyPress={()=>this._salvaDados('condPagamentoValorParcela', this.state.condPagamentoValorParcela)}
              />
          </View>
          <View>
            <Text style={styles.text}>Data vencimento primeira parcela:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.condPagamentoDataVencPrimeiraParcela}
              onChangeText={ condPagamentoDataVencPrimeiraParcela => this.setState({ condPagamentoDataVencPrimeiraParcela })}
              onKeyPress={()=>this._salvaDados('condPagamentoDataVencPrimeiraParcela', this.state.condPagamentoDataVencPrimeiraParcela)}
              />
          </View>
          <View>
            <Text style={styles.text}>Dia vencimento demais parcelas:</Text>
            <TextInput 
              style={styles.Input}
              underlineColorAndroid="transparent"
              value={this.state.condPagamentoDiaVencDemaisParcelas}
              onChangeText={ condPagamentoDiaVencDemaisParcelas => this.setState({ condPagamentoDiaVencDemaisParcelas })}
              onKeyPress={()=>this._salvaDados('condPagamentoDiaVencDemaisParcelas', this.state.condPagamentoDiaVencDemaisParcelas)}
              />
          </View>


          <View>
            <Text style={styles.text}>Forma de pagamento:</Text>
            <View style={styles.Select}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.condPagamentoFormaPagamento}
                  onValueChange={
                    this.changeCondPagamentoFormaPagamento.bind(this)
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Carnê" value="carne" />
                  <Picker.Item label="Cartão de crédito" value="cartaocredito" />
                </Picker>
              </Form> 
            </View>
          </View>  



        </ScrollView>//fim container

        }
      </View>
    )

  }
}

