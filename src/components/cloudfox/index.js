<Nav.Item>
  <Nav.Link href="#dashboard" aria-expanded="false">
    <img src={dashboardIcon} alt="" />
                Dashboard
                <span className="sr-only">(atual)</span>
  </Nav.Link>
</Nav.Item>

{/* Dropdown submenu */ }
<Nav.Item className="with-subitem">
  <Accordion>
    <Accordion.Toggle as={Nav.Item} variant="link" eventKey="0">
      <Nav.Link className="nav-link" href="#submenu-vendas">
        <img src={vendasIcon} alt="" />
                    Vendas
                  </Nav.Link>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <ul id="submenu-vendas" className="submenu pl-5 ml-4">
        <li className="py-2 submenu-list"><a href="/">Visão geral</a></li>
        <li className="py-2 submenu-list"><a href="/">Recuperação</a></li>
        <li className="py-2 submenu-list"><a href="/">Antifraude</a></li>
        <li className="py-2 submenu-list"><a href="/">Rastreamentos</a></li>
      </ul>
    </Accordion.Collapse>
  </Accordion>
</Nav.Item>
  <Nav.Item>
    <Nav.Link className="nav-link" href="/">
      <img src={projetosIcon} alt="" />
                Projetos
              </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="nav-link" href="/">
      <img src={produtosIcon} alt="" />
                Produtos
              </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="nav-link" href="/">
      <img src={financasIcon} alt="" />
                Finanças
              </Nav.Link>
  </Nav.Item>

            {/* Dropdown submenu */ }
<Nav.Item className="with-subitem">
  <Accordion>
    <Accordion.Toggle as={Nav.Item} variant="link" eventKey="1">
      <Nav.Link className="nav-link" href="#submenu-relatorios">
        <img src={relatoriosIcon} alt="" />
                    Relatórios
                  </Nav.Link>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <ul id="submenu-relatorios" className="submenu pl-5 ml-4">
        <li className="sublist py-2"><a href="/">Vendas</a></li>
        <li className="sublist py-2"><a href="/">Acessos</a></li>
        <li className="sublist py-2"><a href="/">Projeções</a></li>
      </ul>
    </Accordion.Collapse>
  </Accordion>
</Nav.Item>
  <Nav.Item className="active">
    <Nav.Link className="nav-link" href="/">
      <img src={afiliadosIcon} alt="" />
                Afiliados
              </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="nav-link" href="/">
      <img src={aplicativosIcon} alt="" />
                Aplicativos
              </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="nav-link" href="/">
      <img src={ferramentasIcon} alt="" />
                Ferramentas
              </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="nav-link" href="/">
      <img src={convitesIcon} alt="" />
                Convites
              </Nav.Link>
  </Nav.Item>

