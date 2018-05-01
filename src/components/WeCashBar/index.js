import React from 'react';
import {NavLink as Link} from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
} from 'reactstrap';
import UpdateBlocker from "../UpdateBlocker";

const WeCashBar = props =>
    <Navbar color="dark" dark expand="md" fixed={"fixed"}>
        <Container>
            <NavbarBrand href="/">WeCash</NavbarBrand>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2 form-control-sm" type="search" placeholder="Filtrar..." />
            </form>
            <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Adicionar
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Movimento
                        </DropdownItem>
                        <DropdownItem>
                            Conta
                        </DropdownItem>
                        <DropdownItem>
                            Categoria
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UpdateBlocker>
                    <NavItem>
                        <NavLink tag={Link} to="/movimentos" activeClassName="active">Movimentos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/contas">Contas</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/categorias">Categorias</NavLink>
                    </NavItem>
                </UpdateBlocker>
            </Nav>
        </Container>
    </Navbar>;

export default WeCashBar;