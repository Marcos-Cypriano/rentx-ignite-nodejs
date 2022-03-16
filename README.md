# Cadastro de carro
**RF** => Requisitos Funcionais
    Deve ser possível cadastrar um novo carro.
**RNF** => Requisitos Não Funcionais
    -
**RN** => Regras de Negócio
    Não deve ser possível cadastrar um carro com a placa já existente;
    O carro deve ser cadastrado como disponível por padrão;
    O usuário responsável pelo cadastro deve ser administrador.

# Listagem de carros
**RF**
    Deve ser possível listar todos os carros disponíveis.
    Deve ser possível listar todos os carros disponíveis pelo nome da categoria;
    Deve ser possível listar todos os carros disponíveis pelo nome da marca;
    Deve ser possível listar todos os carros disponíveis pelo nome do carro.
**RN**
    O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro
**RF**
    Deve ser possível cadastrar uma especificação para um carro;
    Deve ser possível listar todas as especificações;
    Deve ser possível listar todos os carros.
**RN**
    Não deve ser possível cadastrar uma especificação para um carro não cadastrado;
    Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;
    O usuário responsável pelo cadastro deve ser administrador.

# Cadastro de imagens do carro
**RF**
    Deve ser possível cadastrar a imagem do carro;
    Deve ser possível listar todos os carros.
**RNF**
    Utilizar o multer para upload dos arquivos;
**RN**
    O usuário deve poder cadastrar mais de uma imagem para o mesmo carro;
    O usuário responsável pelo cadastro deve ser administrador.

# Aluguel de carro
**RF**
    Deve ser possível cadastrar um aluguel.
**RN**
    O aluguel deve ter duração mínima de 24 horas;
    Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário;
    Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro;
    Não deve ser possível fazer um aluguel sem estar logado.