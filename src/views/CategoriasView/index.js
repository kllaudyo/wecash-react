import React, {Component, Fragment} from 'react';
import {
    Container,
    Table,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';

class CategoriasView extends Component{

    render(){
        const { categorias=[] } = this.props;
        return (
            <Fragment>
                <Container style={{marginTop:16}}>
                    <Breadcrumb>
                        <BreadcrumbItem active><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Categorias</BreadcrumbItem>
                    </Breadcrumb>
                    <Table className="table-bordered table-hover">
                        <tbody>
                        {categorias.map(c=>(
                            <tr key={c.id_categoria}>
                                <td>{c.ds_categoria}</td>
                                <td>{c.tp_categoria}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Container>
            </Fragment>
        );
    }

}

export default CategoriasView;