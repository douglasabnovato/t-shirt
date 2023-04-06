import Vue from 'vue';
import Vuex from 'vuex';

import camiseta12 from './assets/camisetas/camisa-1-2.jpg';
import camiseta22 from './assets/camisetas/camisa-2-2.jpg';
import camiseta32 from './assets/camisetas/camisa-3-2.jpg';
import camiseta52 from './assets/camisetas/camisa-5-2.jpg';
import camiseta62 from './assets/camisetas/camisa-6-2.jpg';
import camiseta72 from './assets/camisetas/camisa-7-2.jpg';
import camiseta82 from './assets/camisetas/camisa-8-2.jpg';
import camiseta92 from './assets/camisetas/camisa-9-2.jpg';
import camiseta102 from './assets/camisetas/camisa-10-2.jpg';
import camiseta112 from './assets/camisetas/camisa-11-2.jpg';
import camiseta122 from './assets/camisetas/camisa-12-2.jpg';
import camiseta132 from './assets/camisetas/camisa-13-2.jpg';

import camisetabasica12 from './assets/camisetas/camisa-basica-1-2.jpg';
import camisetabasica22 from './assets/camisetas/camisa-basica-2-2.jpg';
import camisetabasica32 from './assets/camisetas/camisa-basica-3-2.jpg';
import camisetabasica42 from './assets/camisetas/camisa-basica-4-2.jpg';

import camisetaestampa12 from './assets/camisetas/camisa-estampa-1-2.jpg';
import camisetaestampa22 from './assets/camisetas/camisa-estampa-2-2.jpg';
import camisetaestampa32 from './assets/camisetas/camisa-estampa-3-2.jpg';
import camisetaestampa42 from './assets/camisetas/camisa-estampa-4-2.jpg';

import moletom12 from './assets/moletons/moletons-1-2.jpg';
import moletom22 from './assets/moletons/moletons-2-2.jpg';
import moletom32 from './assets/moletons/moletons-3-2.jpg';
import moletom42 from './assets/moletons/moletons-4-2.jpg';
import moletom52 from './assets/moletons/moletons-5-2.jpg';
import moletom62 from './assets/moletons/moletons-6-2.jpg';
import moletom72 from './assets/moletons/moletons-7-2.jpg';
import moletom82 from './assets/moletons/moletons-8-2.jpg';
import moletom92 from './assets/moletons/moletons-9-2.jpg';
import moletom102 from './assets/moletons/moletons-10-2.jpg';

