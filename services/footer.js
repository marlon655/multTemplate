class FooterService {
    constructor() {
      this.links = [
        {
            id: 1,
            title: 'Duvidas',
            links:[
                {   
                    desc:'Perguntas Frequentes',
                    adress: '#'
                },
                {
                    desc:'Formas de pagamento',
                    adress: '#'
                },
                {
                    desc:'Frete e Entrega',
                    adress: '#'
                },
                {
                    desc:'troca e devoluções',
                    adress:'#'
                }

            ]
        },
        {
            id: 2,
            title: 'Institucional',
            links:[
                {   
                    desc:'Nossa história',
                    adress: '#'
                },
                {
                    desc:'Trabalhe conosco',
                    adress: '#'
                },
                {
                    desc:'Onde comprar',
                    adress: '#'
                }
            ]
        }
      ];
    }
  
    getLinks() {
      return this.links;
    }
  }
  
  export default FooterService;
  