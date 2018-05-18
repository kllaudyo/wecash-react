import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Container, Alert } from 'reactstrap';
import { createConta, editConta } from "../../actions";
import WeCashBar from '../../components/WeCashBar';
import ContaModal from '../../components/ContaModal';
import CategoriaModal from "../../components/CategoriaModal";

export default WrappedComponent =>
    connect(({error, ownProps}) => ({error, ...ownProps}))(class extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                is_open_modal_conta:false,
                is_open_modal_categoria:false,
                conta:{},
                categoria:{}
            }
        }

        render () {
            const { conta, is_open_modal_conta, is_open_modal_categoria, categoria } = this.state;
            const { error } = this.props;
            return (
                <Fragment>
                    <ContaModal
                        conta={conta}
                        isOpen={is_open_modal_conta}
                        onToggle={this.handleToggleModalConta}
                        onSave={this.handleSaveConta}
                        onUpdate={this.handleChangeConta}
                        onCancel={() => {
                            this.handleToggleModalConta();
                        }}
                    />

                    <CategoriaModal
                        categoria={categoria}
                        isOpen={is_open_modal_categoria}
                        onCancel={()=>{
                            this.handleToggleModalCategoria();
                        }}
                    />

                    <WeCashBar
                        onOpenModalConta={this.handleOpenModalConta}
                        onOpenModalCategoria={this.handleOpenModalCategoria}
                    />
                    <Container style={{marginTop:16}}>
                        { error!==null && (<Alert color="danger">{error}</Alert>)}
                        <WrappedComponent
                            {...this.props}
                            onOpenModalConta={conta => this.handleOpenModalConta(conta)}
                            onOpenModalCategoria={categoria => this.handleOpenModalCategoria(categoria)}
                        />
                    </Container>
                </Fragment>
            )
        }

        handleToggleModalConta = () =>
            this.setState({is_open_modal_conta: !this.state.is_open_modal_conta});

        handleToggleModalCategoria = () =>
            this.setState({is_open_modal_categoria: !this.state.is_open_modal_categoria});

        handleOpenModalConta = (conta={}) =>
            this.setState({is_open_modal_conta:true, conta});

        handleOpenModalCategoria = (categoria={}) =>
            this.setState({is_open_modal_categoria: true, categoria});

        handleChangeConta = e => {
            e.persist();
            const ds_conta = e.target.value;
            const { conta } = this.state;
            this.setState((prevState, props) => ({
                conta: {
                    ...conta,
                    ds_conta
                }
            }))
        };

        handleSaveConta = () => {
            const { conta } = this.state;
            if(!conta.id_conta || conta.id_conta === 0)
                this.props.dispatch(createConta(conta));
            else
                this.props.dispatch(editConta(conta));

            this.setState({conta:{}});
            this.handleToggleModalConta();
        };

    });
