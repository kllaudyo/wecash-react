import React, {Fragment} from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const ContaModal = ({conta = {}, isOpen, onToggle, onSave, onCancel, onUpdate}) => {
    const { ds_conta = "" } = conta;
    return (
        <Fragment>
            <Modal isOpen={isOpen} >
                <ModalHeader>Conta</ModalHeader>
                <ModalBody>
                    <div className="well">
                        <Form>
                            <FormGroup>
                                <Label>Descrição:</Label>
                                <Input
                                    type="text"
                                    name="ds_conta"
                                    id="ds_conta"
                                    placeholder="Descrição da conta. Ex: Bradesco"
                                    value={ds_conta}
                                    onChange={onUpdate}
                                />
                            </FormGroup>
                        </Form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={onCancel}>Cancelar</Button>
                    <Button color="primary" onClick={onSave}>Salvar</Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
};

export default ContaModal;