class PerfumeDB{
    constructor(){
        this.perfumes = [
            {
                id: 1,
                title:'Malbec',
                slug:'Malbec-Desodorante-Colônia-100ml',
                text_link:'Malbec Desodorante Colônia 100ml',
                price:'179,00',
                max_price:'200,00',
                desc_item:'Malbec Desodorante Colônia é uma fragrância masculina inesquecível e ideal para o homem sedutor e marcante.',
                front_img:'https://res.cloudinary.com/beleza-na-web/image/upload/w_500,f_auto,fl_progressive,q_auto:eco/v1/imagens/products/B48130/B48130_Malbec_Desodorante_Col%C3%B4nia_1.jpg',
                images:[
                    {id: 1, src:'https://res.cloudinary.com/beleza-na-web/image/upload/w_500,f_auto,fl_progressive,q_auto:eco/v1/imagens/products/B48130/B48130_Malbec_Desodorante_Col%C3%B4nia_1.jpg'},
                    {id: 2, src:'https://res.cloudinary.com/beleza-na-web/image/upload/w_500,f_auto,fl_progressive,q_auto:eco/v1/imagens/products/B48130/B48130_Malbec_Desodorante_Col%C3%B4nia_5.jpg'},
                    {id: 3, src:'https://res.cloudinary.com/beleza-na-web/image/upload/w_500,f_auto,fl_progressive,q_auto:eco/v1/imagens/products/B48130/B48130_Malbec_Desodorante_Col%C3%B4nia_6.jpg'},
                    {id: 4, src:'https://res.cloudinary.com/beleza-na-web/image/upload/w_500,f_auto,fl_progressive,q_auto:eco/v1/imagens/products/B48130/B48130_Malbec_Desodorante_Col%C3%B4nia_8.jpg'},
                ],
                info:[
                    {
                        categoria:'Masculino',
                        marca:'Malbec',
                        linha:'Tradicional',
                        familia_olfativa:'Amadeirado',
                        concentração:'Desodorante Colônia'
                    }
                ]
                
            },
            {
                id: 2,
                title:'Quasar',
                slug:'Quasar-Vision-Desodorante-Colônia-100ml',
                text_link:'Quasar Vision Desodorante Colônia 100ml',
                price:'115,90',
                max_price:'130,00',
                desc_item:'Quasar Vision traz Frescor clássico que te incentiva no dia a dia a correr atrás dos seus objetivos e ir além.',
                front_img:'https://res.cloudinary.com/beleza-na-web/image/upload/w_500,f_auto,fl_progressive,q_auto:eco/v1/imagens/product/B50662/42b88ff2-868a-4670-88e6-c8023fad1bfa-bot-50662-quasar-vision-colonia-frontal-01.jpg',
                images:[
                    {id: 1, src:'https://res.cloudinary.com/beleza-na-web/image/upload/w_500,f_auto,fl_progressive,q_auto:eco/v1/imagens/product/B50662/3609b852-053b-4830-97b8-35e8f5e8415b-bot-50662-quasar-vision-colonia-ambientada-03.jpg'},
                    {id: 2, src:'https://res.cloudinary.com/beleza-na-web/image/upload/w_500,f_auto,fl_progressive,q_auto:eco/v1/imagens/product/B50662/eefe2631-1b0d-4c2a-995e-a9a4d287a646-bot-50662-quasar-vision-colonia-segredinho-04.jpg'},

                ],
                info:[
                    {
                        categoria:'Masculino',
                        marca:'Quasar',
                        linha:'Vision',
                        familia_olfativa:'Fresco',
                        concentração:'Desodorante Colônia'
                    }
                ]
            },
            {
                id: 3,
                title:'Botica 214',
                slug:'Botica-214-Golden-Gardênia-Eau-De-Parfum-75ml',
                text_link:'Botica 214 Golden Gardênia Eau De Parfum 75ml',
                price:'170,00',
                max_price:'200,00',
                desc_item:'O Botica 214 Golden Gardênia Eau De Parfum é uma fragrância sensual e marcante, que esbanja feminilidade e personalidade na intensidade certa para seus dias.',
                front_img:'https://res.cloudinary.com/beleza-na-web/image/upload/w_500,f_auto,fl_progressive,q_auto:eco/v1/imagens/products/B47629/BOTICA-214-EDP-GOLDEN-GARDENIA-75ml_B47629.jpg',
                images:[
                    {id: 1, src:'https://res.cloudinary.com/beleza-na-web/image/upload/w_500,f_auto,fl_progressive,q_auto:eco/v1/imagens/products/B47629/BOTICA-214-EDP-GOLDEN-GARDENIA-75ml_B47629.jpg'},
                    {id: 2, src:'https://res.cloudinary.com/beleza-na-web/image/upload/w_500,f_auto,fl_progressive,q_auto:eco/v1/imagens/products/B47629/BOTICA-214-EDP-GOLDEN-GARDENIA-75ml_B47629_REGUA.jpg'},
                    {id: 3, src:'https://res.cloudinary.com/beleza-na-web/image/upload/w_500,f_auto,fl_progressive,q_auto:eco/v1/imagens/products/B47629/BOTICA-214-EDP-GOLDEN-GARDENIA-75ml_B47629_segredinho.jpg'},
                ],
                info:[
                    {
                        categoria:'Feminino',
                        marca:'Botica 214',
                        linha:'Golden Gardênia',
                        familia_olfativa:'Floral',
                        concentração:'Eau de Parfum'
                        
                    }
                ]
            },
            {
                id: 4,
                title:'JEAN PAUL GAULTIER',
                slug:'Ultra-Male-Jean-Paul-Gaultier',
                text_link:'Ultra Male Jean Paul Gaultier',
                price:'439,90',
                max_price:'629,00',
                desc_item:'Assinado por Francis Kurkdjian, a fragrância fougère frutal resultante da combinação é perfeita para eventos noturnos, quer sejam eles festas e baladas ou encontros românticos.',
                front_img:'https://epocacosmeticos.vteximg.com.br/arquivos/ids/499115/Ultra-Male-Jean-Paul-Gaultier---Perfume-Masculino---Eau-de-Toilette--8-.jpg?v=637938817572370000',
                images:[
                    {id: 1, src:'https://epocacosmeticos.vteximg.com.br/arquivos/ids/499115/Ultra-Male-Jean-Paul-Gaultier---Perfume-Masculino---Eau-de-Toilette--8-.jpg?v=637938817572370000'},
                    {id: 2, src:'https://epocacosmeticos.vteximg.com.br/arquivos/ids/499116/Ultra-Male-Jean-Paul-Gaultier---Perfume-Masculino---Eau-de-Toilette--9-.jpg?v=637938817649730000'},
                    {id: 3, src:'https://epocacosmeticos.vteximg.com.br/arquivos/ids/499117/Ultra-Male-Jean-Paul-Gaultier---Perfume-Masculino---Eau-de-Toilette--10-.jpg?v=637938817721000000'},
                    {id: 4, src:'https://epocacosmeticos.vteximg.com.br/arquivos/ids/499121/Ultra-Male-Jean-Paul-Gaultier---Perfume-Masculino---Eau-de-Toilette--14-.jpg?v=637938818047600000'},
                    {id: 5, src:'https://epocacosmeticos.vteximg.com.br/arquivos/ids/499121/Ultra-Male-Jean-Paul-Gaultier---Perfume-Masculino---Eau-de-Toilette--14-.jpg?v=637938818047600000'},
                ],
                info:[
                    {
                        categoria:'Masculino',
                        marca:'JEAN PAUL GAULTIER',
                        linha:'Ultra Male',
                        familia_olfativa:'Fougére, Oriental',
                        concentração:'Eau de Toilette'
                    }
                ]
                
            },
            {
                id: 5,
                title:'212 VIP',
                slug:'212-VIP-Rosé---CAROLINA-HERRERA',
                text_link:'212 VIP Rosé - CAROLINA HERRERA',
                price:'261,90',
                max_price:'299,00',
                desc_item:'Um perfume especial entra em cena. E com ele a garota que muda tudo. A garota que reescreve as regras. ',
                front_img:'https://epocacosmeticos.vteximg.com.br/arquivos/ids/515116/212-VIP-Rose-Carolina-Herrera---Perfume-Feminino---Eau-de-Parfum-30ml--1-.jpg?v=638017223482400000',
                images:[
                    {id: 1, src:'https://epocacosmeticos.vteximg.com.br/arquivos/ids/515116/212-VIP-Rose-Carolina-Herrera---Perfume-Feminino---Eau-de-Parfum-30ml--1-.jpg?v=638017223482400000'},
                    {id: 2, src:'https://content.syndigo.com/asset/d432fa9d-ac59-43d9-a1d3-0bbbe8f75211/599.webp'},
                    {id: 3, src:'https://epocacosmeticos.vteximg.com.br/arquivos/ids/485828/212-VIP-Rose-Carolina-Herrera---Perfume-Feminino---Eau-de-Parfum-30ml--2-.jpg?v=637867666784430000'},
                ],
                info:[
                    {
                        categoria:'Feminina',
                        marca:'CAROLINA HERRERA',
                        linha:'VIP 212',
                        familia_olfativa:'Amadeirado, Floral, Frutal',
                        concentração:'Eau de Parfum - EDP'
                        
                    }
                ]
                
            },
            {
                id: 6,
                title:'212 Vip',
                slug:'212-Vip-Black-Carolina-Herrera',
                text_link:'212 Vip Black Carolina Herrera',
                price:'499,00',
                max_price:'599,00',
                desc_item:'212 VIP Black é o centro das atenções, todos os olhares se voltam para ele. É sensual e viciante: uma aura elegante que lhe permite conquistar a festa.',
                front_img:'https://epocacosmeticos.vteximg.com.br/arquivos/ids/501874/212-vip-black-carolina-herrera-perfume-masculino-eau-de-parfum--1-.jpg?v=637951419481930000',
                images:[
                    {id: 1, src:'https://epocacosmeticos.vteximg.com.br/arquivos/ids/501874/212-vip-black-carolina-herrera-perfume-masculino-eau-de-parfum--1-.jpg?v=637951419481930000'},
                    {id: 2, src:'https://epocacosmeticos.vteximg.com.br/arquivos/ids/501875/212-vip-black-carolina-herrera-perfume-masculino-eau-de-parfum--2-.jpg?v=637951419702330000'},
                    {id: 3, src:'https://epocacosmeticos.vteximg.com.br/arquivos/ids/501878/212-vip-black-carolina-herrera-perfume-masculino-eau-de-parfum--5-.jpg?v=637951420207030000'},
                ],
                info:[
                    {
                        categoria:'masculino',
                        marca:'Carolina Herrera',
                        linha:'212 vip',
                        familia_olfativa:'Aromático, Fougére',
                        concentração:'Eau de Parfum'
                        
                    }
                ]
                
            },
            /*{
                id: 7,
                title:'',
                slug:'',
                text_link:'',
                price:'',
                max_price:'',
                desc_item:'',
                front_img:'',
                images:[
                    {id: 1, src:''},
                    {id: 2, src:''},
                    {id: 3, src:''},
                    {id: 4, src:''},
                ],
                info:[
                    {
                        categoria:'',
                        marca:'',
                        linha:'',
                        familia_olfativa:'',
                        concentração:''
                        
                    }
                ]
                
            },
            {
                id: 8,
                title:'',
                slug:'',
                text_link:'',
                price:'',
                max_price:'',
                desc_item:'',
                front_img:'',
                images:[
                    {id: 1, src:''},
                    {id: 2, src:''},
                    {id: 3, src:''},
                    {id: 4, src:''},
                ],
                info:[
                    {
                        categoria:'',
                        marca:'',
                        linha:'',
                        familia_olfativa:'',
                        concentração:''
                        
                    }
                ]
                
            },*/
        ]
    }
    getPerfumes(){
        return this.perfumes;
    }
    getBySlug(slug){
        const perfume = this.perfumes.find(perfume => perfume.slug === slug ? perfume : undefined);
        return perfume;
    }
}
export default PerfumeDB;