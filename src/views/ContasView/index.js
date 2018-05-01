import React, {Component, Fragment} from 'react';
import {
    Container,
    Table,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import IconEdit from 'react-icons/lib/md/create';
import IconRemove from 'react-icons/lib/md/delete';

class ContasView extends Component{

    render(){
        const { contas, onOpenModalConta } = this.props;
        return (
            <Fragment>
                <Container style={{marginTop:16}}>
                    <Breadcrumb>
                        <BreadcrumbItem active><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Contas</BreadcrumbItem>
                    </Breadcrumb>
                    <Table className="table-bordered table-hover">
                        <tbody>
                        {contas.map(c => (
                            <tr key={c.id_conta}>
                                <td className="w-100">{c.ds_conta}</td>
                                <td><a onClick={() => onOpenModalConta(c)}><IconEdit /></a></td>
                                <td><IconRemove /></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Container>
            </Fragment>
        );
    }

}

export default ContasView;