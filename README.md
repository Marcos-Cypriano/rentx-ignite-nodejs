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
    Deve ser possível cadastrar uma especificação para um carro.
**RN**
    Não deve ser possível cadastrar uma especificação para um carro não cadastrado;
    Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;
    O usuário responsável pelo cadastro deve ser administrador.


# Cadastro de imagens do carro
**RF**
    Deve ser possível cadastrar a imagem do carro.
**RNF**
    Utilizar o multer para upload dos arquivos.
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
    Não deve ser possível fazer um aluguel sem estar logado;
    Ao realizar um aluguel o status do carro deverá ser alterado para indisponível.

# Devolução de carro
**RF**
    Deve ser possível realizar a devolução de um carro
**RN**
    Se o carro for devolvido com menos de 24h, deverá ser cobradp diária completa;
    Não deve ser possível fazer uma  devolução sem estar logado;
    Ao realizar a devolução, o carro deverá ser liberado para outro aluguel;
    Ao realizar a devolução o usuário deverá ser liberado para realizar outro aluguel;
    Ao realizar a devolução deverá ser calculado o total do aluguel;
    Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso;
    Caso haja multa, deverá ser somado ao total do aluguel.

# Listagem de Alugueis para usuário
**RF**
    Deve ser possível realizar a busca de todos os alugueis para o usuário.
**RN**
    O usuário deve estar logado na aplicação.

# Recuperar Senha
**RF**
    Deve ser possível o usuário recuperar a senha informando o e-mails
    O usuário deve receber um e-mail com o passo a passo para a recuperaçãoa da senha
    O usuário deve conseguir inserir uma nova senha
**RN**
    O usuário precisa informar uma nova senha
    O link enviado para a recuperação deve expirar em 3 horas