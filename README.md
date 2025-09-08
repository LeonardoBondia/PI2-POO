# PI2-POO
# SERVIÇO NACIONAL DE APRENDIZAGEM COMERCIAL  
**SENAC**  

## CURSO DE TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS  

# PROJETO INTEGRADOR: PROVA DE CONCEITO (POC) – SISTEMA DE CADASTRO UNIVERSITÁRIO   

Membros do grupo:
- Paula Rafaela Paes de Vasconcelos
- Leonardo Carvalho Bondia Martins
- Fernando dos Santos Mendes
- Yasmim Lazarim Gomes

## RESUMO  
Este projeto apresenta o desenvolvimento de uma **prova de conceito (POC)** voltada para o gerenciamento de cadastros em uma universidade, com foco em **Alunos, Professores e um Admin** responsável pelo acesso. O sistema inclui modelagem UML e um protótipo funcional que implementa login de administrador, cadastro, listagem, edição e exclusão de registros.  
A aplicação foi desenvolvida em **PHP (backend)**, **MariaDB (banco de dados)** e **HTML/CSS/JavaScript (frontend)**, organizada em containers com **Docker Compose**, seguindo boas práticas de desenvolvimento.  
  

## INTRODUÇÃO  
O objetivo deste projeto é desenvolver uma **prova de conceito (POC)** de um sistema para gerenciamento de cadastros em uma universidade, com foco em **Alunos, Professores e Administardores** responsável pelo acesso.  

O sistema permite **login de administrador**, além de **cadastro** de alunos e professores.  

A modelagem foi realizada utilizando **UML (Unified Modeling Language)** para representar casos de uso e classes, enquanto a implementação prática foi desenvolvida em **PHP (backend)**, **MariaDB (banco de dados)** e **HTML/CSS/JavaScript (frontend)**, organizados com **Docker Compose**.
  
---

## DESENVOLVIMENTO  
### Modelagem do Sistema  
A modelagem foi feita utilizando **diagramas UML** para representar os principais elementos do sistema, considerando agora apenas as entidades **Admin, Aluno e Professor**.  

- **Diagrama de Casos de Uso**: representa as interações entre o administrador e o sistema, incluindo login e operações de cadastro, listagem, edição e exclusão de registros de alunos e professores.  
- **Diagrama de Classes**: define a estrutura do sistema, incluindo as classes, atributos e relacionamentos necessários para a implementação das funcionalidades básicas de gerenciamento.  

Esses diagramas foram utilizados como base para o desenvolvimento da **prova de conceito funcional (POC)**.

### IMPLEMENTAÇÃO  
O sistema foi desenvolvido utilizando **PHP (backend)**, **MariaDB (banco de dados)** e **HTML/CSS/JavaScript (frontend)**, organizados em containers com **Docker Compose**.  

As principais entidades implementadas no sistema são:  

- **Admin**: responsável pelo acesso e autenticação no sistema.  
- **Aluno**: permite o cadastro de estudantes.  
- **Professor**: permite o cadastro de professores.  

O backend expõe uma **API REST** que trata as operações de CRUD, aplicando validações de **CPF** e **email**. O frontend consome essa API para interação do usuário.  

### BANCO DE DADOS
O projeto utiliza **MariaDB**. O script de criação das tabelas está em `PI-2a-entrega/api/db/init.sql`.

**Tabelas principais:**
- administrador (`id`, `email` único, `senha`)
- aluno (`id`, `matricula`, `curso`, `nome`, `cpf` único (11), `email` único, `contato`, `administrador_id` FK)
- professor (`id`, `disciplina`, `nome`, `cpf` único (11), `email` único, `contato`, `administrador_id` FK)
- endereco (`id`, `cep`, `rua`, `bairro`, `numero`, `uf`, `complemento`)
- aluno_endereco (`aluno_id`, `endereco_id`)
- professor_endereco (`professor_id`, `endereco_id`)

### Backend / API
- Autenticação por **cookie** (`auth`):
  - `POST PI-2a-entrega/api/actions/login.php` → body JSON `{ "email": "...", "senha": "..." }`
  - `POST PI-2a-entrega/api/actions/logout.php`
- Admin:
  - `POST PI-2a-entrega/api/actions/criar_admin.php`
- Aluno:
  - `POST PI-2a-entrega/api/actions/criar_aluno.php` (cria aluno + endereço + relação)
