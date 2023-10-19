class FooterService {
    constructor() {
      this.links = [
        {
            id: 1,
            title: 'Duvidas',
            links:[
                {   
                    desc:'Nossa história',
                    adress: '#'
                }
            ]
        },
        {
            id: 2,
            title: 'Institucional',
            links:[
                {

                }
            ]
        }
      ];
    }
  
    getLinks() {
      return this.links;
    }
  
    getFlickById(id) {
      return this.flicks.find((flick) => flick.id === id);
    }
  }
  
  export default FooterService;
  