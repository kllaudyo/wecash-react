import React, {Component, Fragment} from 'react';
import {
    Container,
    Table,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';

class UsuariosView extends Component{

    render(){
        const { usuarios } = this.props;
        return (
            <Fragment>
                <Container style={{marginTop:16}}>
                    <Breadcrumb>
                        <BreadcrumbItem active><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Usuarios</BreadcrumbItem>
                    </Breadcrumb>
                    <Table className="table-bordered table-hover">
                        <tbody>
                        {usuarios.map(u => (
                            <tr>
                                <td>{u.nm_usuario}</td>
                                <td>{u.nm_email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Container>
            </Fragment>
        );
    }

}

export default UsuariosView;