- Professor:
  - `POST PI-2a-entrega/api/actions/criar_professor.php` (cria professor + endereço + relação)

---

## CONCLUSÃO  
O desenvolvimento deste sistema resultou em uma **prova de conceito funcional (POC)**, que permite o **login do administrador** e a execução de operações básicas de **cadastro, listagem, edição e exclusão de alunos e professores**.  

A modelagem em **UML** serviu de base para o recorte das entidades (Admin, Aluno e Professor), enquanto a implementação prática foi feita em **PHP**, com **MariaDB** para persistência dos dados e **HTML/CSS/JavaScript** no frontend.  

O sistema demonstra, de forma objetiva, a viabilidade da solução proposta dentro do prazo acadêmico, garantindo coerência entre a ideação inicial e a entrega técnica.
 
## DIAGRAMAS  

Os diagramas elaborados representam o recorte atual do sistema, considerando as entidades **Admin, Aluno e Professor**.  

- **Diagrama de Casos de Uso**: localizado em `diagramas/casos-de-uso.jpg`  
- **Diagrama de Classes**: localizado em `diagramas/diagrama-de-classe.jpg`  

## PROTÓTIPO  

Telas implementadas na prova de conceito:  
- **Login do Admin**  
- **Dashboard do Admin**  
- **Cadastro e gerenciamento de Alunos**  
- **Cadastro e gerenciamento de Professores**  

As capturas de tela atualizadas serão disponibilizadas em `prototipo/` após a finalização das interfaces.  

## Visão do Produto  

O sistema tem como objetivo centralizar e organizar o **cadastro de alunos e professores** em uma instituição de ensino, permitindo que um **administrador** realize as operações de forma simples, segura e eficiente.  

**Principais objetivos:**  
- Facilitar a gestão de cadastros acadêmicos.  
- Garantir a integridade dos dados por meio de validações automáticas (CPF e email).  
- Proporcionar uma interface intuitiva para o administrador.  

**Funcionalidades implementadas:**  
- Login de administrador.  
- Cadastro de alunos e professores.

**Problemas resolvidos:**  

- Processos manuais sujeitos a erros e inconsistências.  
- Dificuldade em manter informações de alunos e professores organizadas.  
- Ausência de validação automática em cadastros sensíveis (CPF e email).  

**Funcionalidades:**  

- Login de administrador.  
- Cadastro de alunos e professores.
- Validação de CPF e email para garantir integridade dos dados.  
- Interface simples e intuitiva para o administrador.  

---

### Personas  

#### Administradora — Ana Clara
- **Necessidades:** Agilidade e confiabilidade nos cadastros de alunos e professores.  
- **Desafios:** Evitar inconsistências e retrabalho.  
- **Como o sistema ajuda:** Oferece validação automática e uma interface intuitiva que reduz erros.  

#### Professor — José Almeida, 63 anos  
- **Ocupação:** Professor de TI  
- **Necessidades:** Ter seus dados cadastrados corretamente..  
- **Desafios:** Depender de processos administrativos lentos.  
- **Como o sistema ajuda:** Permite que a administração cadastre os dados de forma rápida e segura, garantindo integridade das informações.  

---

### Jornada das Personas  

#### Ana Clara (Administradora)  

| Etapa               | Ação                           | Ponto de Contato      | Dificuldades              |
|---------------------|--------------------------------|-----------------------|---------------------------|
| Login               | Acessa o sistema com credenciais | Tela de login        | Esquecimento de senha    |
| Cadastro            | Insere dados de aluno/professor | Formulário de cadastro | Erros de preenchimento  |
| Validação           | Sistema valida CPF e email      | Tela de feedback      | Dados inválidos          |
| Confirmação         | Recebe mensagem de sucesso      | Tela de confirmação   | -                        |
| Gerenciamento       | Cadastramento                   | Painel administrativo | Atualização incompleta   |

#### José Almeida (Professor)  

| Etapa               | Ação                           | Ponto de Contato      | Dificuldades             |
|---------------------|--------------------------------|-----------------------|--------------------------|
| Solicitar Cadastro  | Informa dados à administração  | Atendimento           | Informações incorretas   |
| Conferência         | Recebe confirmação             | E-mail                | Atraso no retorno        |
| Atualização         | Dados atualizados no sistema   | Sistema               | -                        |

 
