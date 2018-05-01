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
import IconAdd from 'react-icons/lib/md/add-circle';
import IconAccount from 'react-icons/lib/md/account-circle';
import UpdateBlocker from "../UpdateBlocker/";

const WeCashBar = ({onOpenModalConta}) =>
    <Navbar color="dark" dark expand="md" fixed={"fixed"}>
        <Container>
            <NavbarBrand href="/">WeCash</NavbarBrand>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2 form-control-sm" type="search" placeholder="Filtrar..." />
            </form>
            <Nav className="ml-auto" navbar>
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
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <IconAdd size={24} />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Movimento
                        </DropdownItem>
                        <DropdownItem
                            onClick={onOpenModalConta}
                        >
                            Conta
                        </DropdownItem>
                        <DropdownItem>
                            Categoria
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <IconAccount size={24} />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem tag={Link} to="/usuarios">
                            Usuários
                        </DropdownItem>
                        <DropdownItem>
                            Sair
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Container>
    </Navbar>;

export default WeCashBar;