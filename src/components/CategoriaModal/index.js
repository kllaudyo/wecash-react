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

const CategoriaModal = ({categoria = {}, isOpen, onToggle, onSave, onCancel, onUpdate}) => {
    const { ds_categoria = "", tp_categoria="C" } = categoria;
    return (
        <Fragment>
            <Modal isOpen={isOpen} >
                <ModalHeader>Categoria</ModalHeader>
                <ModalBody>
                    <div className="well">
                        <Form>
                            <FormGroup>
                                <Label>Descrição:</Label>
                                <Input
                                    type="text"
                                    name="ds_categoria"
                                    id="ds_categoria"
                                    placeholder="Descrição da categoria. Ex: Habitação"
                                    value={ds_categoria}
                                    onChange={onUpdate}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="tp_categoria">Tipo da categoria:</Label>
                                <div>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" id="tp_categoria" name="tp_categoria" />
                                            Crédito
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" id="tp_categoria" name="tp_categoria" />
                                            Débito
                                        </Label>
                                    </FormGroup>
                                </div>
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

export default CategoriaModal;