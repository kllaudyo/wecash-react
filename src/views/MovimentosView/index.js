import React, {Component, Fragment} from 'react';
import {
    Container,
    Table,
    Breadcrumb,
    BreadcrumbItem,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class MovimentosView extends Component{

    render(){
        const { movimentos } = this.props;
        return (
            <Fragment>
                <Container style={{marginTop:16}}>
                    <Breadcrumb>
                        <BreadcrumbItem active><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Movimentos</BreadcrumbItem>
                    </Breadcrumb>

                    <Nav tabs style={{marginBottom:16}}>
                        <NavItem>
                            <NavLink>Janeiro</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Fevereiro</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Março</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="active">Abril</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Maio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Junho</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Julho</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Agosto</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Setembro</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Outubro</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Novembro</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Dezembro</NavLink>
                        </NavItem>
                    </Nav>

                    <Table className="table-bordered table-hover">
                        <tbody>
                        {movimentos.map(m => (
                            <tr key={m.id_movimento}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>{m.dt_previsao}</td>
                                <td className="w-50">{m.ds_movimento}</td>
                                <td>{m.ds_categoria}</td>
                                <td>{m.ds_conta}</td>
                                <td>{m.vl_previsto}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Container>
            </Fragment>
        );
    }

}

export default MovimentosView;