import acessorio12 from './assets/acessorios/acessorio-1-2.jpg';
import acessorio22 from './assets/acessorios/acessorio-2-2.jpg';
import acessorio32 from './assets/acessorios/acessorio-3-2.jpg';
import acessorio42 from './assets/acessorios/acessorio-4-2.jpg';
import acessorio52 from './assets/acessorios/acessorio-5-2.jpg';
import acessorio62 from './assets/acessorios/acessorio-6-2.jpg';
import acessorio72 from './assets/acessorios/acessorio-7-2.jpg';
import acessorio82 from './assets/acessorios/acessorio-8-2.jpg';
import acessorio92 from './assets/acessorios/acessorio-9-2.jpg';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    acessorios: [
      {
        name: 'SKETCHBOOK PRAISE THE SUN',
        price: 64.99,
        image: acessorio12,
        stars: 3.4,
        totalReviews: 90,
        details: 'O Sol é adorado por esse cavaleiro que é conhecido pelo otimismo e pela gentileza. De forma recorrente, ele vai para a ponta dos pés e abre os braços sobre a cabeça, formando um "V", para exaltar o astro. Com a expressão praise the sun, demonstra toda sua gratidão. Seu sonho? Encontrar seu próprio Sol!',
      },
      {
        name: 'SKETCHBOOK SIMONE DE BEAUVOIR',
        price: 66.99,
        image: acessorio22,
        stars: 3.4,
        totalReviews: 90,
        details: 'Em 1908, nascia a francesa Simone de Beauvoir. Embora não se considerasse uma filósofa, Simone influenciou de maneira significativa o existencialismo e a teoria feminista. É dela a frase: "Ninguém nasce mulher, torna-se". Estudou Filosofia na Universidade Sorbonne, em Paris, onde conheceu o também filósofo Jean-Paul Sartre. Os dois mantiveram um relacionamento aberto por toda a vida. Aos 23 anos, virou professora de Filosofia na Universidade de Marselha e começou a publicar ensaios, romances e livros com reflexões sobre o papel da mulher na sociedade. Morreu aos 78 anos pelo agravamento de uma pneumonia. Foi enterrada no Cemitério de Montparnasse, no mesmo túmulo de Sartre. ',
      },
      {
        name: 'SKETCHBOOK TOMÁ CAFÉ',
        price: 74.99,
        image: acessorio32,
        stars: 3.4,
        totalReviews: 90,
        details: 'Ô, menina! Café veio lá do pé, exposto à chuva, ao sol e até à escuridão. Imagina a desfeita que é pra manhã não se vestir de café depois de tamanha comunhão? Se cê não quiser, eu posso fazer esse sacrifício para não desagradar muito o dia. Pó deixar que tomar café eu vou. Café não costuma faiá.',
      },
      {
        name: 'SKETCHBOOK CAFEZIM',
        price: 64.99,
        image: acessorio42,
        stars: 3.4,
        totalReviews: 90,
        details: 'O dia pode estar frio ou quente. Pode estar sendo produtivo ou então um daqueles complicados, que você torce pra acabar logo. Pode ser um dia cheio de compromissos ou então aqueles que a gente fica só sentadinho apreciando a paisagem e pensando na vida, ouvindo uma boa música.Mas sabe quem sempre estará lá, em qualquer dia, qualquer hora e sempre vai ser uma ótima companhia? Aquele cafezim, claro! Essa estampa faz parte da nossa seleção de Sketchbook Minas Gerais.',
      },
      {
        name: 'SKETCHBOOK HAUNTED BY HUMANS',
        price: 64.99,
        image: acessorio52,
        stars: 3.4,
        totalReviews: 90,
        details: 'Que tal alguns conselhos dela? Sim, a Morte chegou por aqui toda cheia de queixas. E pra você lembrar que nem tudo está perdido, o sketchbook Haunted by Humans dá o tom.',
      },
      {
        name: 'SKETCHBOOK NOVO SEGUIDOR',
        price: 64.99,
        image: acessorio62,
        stars: 3.4,
        totalReviews: 90,
        details: 'Lembrete que a vida vai além de likes e followers? A capa do sketchbook Novo Seguidor é pra dar um click na mente de vez em quando.',
      },
      {
        name: 'SKETCHBOOK E.T. BIKE',
        price: 64.99,
        image: acessorio72,
        stars: 3.4,
        totalReviews: 90,
        details: 'Elliott ainda não tinha consciência disso na época do filme, mas ele e os amigos estavam fazendo um bem danado ao planeta quando escaparam da polícia na clássica cena do filme. Isso porque bicicletas, além de serem ótimas para manter um bom condicionamento físico, não poluem! Motivo de muito orgulho para ET e para o nosso artista convidado Rafael Correa no Sketchbook E.T. Bike!',
      },
      {
        name: 'SKETCHBOOK ANGELA DAVIS',
        price: 64.99,
        image: acessorio82,
        stars: 3.4,
        totalReviews: 90,
        details: 'Negra, ativista e feminista, Angela Davis é professora emérita do departamento de estudos feministas da Universidade da Califórnia e ícone da luta pelos direitos civis. Nasceu no Alabama, em 1944, um dos estados mais racistas do sul dos Estados Unidos. Integrou o Partido Comunista norte-americano e foi candidata à vice-presidência da República em 1980 e 1984. Ligada ao Panteras Negras, foi presa na década de 1970 e ficou mundialmente conhecida pela mobilização da campanha “Libertem Angela Davis”.John Lennon e Yoko Ono lançaram a música Angela em sua homenagem e os Rolling Stones gravaram Sweet Black Angel pedindo sua libertação.',
      },
      {
        name: 'SKETCHBOOK NOT TODAY SNORLAX',
        price: 64.99,
        image: acessorio92,
        stars: 3.4,
        totalReviews: 90,
        details: 'A gente vive na era da produtividade, sim, nós sabemos disso. É um tal de "trabalhe enquanto eles dormem" ou "não deixe para amanhã o que você pode fazer hoje" que cansa, tá? Estamos cansados de reagir. Por isso, hoje, nós decidimos dar a palavra para o Snorlax que nada tinha a dizer pois estava dormindo, coisa que você também devia fazer. Então desacelera! Tira as pilhas do relógio e jogue elas fora por um tempo. Apenas descanse, tire um tempo pra não fazer nada, aproveite a vida desacelerado e se espelhe no nosso amigo Pokémon. Só, por favor, não trabalhe enquanto eles dormem, durma também.',
      },
    ],

    camisetas: [
      {
        name: 'CAMISA TERRA BRASILIS',
        price: 174.99,
        image: camisetaestampa42,
        stars: 3.4,
        totalReviews: 90,
        details: 'Quando as naus e caravelas de além mar apontaram na costa de cá, a terra se anunciou às vistas dos navegantes antes do grito famoso se anunciar. Um escândalo de proporções continentais inundou os olhos de água da tripulação portuguesa. Um oceano verde de óbvia riqueza compensava enfim os dias de ressaca e correnteza. Não deve existir presente melhor do que, depois de um infinito azul anil, dar de cara com o paraíso tropical que hoje a gente chama de Brasil. Todas as folhas, formas, troncos e grãos; todos os peixes, todas as aves, todos os ecossistemas são das matérias mais ricas para a confecção de poemas. E assim esse país se fez: com a magia que cresce do chão versada pelos fonemas de um novo português. O Brasil é uma obra de arte por essência. A música que pulsa dentro da gente é inevitável. É uma vibração que existe desde antes de conhecermos sábado, domingo e feriado. Tá no jeito de abrir os olhos e marcado no ritmo dos nossos passos. A gente aprendeu a ser bicho de cimento, mas o que corre em nossas veias ainda é a seiva do mato. A camisa de botão Terra Brasilis traz uma estampa corrida gigante pela própria natureza que traduz, na viscose, o que o tato reconhece como leveza.',
      },
      {
        name: 'CAMISA TRÓPICO',
        price: 172.99,
        image: camisetaestampa32,
        stars: 3.4,
        totalReviews: 90,
        details: 'O astro rei já deu a nota e o espetáculo começou. No céu, o dançar dos pássaros mais parece um convite para que a gente entre na roda. Enquanto isso, a brisa fresca bate no nosso rosto, levando com elas os resquícios de preocupação. Acontece que o céu seguiu o compasso e deixou tudo mais azul, tal como um dia de verão deve ser. E claro que a gente não deixaria de vestir toda a leveza radiante da estação. Principalmente quando a nossa camisa de botão consegue carregar essa essência em uma estampa corrida e cheia de vida. A camisa Trópico traz a energia dos dias de verão sem a preocupação com as chuvas fortes ao fim da tarde. É cor, detalhe, natureza e todo o jeito leve de vestir essa beleza.',
      },
      {
        name: 'CAMISA CAJUEIRO',
        price: 170.99,
        image: camisetaestampa22,
        stars: 3.4,
        totalReviews: 90,
        details: 'Nessa região tropical da América do Sul, onde o sol brilha salgado e as chuvas têm doçura, as plantas encontram amores com facilidade no vento e engravidam de toda a sorte de frutas. O Brasil é uma porção de terra polpuda onde os galhos das florestas terminam em nova vida. É um lugar em que os finais pulsam em recomeço. A culpa deve ser do sol, da terra, ou de qualquer outra dessas matérias que nos formam e são abundantes em vida. Essa camisa de botão de estampa corrida tem gosto do que a nossa terra dá e a fartura do caju sem o ônus de deixar a boca presa. A viscose é um tecido soltinho e cheio de beleza.',
      },
      {
        name: 'CAMISA COSMO',
        price: 170.99,
        image: camisetaestampa12,
        stars: 3.4,
        totalReviews: 90,
        details: 'Já parou pra pensar na imensidão do cosmos? Estamos falando do humilde amontoado de todas as coisas do universo, das galáxias mais novas até as estrelas de bilhões de anos que enfeitam o céu. Mas, talvez, o mais encantador sobre o cosmos seja o fato de tudo coexistir em harmonia. A beleza, a ordem e a sintonia que dão o tom da nossa vida é organizada em todo o seu caos. Que chique parar pra pensar nessas coisas e se reconhecer como um pedacinho dessa imensidão! A gente mergulhou de cabeça nessa ideia e decidiu trazer toda a beleza para a camisa Cosmos.',
      },
      {
        name: 'CAMISETA BOLSO SUCUPIRA',
        price: 84.99,
        image: camisetabasica42,
        stars: 3.4,
        totalReviews: 90,
        details: 'Tem uns dias que a gente olha pra cima e pensa “por que me mandou gente? Que vontade de ser árvore”, mas a gente só fala isso porque não conhece a vida de uma árvore... Ah, conhece? Fala o nome de cinco delas que não tenham o nome de uma fruta mais “eira” no final. Tô te falando... Mas aqui, no fundo do bolso dessa camiseta básica marrom sucupira, tem informação. Sucupira vem do tupi e é o nome dado para várias árvores da família das fabáceas, que são as leguminosas. Até dá para citar seis aqui, mas a gente tá falando da camiseta e ela muito bonita pra mudar de assunto. É castanha como um amendoim-bravo, real como uma sucupira-do-campo... (e já foram duas)',
      },
      {
        name: 'CAMISETA BÁSICA VERDE SÁLVIA',
        price: 74.99,
        image: camisetabasica32,
        stars: 3.4,
        totalReviews: 90,
        details: 'A camiseta verde sálvia é um alívio para qualquer conjunto bagunçado, é um respiro entre o caos daquelas listras tão urbanas, é um cantinho de paz entre todas as informações do guarda-roupa. Sálvia é uma plantinha folhosa sem vergonha que entrosa fácil com qualquer jardim. A sálvia é como uma camiseta básica da roupagem dos canteiros e é como as demais plantas: bonitinha e acessível.',
      },
      {
        name: 'CAMISETA BÁSICA PRETO NOIR',
        price: 174.99,
        image: camisetabasica12,
        stars: 1,
        totalReviews: 123,
        details: 'Físicos dizem que o preto é a ausência da cor, mas preto é como cor pra quem veste. Uma camiseta lisa preta consegue ser confortável e própria em qualquer lugar, ela carrega uma identidade própria e versátil. A camiseta básica Preto Noir foi idealizada e costurada de modo a abraçar você e seu jeito de vestir.',
      },
      {
        name: 'CAMISETA BÁSICA VERDE SÁLVIA',
        price: 64.99,
        image: camisetabasica22,
        stars: 3.4,
        totalReviews: 90,
        details: 'A camiseta verde sálvia é um alívio para qualquer conjunto bagunçado, é um respiro entre o caos daquelas listras tão urbanas, é um cantinho de paz entre todas as informações do guarda-roupa. Sálvia é uma plantinha folhosa sem vergonha que entrosa fácil com qualquer jardim. A sálvia é como uma camiseta básica da roupagem dos canteiros e é como as demais plantas: bonitinha e acessível.',
      },
      {
        name: 'CAMISETA GOGH NIGHT',
        price: 94.99,
        image: camiseta132,
        stars: 4.8,
        totalReviews: 159,
        details: 'As noites de Van Gogh sempre foram mais iluminadas do que as noites comuns. É que ele se comunica tão bem com as cores que elas quase adquirem um brilho próprio só para iluminar suas criações. As estrelas se transformam em círculos amarelos e brancos que mais parecem dançar por entre as nuvens do céu. Fazer tinta brilhar não é pra qualquer um, mas Van Gogh sempre conseguiu. A camiseta Gogh Night dá uma outra forma à noite estrelada mais bonita que a gente já viu.',
      },
      {
        name: 'CAMISETA PAULO FREIRE',
        price: 74.99,
        image: camiseta122,
        stars: 4.1,
        totalReviews: 359,
        details: 'Paulo Freire é um patrimônio nacional. O Patrono da Educação Brasileira é considerado um dos pensadores mais importantes da história da pedagogia mundial, sendo admirado mundo afora. Sua obra segue atual e nos leva a refletir sobre a importância da alfabetização para as populações desfavorecidas e oprimidas. Segundo Paulo Freire, "a leitura do mundo precede a leitura da palavra". Com isso, falava da importância de pensar a educação de forma que essa seja capaz de reconhecer a cultura do educando, agindo com base na sua realidade, porque somente assim ela faria sentido para aquele que vai ser alfabetizado. Desprezar o legado de Paulo Freire é uma barbárie e aqui acreditamos que a educação muda o mundo. Por isso nada mais justo do que homenageá-lo com a camiseta Paulo Freire.',
      },
      {
        name: 'CAMISETA O AUTO DA COMPADECIDA',
        price: 74.99,
        image: camiseta112,
        stars: 4.7,
        totalReviews: 219,
        details: 'Quem nunca deu boas risadas com as peripécias do malandro João Grilo e do medroso Chicó? O Auto da Compadecida é um retrato divertido de parte do nosso Brasil varonil e agora essa pérola do grande Ariano Suassuna recebe a nossa homenagem! A camiseta O Auto da Compadecida tá bem bela, gente. Não sei, só sei que foi assim!',
      },
      {
        name: 'CAMISETA PAGODINHO',
        price: 79.99,
        image: camiseta102,
        stars: 4.7,
        totalReviews: 573,
        details: 'Pagodinho é o nome mais sincero que o partideiro Zeca podia escolher pra sua carreira musical. Sabe por que é samba o que o Zeca Pagodinho toca? Porque antes de nomear gênero musical, pagode era o nome de festa que tinha comida, bebida e samba de roda. É, rapaz. E você achando aí que ele estava tirando água do deserto. Camarão que dorme, a onda leva, viu? Zeca Pagodinho, muito mais do que certo e coberto de razão, espalhou pelo país o que a roda de samba tem de bom, e quando o Brasil sentiu a vibração que o samba traz, descobriu rapidinho que o ama demais. Verdade. Zeca chegou aqui no sapatinho com uma coleção oficial inteira. Toda a renda da coleção será direcionada ao Instituto Zeca Pagodinho, escola de capacitação artística e cultural em Xerém, no Rio de Janeiro.',
      },
      {
        name: 'CAMISETA GATINHO',
        price: 84.99,
        image: camiseta92,
        stars: 4.4,
        totalReviews: 473,
        details: 'Só porque eu sou um gato quer dizer que eu sou o animal de estimação dessa casa? De onde você tirou essa ideia, Márcia? Não senhora, todo mundo já está cansado de saber que eu não sou apenas um membro da família e sim o dono da casa! Nós, os felinos, já sabemos muito bem que vocês tendem a achar que estão no controle da situação mas, verdade seja dita, somos nós quem ditamos as regras. A hora do carinho, da comida, das brincadeiras, tudo é a gente que escolhe! Tanto é que, de vez em quando, nós até utilizamos a madrugada para embalar nossos picos de energia, é que correr pela casa sob a luz do luar tem um charme especial. Já está quase na hora da minha soneca, então não vou me prolongar, eu só queria mesmo esclarecer essa ideia. A camiseta Gatinho chega para estampar a presença do verdadeiro dono da casa: o gato! Uma estampa cheia de charme e braveza felina.',
      },
      {
        name: 'CAMISETA KITTEN HORROR MOVIE',
        price: 79.99,
        image: camiseta82,
        stars: 4.6,
        totalReviews: 274,
        details: 'Se você é um amante dos bons clássicos do terror, então, certamente, já sabe que os gatos têm uma enorme influência sobre as principais produções do gênero. Jason, Pennywise e, até mesmo o Hannibal, foram criações felinas que ganharam espaço em salas de cinema por todo o mundo. Mas, infelizmente, muita gente ainda não sabe quem está por trás desses grandes filmes, por isso, estampamos os principais gatos do terror na camiseta Kitten Horror Movie.',
      },
      {
        name: 'CAMISETA CACATUA DE BOLSO',
        price: 84.99,
        image: camiseta72,
        stars: 4.6,
        totalReviews: 314,
        details: 'Elas brincam, dançam, reclamam quando as coisas não saem conforme a cabeça de ave delas pensou e, embora sejam consideradas animais exóticos, são ótimas companhias e já conquistaram um lugar todo especial na fila dos pets domésticos. Fato é que as cacatuas, charmosas como elas só, fazem sucesso entre aves e humanos e podem viver até 60 anos! (sim, gente! É isso mesmo.) Mas, antes de ter uma cacatua para chamar de sua, é necessário se certificar de que ela vai ser tratada como a princesa que é. Para isso, ela precisa de muito espaço para se expressar e doses constantes de carinho! Ah! Isso sem falar que as bonitas também gostam de calor, então manter o ambiente mais aquecido nos dias frios é sempre bom. Por aqui, toda essa beleza chegou para estampar a camiseta personalizada Cacatua de Bolso. Uma peça que compõe a nossa seleção de camisetas de animais e carrega um toque de graça à parte!',
      },
      {
        name: 'CAMISETA SABIÁ LARANJEIRA',
        price: 84.99,
        image: camiseta62,
        stars: 4.3,
        totalReviews: 214,
        details: 'De acordo com uma antiga lenda indígena, se uma criança ouvisse o canto de um sabiá-laranjeira, durante as madrugadas do início da primavera, ela seria abençoada com amor, felicidade e paz. Considerada uma ave símbolo do Brasil, o sabiá não só possui um canto muito conhecido como inspira diversas canções e poemas! Por aqui, ele também nos inspirou e deu vida à camiseta Sabiá Laranjeira. Uma estampa que celebra a brasilidade e as muitas belezas que colorem o nosso país.',
      },
      {
        name: 'CAMISETA HOME IS WHERE MY DOGS ARE',
        price: 84.99,
        image: camiseta52,
        stars: 4.9,
        totalReviews: 120,
        details: 'A palavra casa significa uma construção de tamanhos variados, quase sempre destinada à habitação. Uma palavra com significado tão claro que é como se já nascêssemos sabendo. Mas, tem uma coisa interessante sobre as casas, pois, apesar da definição conhecida, ela também pode ser um sentimento, causado pela presença de alguns aumigos que nós também chamamos de família. Se você tem um aumigo para chamar de seu, muito provavelmente, sabe do que estamos falando. Afinal, toda casa parece vazia quando não temos a companhia deles. Talvez sejam as patas peludas e fofas, o olhar fixo que parece entender todos os nossos sentimentos, o coração gigante ou tudo isso junto, no fim das contas o que importa é que chamamos de casa o lugar onde nosso cachorro está! A camiseta personalizada Home Is Where My Dogs Are te ajuda a carregar todo esse amor no peito.',
      },
      {
        name: 'CAMISETA TICO-TICO',
        price: 84.99,
        image: camiseta32,
        stars: 4.9,
        totalReviews: 240,
        details: 'O Tico-Tico é um dos pássaros mais admirados no Brasil e seu nome deriva do seu canto, muito característico e conhecido. Cantor nato, ele possui um domínio harmônico capaz de fazer inveja até nos músicos mais experientes e tem a melodia como sua melhor amiga. Além disso, ele também é um pássaro muito elegante e sua boniteza pode ser vista de longe. Assim, não tão de longe, porque ele mede no máximo 15 cm. Uma pequena grande joia da natureza que tanto embeleza a terra qaunto os céus e serviu de inspiração para a nossa estampa. A camiseta Tico-Tico carrega a beleza e a graça de um dos cantores da natureza em uma estampa minimalista cheia de encanto. ',
      },
      {
        name: 'CAMISETA DE BOA NA LAGOA',
        price: 84.99,
        image: camiseta12,
        stars: 5,
        totalReviews: 270,
        details: 'Segundo o último censo deboísta, realizado por nós, a capivara foi eleita como o mamífero roedor mais de boa da lagoa! Com uma plenitude que só ela tem, a capivara é um animal que definitivamente não quer guerra, pelo contrário! Além de ser amigável com todos, ela já atingiu níveis de paz de espírito que nós nem conseguimos imaginar. Por isso, passa seus dias contemplando a natureza, fazendo amizade com todos à sua volta, caminhando na beira dos rios e lagos e exercendo o seu direito de existir em paz! A camiseta minimalista De Boa Na Lagoa deu um toque zeem à nossa seleção de camisetas de animais. Uma boniteza que dá gosto!',
      },
      {
        name: 'CAMISETA CARCARÁ',
        price: 84.99,
        image: camiseta22,
        stars: 3.4,
        totalReviews: 120,
        details: 'Predador por excelência, o Carcará é uma ave de rapina que pode ser avistada em diversos locais do Brasil, inclusive em grandes centros urbanos. Acontece que essa famosa ave, que já ganhou até uma música em sua homenagem, possui uma grande capacidade de adaptação e por isso, é encontrada em vários locais. Apesar de “avoar que nem avião” e ter um “bico volteado que nem gavião”, ele pertence a família dos falcões e conta com características fascinantes. Por exemplo, ele possui uma coloração alaranjada próximo ao bico que muda de cor conforme o seu temperamento, oscilando entre cores amareladas e avermelhadas. Uma verdadeira obra de arte, um cadinho nervosa, que voa no céu! Por aqui, o Carcará ganha um lugar especial na estampa da nossa camiseta e exala boniteza!',
      },
    ],

    moletons: [
      {
        name: 'MOLETOM NOTHING LASTS FOREVER',
        price: 174.99,
        image: moletom92,
        stars: 1,
        totalReviews: 123,
        details: 'Assim como na natureza, nos pés que calçam a brasilidade, "nada se perde, tudo se transforma"! Chinelos de dedo só são verdadeiros quando estragam e precisam ser remendados com urgência utilizando um velho prego da caixa de ferramentas. Há quem pense que sapato rebentado não serve mais no pé, mas essa é uma grande ilusão. Crianças de todo o Brasil aprendem desde cedo que pra tudo existe um jeitinho e não há chinelo de borracha nessa vida que um prego não conserte. Em homenagem aos tempos de infância e com um toque de nostalgia, o moletom careca Nothing Lasts Forever chega com uma estampa minimalista e no estilo old school para exaltar o lado bom do jeitinho brasileiro.',
      },
      {
        name: 'MOLETOM CACHACINHA SUPREMACY',
        price: 229.99,
        image: moletom102,
        stars: 1,
        totalReviews: 123,
        details: 'Já dizia o grande sábio que uma dose de cachaça deixa a gente se sentindo um verdadeiro rei. Tudo bem, o sábio em questão somos nós e essa certeza veio logo após uma dose da boa e velha caninha, mas isso é só detalhe. O importante mesmo é que da cana-de-açúcar nasceu a bebida mais brasileira de todos os tempos e dessa vez é ela quem ganha espaço nas nossas estampas. Com uma estética old school cheia de personalidade, tal qual a cachaça, o moletom careca Cachacinha Supremacy passa uma mensagem clara sobre a bebida que tem como berço nosso país. Seu próximo moletom preferido espera por você!',
      },
      {
        name: 'MOLETOM CANGURU LA LUNA',
        price: 229.99,
        image: moletom82,
        stars: 1,
        totalReviews: 123,
        details: 'Há muitas luas o tempo era contado pelo brilho de prata que ilumina as noites. Cíclicas, tais como a lua, as mulheres se guiavam por ela e celebravam as mudanças de suas fases. Em uma espécie de ritual que cultua o sagrado de, simplesmente, ser, elas se permitiam a mudança, abençoadas pelos muitos ciclos que envolvem o feminino em suas múltiplas faces. No tarot, a carta A Lua evoca mistérios, sendo difícil de interpretar por seus vários significados. No geral ela fala sobre sonhos, intuição e as belezas (às vezes, nem tão belas assim) do inconsciente. Mas, é preciso estar ciente de que, tal como a lua, os caminhos têm um quê de enigma, um certo segredo que só se descobre seguindo a estrada. O moletom canguru La Luna une a força feminina que se emaranha à da lua, numa dança mística que só se entende sentindo. A estampa na frente e nas costas carrega toda a magia e mistério presentes em uma das poderosas cartas do tarot.',
      },
      {
        name: 'MOLETOM CANGURU LET IT BE',
        price: 219.99,
        image: moletom72,
        stars: 1,
        totalReviews: 123,
        details: 'Deixa de lado essa mania de cobrar o tempo ou de achar que a sua pressa exerce algum controle sobre ele. O tempo é bicho solto que só aceita ser guiado pela liberdade. Com a fluidez de uma brisa ele se permite passar, independentemente da sua vontade que esbraveja aos sete ventos. O negócio é deixar que as coisas aconteçam no momento certo. Tentar controlar as situações é uma escolha pesada demais, mais vale deixar ir e não sou só eu que digo isso. Poetas já escreviam odes ao poder do tempo, grandes músicos fizeram canções sobre o quão importante é “deixar ir” e para somar a esse grupo, a gente estampou o sentimento no nosso moletom canguru Let It Be.',
      },
      {
        name: 'MOLETOM CANGURU CÉREBRO',
        price: 219.99,
        image: moletom62,
        stars: 1,
        totalReviews: 123,
        details: 'Ah, a razão! Essa palavra pequena de significado grande que acerta por experiência e erra pela desconfiança. A razão que, ao contrário da emoção, deixa o coração meio de lado para dar lugar à voz da consciência. O cérebro sempre carregou a fama de ser a casa da razão mas, galera, fala sério, a gente está se referindo ao órgão que dá voz a todas as ideias, sejam elas toscas ou incrivelmente sensatas. Então, vamos dar um desconto pro cérebro, sem julgamentos, porque ele também tem direito a momentos de ócio. O moletom canguru Cérebro é um fenômeno que, no inverno ou no verão, faz par de jarra com o moletom Black Heart.',
      },
      {
        name: 'MOLETOM CANGURU WE EXIST',
        price: 219.99,
        image: moletom52,
        stars: 1,
        totalReviews: 123,
        details: 'Se tem uma coisa que nunca sai de moda é esse trem bom que é sentir e expressar seu amor por aí. Essa tal da verdade é bonita de se ver e faz um bem gigante se assumir com orgulho de ser quem a gente realmente é. É de peito aberto que a vida fica mais bonita e quanto mais nós aprendemos a viver, mais entendemos que a felicidade é coisa cara e preciosa. Longe dos padrões que a sociedade impõe, nosso objetivo é ser feliz e dizer em alto e bom tom todos os sentimentos que cabem no nosso coração. O moletom canguru We Exist estampa toda essa vida que transborda dentro de nós e mal cabe no peito.',
      },
      {
        name: 'MOLETOM CANGURU BLACK HEART',
        price: 219.99,
        image: moletom42,
        stars: 1,
        totalReviews: 123,
        details: 'O coração de um homem adulto é do tamanho de um punho fechado e seu peso é de, aproximadamente, 300g. Agora, pense só, é incrível que um órgão relativamente pequeno seja vital para a nossa sobrevivência. Por dia ele impulsiona mais de 70 mil litros de sangue que circulam em todo o nosso organismo, com um ritmo médio de 70 batimentos por minuto. Agora, longe das aulas de biologia, o coração continua sendo um órgão surpreendente por carregar todos os sentimentos do mundo, dos sonhos mais possíveis aos mais improváveis, das juras intermináveis de amor até aquelas amizades que são sinônimo de família. O coração é realmente apaixonante e, quanto mais sabemos sobre ele, mais instigados ficamos. Por aqui, ele ganhou um lugar especial no nosso moletom canguru com a estampa Black Heart que faz jus ao seu órgão inspirador e é um fenômeno por onde passa.',
      },
      {
        name: 'MOLETOM CANGURU EDVARD MUNCH',
        price: 219.99,
        image: moletom12,
        stars: 1,
        totalReviews: 123,
        details: 'Se tem uma coisa que grita alto sem emitir barulho algum são as emoções que, em turbilhão, se chocam dentro de nós. Na tentativa de soltar algum som elas se confundem e soam como desespero. Talvez seja por isso que Edvard Munch decidiu pintar tamanho sentimento que só mesmo nas cores encontra seu lugar. O Grito é a expressão de muitas emoções, é o amontoado de tudo aquilo que cabe no peito mas trava na garganta, tornando a voz algo inútil. Não é preciso som algum para sentir o desespero presente na obra de Munch, na verdade, o silêncio de se admirar um quadro desses é mais barulhento do que qualquer palavra. O moletom canguru Edvard Munch fala de tanta coisa e expressa tanta coisa que só mesmo uma estampa sem palavra alguma poderia fazer jus.',
      },
      {
        name: 'MOLETOM CANGURU PRETO NADA BÁSICO',
        price: 219.99,
        image: moletom22,
        stars: 1,
        totalReviews: 123,
        details: 'Básico? Eu? Nunca fui nem serei! Ao contrário do que esse pessoal fala, eu sou uma cor muito imponente. Me dou bem com quase todas as outras, combino com qualquer estação, sou a cor preferida das estampas e por aí vai! Sei que esse não é um papo muito modesto, mas hoje eu me permito ser exibido, até porque eu mereço. E hoje, excepcionalmente, quero reivindicar meu posto de preto nada básico. Eu chamo atenção, marco presença por onde passo e fico ainda mais bonito no inverno. O moletom canguru Preto Nada Básico faz parte da nossa coleção e é ideal para arrasar por aí.',
      },
      {
        name: 'MOLETOM CANGURU UAI',
        price: 219.99,
        image: moletom32,
        stars: 4.4,
        totalReviews: 348,
        details: 'Uai é uai, gente! Que mania que cês têm de ficar procurando pelo em ovo, tem coisa que simplesmente é assim e o “uai” é uma delas. Aqui em Minas Gerais ele serve pra tudo: demonstrar alegria, indignação, surpresa, dúvida e por aí vai. É difícil atribuir um único significado a essa palavra que, embora seja composta por três letras, pode ser tudo o que a sua imaginação permitir. Do lado de cá ele carrega todo esse universo de sentidos no moletom canguru Uai, uma homenagem com toque minimalista bonito demais da conta, pensado para quem gosta de carregar a mineiridade no peito.',
      },
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getCamisetas: state => state.camisetas,
    getMoletons: state => state.moletons,
    getAcessorios: state => state.acessorios,

    getAllProducts: state => state.camisetas.concat(state.moletons).concat(state.acessorios),

    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
