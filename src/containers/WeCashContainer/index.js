import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Container, Alert } from 'reactstrap';
import { createConta, editConta } from "../../actions";
import WeCashBar from '../../components/WeCashBar';
import ContaModal from '../../components/ContaModal';

export default WrappedComponent =>
    connect(({error, ownProps}) => ({error, ...ownProps}))(class extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                is_open_modal_conta:false,
                conta:{}
            }
        }

        render () {
            const { conta, is_open_modal_conta } = this.state;
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
                    <WeCashBar
                        onOpenModalConta={this.handleOpenModalConta}
                    />
                    <Container style={{marginTop:16}}>
                        { error!==null && (<Alert color="danger">{error}</Alert>)}
                        <WrappedComponent
                            {...this.props}
                            onOpenModalConta={conta => this.handleOpenModalConta(conta)}
                        />
                    </Container>
                </Fragment>
            )
        }

        handleToggleModalConta = () =>
            this.setState({is_open_modal_conta: !this.state.is_open_modal_conta});

        handleOpenModalConta = (conta={}) =>
            this.setState({is_open_modal_conta:true, conta});

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
