import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { fetchCategorias, fetchContas, fetchMovimentos, fetchUsuarios} from "./actions";
import ContasContainer from "./containers/ContasContainer";
import CategoriasContainer from './containers/CategoriasContainer';
import MovimentosContainer from './containers/MovimentosContainer';
import UsuariosContainer from './containers/UsuariosContainer';

class WeCash extends Component {

    componentWillMount(){
        this.props.onFetchContas();
        this.props.onFetchCategorias();
        this.props.onFetchMovimentos();
        this.props.onFetchUsuarios();
    }

    render() {
        const { contas, categorias, movimentos, usuarios } = this.props;
        return (
            <Fragment>
                <Route exact path="/" render={() => <div className="container">WeCash! Desde de 2012.</div> }/>
                <Route path="/contas" render={() => <ContasContainer contas={contas}/>}/>
                <Route path="/categorias" render={() => <CategoriasContainer categorias={categorias}/>}/>
                <Route path="/movimentos" render={() => <MovimentosContainer movimentos={movimentos}/>}/>
                <Route path="/usuarios" render={() => <UsuariosContainer usuarios={usuarios} />} />
            </Fragment>
        );
    }
}

const mapStateToProps = ({contas, categorias, movimentos, usuarios}, ownProps) => ({
    contas, categorias, movimentos, usuarios, ...ownProps
});

const mapDispacthToProps = dispatch => ({
    onFetchContas: () => dispatch(fetchContas()),
    onFetchCategorias: () => dispatch(fetchCategorias()),
    onFetchMovimentos: () => dispatch(fetchMovimentos()),
    onFetchUsuarios: () => dispatch(fetchUsuarios())
});

export default withRouter(connect(mapStateToProps, mapDispacthToProps)(WeCash));
